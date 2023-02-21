const nodemailer = require('nodemailer');
const credentials = require('../config/email_credentials.config');

module.exports.sendEmail = ({ to, subject, text }) => new Promise((res, rej) =>
{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: credentials.MAIL_USERNAME,
            pass: credentials.MAIL_PASSWORD,
            clientId: credentials.OAUTH_CLIENTID,
            clientSecret: credentials.OAUTH_CLIENT_SECRET,
            refreshToken: credentials.OAUTH_REFRESH_TOKEN
        }
    })

    let emailOptions = {
        from: "ntchvergara@gmail.com",
        to,
        subject,
        text,
    }
    transporter.sendMail(emailOptions, function (err, data)
    {
        if (err)
        {
            rej(err)
        } else
        {
            res(true)
        }
    })
})