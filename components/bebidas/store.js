const data = require('./model');

async function addBebidas(bebidas) {
    const docRef = data.collection('bebidas');
    return await docRef.add(bebidas);
  }
  
  async function getAllBebidas() {
    const snapshot = await data.collection('bebidas').get();
    snapshot.forEach((doc) => {
      console.log(doc.id);

    });
    // snapshot.docs.map((product) => console.log(product.data().category.path));
    return snapshot.docs.map((bebida) => {
      return {
        id: bebida.id,
        bebida: bebida.data(),
        date: bebida.createTime.toDate(),
      }
    });
  }
  
  async function getOnlyBebidas(title) {
    const bebidasReference = data.collection('bebidas');
    const snapshot = await bebidasReference.where('title', '==', title).get();
  
    if (snapshot.empty) {
      console.error('No matching!!');
      return;
    }
  
    return snapshot.docs.map((bebida) => {
      return {
        id: bebida.id,
        bebida: bebida.data()
      }
    })
  }
  
  async function updateBebida(id, change) {
    const product = data.collection('bebidas').doc(id);
  
    const updateChange = await bebida.update(change);
  
    return updateChange;
  }
  
  async function deleteBebida(id) {
    const bebidaDeleted = await data.collection('bebidas').doc(id).delete();
  
    return bebidaDeleted;
  }
  
  module.exports = {
    add: addBebidas,
    list: getAllBebidas,
    only: getOnlyBebidas,
    update: updateBebida,
    delete: deleteBebida,
  }