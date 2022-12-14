const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('plantas');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


	
const controller = {
	
	listAll: (req, res) => {
		const products = productModel.all()
		res.render('products/listado', {
			plantas: products
		})
	}, 
	
	detail: (req, res) => {
		const product = productModel.find(req.params.id)
		res.render('products/detalle', {
            product,
			toThousand
		})
	},


	// // Create - Form to create
	create: (req, res) => {
	res.render('products/product-create-form')
	},


	// // Create -  Method to store
	
	store: (req, res) => {
		// Atrapo todos los campos del formulario
		const newProduct = {
			...req.body,
			image: 'default-image.png'
		}
		productModel.create(newProduct)
		console.log('cree un nuevo producto')
		res.redirect('/')
	},


	// // Update - Form to edit


	edit: (req, res) => {
	console.log('ESTOY USANDO EL EDIT DEL GENERICO')
	let productToEdit = productModel.find(req.params.id)
	res.render('products/product-edit-form', { productToEdit })
	},

	// // Update - Method to update



	// update: (req, res) => {
	// 	let productToEdit = productModel.find(req.params.id)

	// 	productToEdit = {

	// 		id: productToEdit.id,
	// 		...req.body,
	// 		image: productToEdit.image,

	// 	}

	// 	productModel.update(productToEdit)
	// 	res.redirect("/");

	// },


    destroy: function(req,res){
         productModel.delete(req.params.id);
         res.redirect("/");
     }



};



module.exports = controller;