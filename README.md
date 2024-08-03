
# Animal Classifier Model 

A web-based application to classify images of animals, currently supporting cats and dogs, using a Convolutional Neural Network (CNN). This project utilizes TensorFlow and Flask to provide an interactive interface for image classification. Future updates will include training the model to recognize a broader range of animal species.

## Project Structure

```
AnimalClassifier/
│
├── app.py                 # Flask application for handling web requests and displaying results
├── model/
│   ├── train.py            # Script to train the CNN model
│   ├── cnn_model.h5       # Pre-trained CNN model
│
├── templates/
│   ├── index.html          # HTML page for uploading images
│   ├── result.html         # HTML page for displaying classification results
│
├── static/
│   ├── styles.css          # CSS file for styling the web pages
│   ├── script.js           # JavaScript file for responsiveness
│
├── uploads/                # Directory where uploaded images are stored
│
├── .gitignore              # Git ignore file to exclude unnecessary files from version control
├── requirements.txt        # List of required Python packages
└── README.md               # Project documentation
```

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Harsha-gella18/CatDogClassifier.git
   cd CatDogClassifier
   ```

2. **Create and Activate a Virtual Environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Required Packages:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Training Script (if you need to train the model):**
   ```bash
   python model/train.py
   ```

5. **Start the Flask Application:**
   ```bash
   python app.py
   ```

6. **Open Your Web Browser and Navigate to:**
   ```
   http://127.0.0.1:5000/
   ```

## Usage

1. **Upload an Image:**
   - Go to the web interface and upload an image of a cat or a dog.

2. **View Results:**
   - The application will display whether the uploaded image is a cat or a dog based on the CNN model's prediction.

## Future Plans

The current model is trained to classify images of cats and dogs. In future updates, we plan to train the model with more animal species to provide a wider range of classifications.

## Project Details

- **CNN Model:** The model is built using TensorFlow and Keras, with a convolutional neural network architecture.
- **Flask Application:** Provides a web interface for users to interact with the model.
- **CSS and JavaScript:** Used to enhance the user interface and ensure responsiveness.

## Dependencies

This project requires the following Python packages:

- Flask
- TensorFlow
- numpy
- pillow

## Contributors

- [Gella Harsha Vardhan](https://github.com/Harsha-gella18)

