const express = require('express');
const router = express.Router();
const controller= require('./controller');
const response = require('../../response/index')


router.get('/', (req, res) => {
    if (req.body.title) {
      controller.getOnlyBebidas(req.body.title)
        .then((bebidasList) => response.success(req, res, bebidasList, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error));
    } else {
      controller.getBebidas()
        .then((bebidasList) => response.success(req, res, bebidasList, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error));
    }
  });
  
  router.post('/', (req, res) => {
    controller.addProduct(req.body)
      .then((bebida) => response.success(req, res, bebida, 201))
      .catch((error) => response.error(req, res, 'Internal Error', 500, error));
  });
  
  router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const change = req.body;
    controller.updateProduct(id, change)
      .then((changedBebida) => response.success(req, res, changedBebida, 200))
      .catch((error) => response.error(req, res, 'Internal Error', 500, error));
  });
  
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    controller.deleteBebidas(id)
      .then((deleted) => response.success(req, res, deleted, 200))
      .catch((error) => response.error(req, res, 'Internal error', 500, error));
  });
  
  module.exports = router;