const emailService = require('../services/emailService')
const htmlService = require('../services/htmlService')

exports.inscriptionVIS = (req, res) => {
    // req.body nếu dùng body và req.query hoặc req.params nếu dùng query hoặc params
    subjectToSent = "Inscription VIS";
    htmlToSend= `<p>Informations:</p>${htmlService.createHtmlContent(req.body)}`;
    emailService.sendEmail(htmlToSend, subjectToSent).then(() => {
        res.status(200).send('Email sent');
    }).catch((error) => {
        res.status(500).send('Error: ' + error.message);
    })
};