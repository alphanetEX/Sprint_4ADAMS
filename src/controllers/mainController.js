const plantas = require('../database/plantas.js');
const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('plantas');

const mainController = {
    index: function( req, res){
        const in_sale = productModel.inSale('in-sale');
        res.render('users/home', {
            plantas: in_sale,
        })
    },
};


module.exports = mainController;