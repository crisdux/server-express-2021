const { Router } = require('express');
const router = Router();
const {bienvenida}  = require('../controllers/indexController.js')


module.exports = function(){
    
    router.get('/', bienvenida)
    return router;
}

