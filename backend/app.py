from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
from tensorflow.keras.utils import img_to_array, load_img
import os
import numpy as np
from constants.constant import imagelinks, labels
import nbformat
from io import BytesIO

app = FastAPI()

model = tf.keras.models.load_model("./model/final_model.h5")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.getenv("ALLOWED_ORIGIN")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/labels")
def get_labels():
    return imagelinks
    
@app.get("/notebook")
def get_notebook():
    with open("./notebook/crop-recommendation-system.ipynb", "r", encoding="utf-8") as f:
        notebook = nbformat.read(f, as_version=4)
    return notebook.dict()

@app.post('/predict')
async def predict(file: UploadFile = File(...)):
    # Read uploaded file contents into memory
    contents = await file.read()

    # Convert bytes into a PIL Image, resize to model's input size
    img = load_img(BytesIO(contents), target_size=(128, 128))
    img = img_to_array(img) / 255.0
    img = np.expand_dims(img, axis=0)  # shape (1, 128, 128, 3)

    # Predict
    pred = model.predict(img)
    predicted_class = np.argmax(pred)

    return {
        "prediction": labels[predicted_class],
        "image": imagelinks[predicted_class]['image']
    }
