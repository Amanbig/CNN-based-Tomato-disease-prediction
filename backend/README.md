# TomatoGuard AI Backend

The backend service for TomatoGuard AI, providing machine learning-powered tomato disease detection capabilities.

## Features

- CNN-based disease detection model
- RESTful API endpoints for image processing
- Jupyter notebook documentation of the model training process

## Tech Stack

- Python
- Flask
- TensorFlow/Keras
- Jupyter Notebook

## Project Structure

```
backend/
├── app.py              # Main Flask application
├── constants/          # Configuration constants
├── model/              # ML model files
├── notebook/          # Training documentation
└── requirements.txt    # Python dependencies
```

## Setup

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:
   ```bash
   fastapi dev app.py
   ```
4. Create .env file:
   ```bash
   ALLOWED_URL="*"
   ```

The server will start at `http://localhost:8000`.

## API Endpoints

### POST /predict
Uploads an image and returns disease prediction results.

**Request Body:**
- Form data with image file

**Response:**
```json
{
    "prediction": "Disease Name",
    "image": "image_link"
}
```

## Model Information

The disease detection model is built using Convolutional Neural Networks (CNN) and trained on a comprehensive dataset of tomato plant diseases. For detailed information about the model architecture and training process, refer to the Jupyter notebook in the `notebook/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request