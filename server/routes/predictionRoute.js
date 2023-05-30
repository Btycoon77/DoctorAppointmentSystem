const express = require('express');

const predictionRouter = express.Router();

router.post('/predict',HeartDiseasePredictionController);

module.exports = predictionRouter;