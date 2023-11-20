# Import necessary libraries
from flask import Flask, jsonify, render_template, request
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

app = Flask(__name__)

# Load the model and prepare it for predictions
PATH = './Data/Crop_recommendation.csv'
df = pd.read_csv(PATH)

features = df[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
target = df['label']
feature_columns = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
features.columns = feature_columns

Xtrain, Xtest, Ytrain, Ytest = train_test_split(features, target, test_size=0.2, random_state=2)

RF = RandomForestClassifier(n_estimators=20, random_state=0)
RF.fit(Xtrain, Ytrain)

# Define the API endpoint
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api', methods=['POST'])
def get_prediction():
    data = request.get_json()

    # Extract data from the JSON request
    input_data = data['input_data']
    data_df = pd.DataFrame([input_data], columns=feature_columns)

    # Make prediction
    prediction = RF.predict(data_df)

    # Return the prediction as JSON
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
