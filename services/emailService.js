const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../var_env.env') })

const email = process.env.GMAIL;
const password = process.env.PASS;
const destination = process.env.DESTINATION;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 465, 
    secure: true, 
    auth: {
        user: email, 
        pass: password 
    }
})

exports.sendEmail = async (htmlToSend, subjectToSent) => {
    const mailOptions = {
        from: email, 
        to: destination,  
        subject: subjectToSent, 
        html: htmlToSend 
    };

    try {
        let info = await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email: ' + error);
    }
};