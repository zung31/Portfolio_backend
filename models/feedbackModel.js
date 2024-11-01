const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    botMessage: {
        type: String,
        required: true,
    },
    userMessage: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
    checkbox: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('FeedbackModel', FeedbackSchema);