const express = require('express')
const app = express()



const morgan = require('morgan')
const routes = require('../src/api/routes')


// PARA USAR FORMUALRIOS CON JSON
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//RUTAS
app.use('/', routes());

//SALIDA DE LAS PETICIONES A LA API POR CONSOLA
app.use(morgan('dev'));



module.exports = app;