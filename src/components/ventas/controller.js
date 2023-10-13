const store = require('./store');

function getVentas() {
  return new Promise((resolve, reject) => {
    resolve(store.get());
  });
};

function addVentas(venta) {
  return new Promise((resolve, reject) => {
    if (Object.entries(venta).length === 0) {
      console.log("[ProductsController]: orden doesn't have content, the product is empty");
      reject('There is no bebida');
    }

    store.add(venta);
    resolve(venta);
  });
};

function updateVentas(id, changeOrden) {
  return new Promise(async (resolve, reject) => {
    if (!id || !changeOrden) {
      console.log('[updateOrden] Error Data');
      reject('Data invalid in method put');
    };

    const result = await store.put(id, changeOrden);
    resolve(result);
  });
}


module.exports= {
  addVentas,
  getVentas,
  updateVentas,
}