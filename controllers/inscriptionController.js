const emailService = require('../services/emailService')
const htmlService = require('../services/htmlService')

exports.inscription = (req, res) => {
    // req.body nếu dùng body và req.query hoặc req.params nếu dùng query hoặc params
    const htmlToSend = `<p>Informations:</p>${htmlService.createHtmlContent(req.body)}`;
    subjectToSent = "Inscription Cours LSF"
    emailService.sendEmail(htmlToSend,subjectToSent).then(() => {
        res.status(200);
    }).catch((error) => {
        res.status(500).send('Error: ' + error.message);
    })
}