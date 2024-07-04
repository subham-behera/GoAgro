# GoAgro: Crop Recommendation System

GoAgro is a crop recommendation system that predicts the optimal crops to grow based on various environmental variables such as Nitrogen (N), Phosphorus (P), Potassium (K), temperature, humidity, pH, and rainfall. This project leverages machine learning algorithms to provide farmers and agricultural experts with actionable insights for improving crop yields.

## Files in the Repository

- **Frontend**: Contains the web interface for user interaction.
    - **photos-and-videos**: Directory for media assets.
    - **index.html**: Main landing page.
    - **predict.html**: Page for making predictions.
    - **script.js**: JavaScript file for client-side logic.
    - **style.css**: Main stylesheet.
    - **style1.css**: Additional stylesheet.
- **ML algo**: Contains machine learning models and data processing scripts.
    - **Data**: Directory for datasets.
    - **Optimum crops.ipynb**: Jupyter notebook for model training and analysis.
    - **crops.py**: Python script for model inference.
- **ppt**: Contains presentation files related to the project.
- **README.md**: Project documentation.

## Installation

To set up the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/subham-behera/GoAgro.git
    cd GoAgro
    ```

2. **Create and activate a virtual environment** (optional but recommended):
    ```bash
    python3 -m venv venv
    source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
    ```

3. **Install the required packages**:
    ```bash
    pip install -r requirements.txt
    ```

## Running the App

To run the application, follow these steps:

1. **Run the backend server**:
    ```bash
    python ML\ algo/crops.py
    ```

2. **Open the frontend**:
    Open `Frontend/index.html` in your web browser.

## Features

- **Input Variables**: Users can input values for N, P, K, temperature, humidity, pH, and rainfall.
- **Prediction**: The system will predict the optimal crop to grow based on the input values.
- **User Interface**: Intuitive web interface for easy interaction.

## Usage

Once the app is running, you can input values for N, P, K, temperature, humidity, pH, and rainfall on the prediction page (`predict.html`) and get the recommended crop to grow.
