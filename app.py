from flask import Flask, request, jsonify, render_template
import tensorflow as tf
from tensorflow.keras.preprocessing.image import img_to_array, load_img
from PIL import Image
import numpy as np

app = Flask(__name__)

# Load the trained model
model = tf.keras.models.load_model('model/cat_dog_classifier.h5')

def preprocess_image(image, target_size):
    if image.mode != "RGB":
        image = image.convert("RGB")
    image = image.resize(target_size)
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)
    return image / 255.0

@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        file = request.files['file']
        if file:
            image = Image.open(file.stream)
            processed_image = preprocess_image(image, target_size=(64, 64))
            prediction = model.predict(processed_image).tolist()
            label = "Dog" if prediction[0][0] > 0.5 else "Cat"
            return render_template('result.html', label=label)
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
