const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('plantas');

const mainController = {
    index: function( req, res){
        const in_sale = productModel.inSale('in-sale');
        res.render('users/home', {
            plantas: in_sale,
        })
    },
    loggin: function (req, res){
        res.render('users/loggin', {

        })
    },
    register: function (req, res){
        res.render('users/registro',{

        })
    },
    shopcar: function(req, res){
        res.render('products/carrito')
    }
};


module.exports = mainController;