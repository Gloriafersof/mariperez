const store = require('./store');

function getOrden() {
  return new Promise((resolve, reject) => {
    resolve(store.get());
  });
};

function addOrden(orden) {
  return new Promise((resolve, reject) => {
    if (Object.entries(orden).length === 0) {
      console.log("[ProductsController]: orden doesn't have content, the product is empty");
      reject('There is no bebida');
    }

    store.add(orden);
    resolve(orden);
  });
};

function updateOrden(id, changeOrden) {
  return new Promise(async (resolve, reject) => {
    if (!id || !changeOrden) {
      console.log('[updateOrden] Error Data');
      reject('Data invalid in method put');
    };

    const result = await store.put(id, changeOrden);
    resolve(result);
  });
}

function deleteProductosDeLaOrden(id){
  return new Promise(async(resolve,reject)=>{
    if(!id){
      console.log('[deleteProductosDeLaOrden]Error Data');
      reject ('Data invalid in method delete')
    }

    const result= await store.delete(id);
    resolve(result)
  })

}





module.exports= {
  addOrden,
  getOrden,
  updateOrden,
  deleteProductosDeLaOrden
}