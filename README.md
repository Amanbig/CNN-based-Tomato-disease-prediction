# TomatoGuard AI: CNN-based Tomato Disease Detection

TomatoGuard AI is a comprehensive web application that uses Convolutional Neural Networks (CNN) to detect diseases in tomato plants. The system provides real-time analysis, detailed disease information, and research insights.

## 🌟 Features

- **Instant Disease Detection**: Upload images and get immediate analysis
- **Comprehensive Disease Catalog**: Detailed information about various tomato diseases
- **Research Documentation**: Access to the model's technical documentation
- **Modern UI/UX**: Responsive design with dark mode support
- **RESTful API**: Well-documented endpoints for disease detection

## 🏗️ Architecture

The project is split into two main components:

### Backend (Python/Fastapi)
- CNN model for disease detection
- RESTful API endpoints
- Image processing capabilities
- Model training documentation

### Frontend (Next.js)
- Modern, responsive user interface
- Real-time disease detection interface
- Interactive disease catalog
- Research notebook viewer

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amansvg/CNN-based-Tomato-disease-prediction.git
   cd CNN-based-Tomato-disease-prediction
   ```

2. Set up the backend:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   fastapi dev app.py
   ```

3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. Open your browser and navigate to:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000

## 📚 Documentation

- [Backend Documentation](./backend/README.md)
- [Frontend Documentation](./frontend/README.md)
- [API Documentation](./backend/notebook/cnn-based.ipynb)

## 🛠️ Tech Stack

### Backend
- Python
- Flask
- TensorFlow/Keras
- Jupyter Notebook

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn/ui

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- TensorFlow team for the amazing deep learning framework
- Next.js team for the incredible web framework
- The open-source community for various tools and libraries