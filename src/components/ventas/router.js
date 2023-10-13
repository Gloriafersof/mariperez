const express = require('express');
const router = express.Router();
const controller= require('./controller.js')
// const controller= require ('./controller');
const response = require('../../response/index')

  

router.get('/', (req, res) => {
  controller.getVentas()
  .then((venta) => response.success(req, res, venta, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});



  router.post('/', (req, res) => {
    controller.addVentas(req.body)
      .then((venta) => response.success(req, res, venta, 201))
      .catch((error) => response.error(req, res, 'Internal Error', 500, error));
  });
  

  router.patch('/:id', (req,res)=>{
    const id = req.params.id;
    const change= req.body;
  console.log(change)
  controller.updateVentas(id, change)
  .then((changeOrden)=> response.success(req,res, changeOrden,201))
  .catch((error) => response.error(req,res, 'Internal error', 500, error));;

  })
  
  module.exports = router;