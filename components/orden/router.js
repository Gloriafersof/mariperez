const express = require('express');
const router = express.Router();
const controller= require('./controller.js')
// const controller= require ('./controller');
const response = require('../../response/index')

  

router.get('/', (req, res) => {
  controller.getOrden()
  .then((orden) => response.success(req, res, orden, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});



  router.post('/', (req, res) => {
    controller.addOrden(req.body)
      .then((orden) => response.success(req, res, orden, 201))
      .catch((error) => response.error(req, res, 'Internal Error', 500, error));
  });
  

  router.patch('/:id', (req,res)=>{
    const id = req.params.id;
    const change= req.body;
  console.log(change)
  controller.updateOrden(id, change)
  .then((changeOrden)=> response.success(req,res, changeOrden,201))
  .catch((error) => response.error(req,res, 'Internal error', 500, error));;

  })


    router.delete('/:id', (req, res)=>{
      const id= req.params.id;
      controller.deleteProductosDeLaOrden(id)
      .then((deleted)=> response.success(req,res, deleted, 200))
      .catch((error)=> response.error(req, res, 'Internal error', 500, error))
    })

  
  module.exports = router;