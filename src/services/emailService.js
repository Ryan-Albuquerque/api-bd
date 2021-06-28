const nodemailer = require('nodemailer');
const { TRANSPORTER_PASSWORD, TRANSPORTER_EMAIL } = require('../config');

let emailService = {};

const _sendEmail = (user)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: TRANSPORTER_EMAIL,
            pass: TRANSPORTER_PASSWORD
        }
    });

    const mailOptions = {
        from: TRANSPORTER_EMAIL,
        to: user.email,
        subject: 'Bem-vindo a Bemol Digital',
        html: `<p>Olá, ${user.name} <br>Seja bem-vindo a Bemol Digital!<br> Quaisquer dúvidas, entre em contato conosco :)</p>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error); 
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};


emailService.sendEmail = _sendEmail;

module.exports = emailService;