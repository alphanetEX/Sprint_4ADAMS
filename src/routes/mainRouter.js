const express = require('express'); 
const router = express.Router();
const mainController = require('../controllers/mainController');


router.get('/', mainController.index);
router.get('/loggin', mainController.loggin);
router.get('/registro', mainController.register);
router.get('/carrito', mainController.shopcar);
module.exports = router;