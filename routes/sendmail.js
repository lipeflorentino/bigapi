const express = require("express");
const router = express.Router();
console.log('cheguei na rota!');
const MailController = require('../controllers/mailController');
router.get("/", MailController.enviarEmail); 
module.exports = router;