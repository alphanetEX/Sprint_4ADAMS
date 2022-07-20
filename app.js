const express = require('express'); 
const path =  require('path');
const app = express(); 
const mainRouter = require('./src/routes/mainRouter');


const viewsPath = path.join(__dirname, '/src/views/users/');
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', viewsPath);
app.use('/', mainRouter);

app.listen (process.env.PORT || 3001, ()=>{
    console.log('Servidor funcionando bien');
});
