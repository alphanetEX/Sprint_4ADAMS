const express = require('express'); 
const path =  require('path');
const app = express(); 
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const config  = require('./src/config/index'); 
//directions for views and styless
const viewsPath = path.join(__dirname, '/src/views/');
const publicPath = path.join(__dirname, 'public');

//Enrutamiento
const mainRouter = require('./src/routes/mainRouter');
const producsRouter = require ('./src/routes/products');


app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', viewsPath);

//rutas del main 
app.use('/', mainRouter);
//rutas de los productos 
app.use('/products', producsRouter); //changes


const server = app.listen ( config.port || 3002, ()=>{
    console.log(`server listen of port: ${ server.address().port }`);
});