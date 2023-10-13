const db = require('./model');

async function addOrden(orden) {
    const docRef = db.collection('orden');
    return await docRef.add(orden);
  }

  async function getOrden(){
    const ordenRef = await db.collection('orden').get()
    return ordenRef.docs.map((ordenes) => {
      return {
        id: ordenes.id,
        ordenes: ordenes.data(),
      }
    });
  }

  // async function getDisponibilidad(disponibilidad) {
  //   const productReference = db.collection('orden');
  //   const snapshot = await productReference.where('estatus', '==', disponibilidad).get();
  
  //   if (snapshot.empty) {
  //     console.error('No matching!!');
  //     return;
  //   }
  
  //   return snapshot.docs.map((orden) => {
  //     return {
  //       id: orden.id,
  //       productos: products.data()
  //     }
  //   })
  // }

  
  async function updateOrden(id, change) {
    const orden = db.collection('orden').doc(id);
  
    const updateChange = await orden.update(change);
  
    return updateChange;
  }



  async function deleteOrden(id){
    const productoDeLaOrdenDelete= await db.collection('orden').doc(id).delete();
    return productoDeLaOrdenDelete
  }
  
  
//   async function getAllBebidas() {
//     const snapshot = await data.collection('bebidas').get();
//     snapshot.forEach((doc) => {
//       console.log(doc.id);

//     });
//     // snapshot.docs.map((product) => console.log(product.data().category.path));
//     return snapshot.docs.map((bebida) => {
//       return {
//         id: bebida.id,
//         bebida: bebida.data(),
//         date: bebida.createTime.toDate(),
//       }
//     });
//   }

module.exports= {
  add:addOrden,
  get:getOrden,
  put:updateOrden,
  delete:deleteOrden,
  // get:getDisponibilidad,
};