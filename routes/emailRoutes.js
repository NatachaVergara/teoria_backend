const express = require('express');
const { sendEmail } = require('../utils/email');
const router = express.Router();


router.post('/', async (req, res) =>
{
    const { fullName, email, msg } = req.body;
    console.log(fullName, email, msg);
    try
    {
        const sended = await sendEmail({
            to: email,
            subject: `Consulta sitio web: Nombre Completo: ${fullName} - Email de contacto: ${email}`,
            text: `Mensaje: ${msg}`,
        })
        return res.status(200).send({ sended })
    } catch (error)
    {   
        console.log(error)
        return res.status(500).send({ sended: false })
    }
})

module.exports = router;