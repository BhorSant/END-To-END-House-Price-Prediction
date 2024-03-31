from flask import Flask, render_template, request
import joblib
import numpy as np

# Initialize Flask application
app = Flask(__name__)

# Load the trained model
model = joblib.load('my_model.pkl')

# Route to serve the home page
@app.route('/')
def home():
    return render_template('index.html')

# Route to handle prediction request
@app.route('/predict', methods=['POST'])
def predict():
    # Get features from form data
    features = [float(request.form[feature]) for feature in feature_names]
    # Make prediction
    prediction = model.predict([features])[0]
    # Return prediction result
    return render_template('index.html', prediction_text='Predicted house price: $%.2f' % prediction)

if __name__ == '__main__':
    # Feature names
    feature_names = ['longitude', 'latitude', 'housing_median_age', 'total_rooms', 'total_bedrooms',
                     'population', 'households', 'median_income', 'rooms_per_household', 
                     'bedrooms_per_room', 'population_per_household']
    app.run(debug=True)
