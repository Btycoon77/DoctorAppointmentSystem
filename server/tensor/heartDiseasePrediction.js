const express = require('express');
const bodyParser = require('body-parser');
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// Load dataset
const heartData = require('./ECG-Dataset.json');
const X = heartData.map(data => data.slice(0, -1));
const y = heartData.map(data => data[data.length - 1]);

// Split data into training and testing sets
const [XTrain, XTest, yTrain, yTest] = splitData(X, y, 0.2);

// Preprocess data
const scaler = new StandardScaler(XTrain);
const XTrainScaled = scaler.transform(XTrain);
const XTestScaled = scaler.transform(XTest);

// Define and train the model using TensorFlow.js
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid', inputShape: [XTrainScaled.shape[1]] }));
model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });

async function trainModel() {
  await model.fit(XTrainScaled, tf.tensor(yTrain), { epochs: 10 });
}

trainModel().then(() => {
  // Save the trained model and scaler
  model.save('file://model');
  fs.writeFileSync('scaler.json', JSON.stringify(scaler));

  app.post('/predict', (req, res) => {
    const userInput = req.body;
    const userX = userInput.map(data => data.slice(0, -1));
    const userXScaled = scaler.transform(userX);

    const predictions = model.predict(userXScaled).arraySync();
    const roundedPredictions = predictions.map(p => Math.round(p));

    res.json({ prediction: roundedPredictions });
  });

  app.listen(8000, () => {
    console.log('Server is running on port 8000');
  });
});

function splitData(X, y, testSize) {
  const totalSamples = X.length;
  const testSamples = Math.round(totalSamples * testSize);
  const trainSamples = totalSamples - testSamples;

  const shuffledIndexes = [...Array(totalSamples).keys()].sort(() => Math.random() - 0.5);

  const XTrain = [];
  const yTrain = [];
  const XTest = [];
  const yTest = [];

  for (let i = 0; i < totalSamples; i++) {
    const sampleX = X[shuffledIndexes[i]];
    const sampleY = y[shuffledIndexes[i]];

    if (i < trainSamples) {
      XTrain.push(sampleX);
      yTrain.push(sampleY);
    } else {
      XTest.push(sampleX);
      yTest.push(sampleY);
    }
  }

  return [XTrain, XTest, yTrain, yTest];
}

class StandardScaler {
  constructor(X) {
    this.mean = X.reduce((acc, row) => acc.map((val, i) => val + row[i]), Array(X[0].length).fill(0));
    this.mean = this.mean.map(val => val / X.length);

    const squaredDiffSum = X.reduce((acc, row) => acc.map((val, i) => val + Math.pow(row[i] - this.mean[i], 2)), Array(X[0].length).fill(0));
    this.std = squaredDiffSum.map(val => Math.sqrt(val / X.length));
  }

  transform(X) {
    return X.map(row => row.map((val, i) => (val - this.mean[i]) / this.std[i]));
  }
}
