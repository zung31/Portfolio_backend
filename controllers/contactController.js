const emailService = require('../services/emailService')
const htmlService = require('../services/htmlService')

exports.contact = (req, res) => {
    const htmlToSend = `<p>Informations:</p>${htmlService.createHtmlContent(req.body)}`;
    subjectToSent = "Message de page Portfolio";
    console.log("Starting to send email");
    emailService.sendEmail(htmlToSend,subjectToSent).then(() => {
        res.status(200).json({ message: 'Email sent successfully' });
        console.log("Email sent");
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    })
}