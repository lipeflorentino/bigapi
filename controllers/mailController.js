require('dotenv').config();

//metodo do controller para listar todas as noticias
exports.enviarEmail = function(req, res) {
    console.log('chamou enviaEmail');
    console.log('user: ');
    const nodemailer = require('nodemailer');
    const $usuario = process.env.MY_USER;
    const $senha = process.env.PASSWORD; 
    const $text = req.body.mensagem;
    const $subject = req.body.assunto;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {
            user: $usuario,
            pass: $senha
        }
    });
    const $destinatario = 'lipeflorentino2@gmail.com';
    const mailOptions = {
        from: 'Contato@bigsolucoes.com.br',
        to: $destinatario,
        subject: $subject,
        text: $text
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            console.log('Email enviado: ' + info.response);
            res.send(info);
        }
    });
};