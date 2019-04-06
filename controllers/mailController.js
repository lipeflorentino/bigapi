require('dotenv').config();
const nodemailer = require('nodemailer');

//metodo do controller para listar todas as noticias
exports.enviarEmail = function(req, res) {
    console.log('chamou enviaEmail');
    console.log('request: ' + req);
    
    const $usuario = process.env.MY_USER;
    const $senha = process.env.PASSWORD; 
    const $text = req.body.mensagem;
    const $subject = req.body.assunto;
    
};