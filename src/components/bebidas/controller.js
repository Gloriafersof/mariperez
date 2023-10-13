const store = require('./store');

function addBebidas(bebida) {
  return new Promise((resolve, reject) => {
    if (Object.entries(bebida).length === 0) {
      console.log("[ProductsController]: Product doesn't have content, the product is empty");
      reject('There is no bebida');
    }

    store.add(bebida);
    resolve(bebida);
  });
};

function getBebidas() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

function getOnlyBebidas(titleBebidas) {
  return new Promise((resolve, reject) => {
    if (!titleBebidas) {
      console.log("[BebidasController]: Product doesn't have title for search, the title product is empty");
      reject('There is no title bebidas');
    }

    resolve(store.only(titleBebidas));
  })
}

function updateBebidas(id, changeBebidas) {
  return new Promise(async (resolve, reject) => {
    if (!id || !changeBebidas) {
      console.log('[updateBebidas] Error Data');
      reject('Data invalid in method patch');
    };

    const result = await store.update(id, changeBebidas);
    resolve(result);
  });
}

function deleteBebidas(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      console.log('[deleteBebidas] Error Data');
      reject('Data invalid in method delete');
    };

    const result = await store.delete(id);
    resolve(result);
  });
}

module.exports = {
  addBebidas,
  getBebidas,
  getOnlyBebidas,
  updateBebidas,
  deleteBebidas,
}