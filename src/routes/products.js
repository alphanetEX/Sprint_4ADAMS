const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/*** LIST OF PRODUCTS ***/

/*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.create);

/*** GET ONE PRODUCT ***/ 
router.get('/detalle/:id', productsController.detail);
// array() para subir muchos archivos
// router.post('/', upload.array('image'), productsController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id',  productsController.edit); 
router.put('/edit/:id', upload.array('image'), productsController.update);


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 

module.exports = router;