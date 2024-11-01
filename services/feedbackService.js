const Feedback = require('../models/feedbackModel');

exports.createFeedback = async (feedbackData) => {
    try {
        console.log('Saving feedback to MongoDB...');
        const { botMessage, userMessage, language, feedback } = feedbackData;

        const newFeedback = new Feedback({
            botMessage,
            userMessage,
            language,
            feedback,
        });

        console.log('New feedback object:', newFeedback);

        const savedFeedback = await newFeedback.save();
        console.log('Feedback saved:', savedFeedback);
        return savedFeedback;
    } catch (error) {
        console.error('Error saving feedback:', error.message);
        throw error;
    }
};

exports.getFeedbacks = async () => {
    try {
        const feedbacks = await Feedback.find();
        console.log('Feedbacks:', feedbacks);
        return feedbacks;
    } catch (error) {
        console.error('Error getting feedbacks:', error.message);
        throw error;
    }
};

exports.updateFeedbackCheckbox = async (feedbackId, checkbox) => {
    try {
        const updatedFeedback = await Feedback.findByIdAndUpdate(feedbackId, { checkbox }, { new: true });
        console.log('Feedback updated:', updatedFeedback);
        return updatedFeedback;
    } catch (error) {
        console.error('Error updating feedback checkbox:', error.message);
        throw error;
    }
};