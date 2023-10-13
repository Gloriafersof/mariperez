const express = require('express')
const router = express.Router();
const products = require('../components/productos/router')

const bebidas = require('../components/bebidas/router');
const orden = require('../components/orden/router');
const venta = require('../components/ventas/router');
const users = require('../components/users/router')
const login = require('../components/login-register/router')

function routerApp(app) {
    app.use('/:uid', router);
    app.use('/products', products);

    app.use('/bebidas', bebidas)
    app.use('/orden', orden)
    app.use('/ventas', venta)
    app.use('/users', users)
    app.use('/login', login)
}

module.exports = routerApp;