const feedbackService = require('../services/feedbackService');

exports.createFeedback = async (req, res) => {
    try {
        const feedbackData = req.body;
        await feedbackService.createFeedback(feedbackData);
        res.status(201).json({ message: 'Feedback saved successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await feedbackService.getFeedbacks();
        console.log('Feedbacks:', feedbacks);
        res.render('index', { feedbacks });
    } catch (error) {
        console.error('Error in getFeedbacks controller:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateFeedbackCheckbox = async (req, res) => {
    try {
        const feedbackId = req.params.id;
        const { checkbox } = req.body;
        await feedbackService.updateFeedbackCheckbox(feedbackId, checkbox);
        res.status(200).json({ message: 'Checkbox updated successfully' });
    } catch (error) {
        console.error('Error in updateFeedbackCheckbox controller:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};