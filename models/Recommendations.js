const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
    soilData: String,
    cropType: String,
    weatherData: String,
    recommendation: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Recommendation', recommendationSchema);
