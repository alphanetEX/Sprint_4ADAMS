const plantas = require('../database/plantas.js');


const mainController = {
    index: function( req, res){
        res.render('home', {
            plantas: plantas,
        })
    },
};


module.exports = mainController;