const db = require('./model');

async function addVentas(venta) {
    const docRef = db.collection('ventas');
    return await docRef.add(venta);
  }

  async function getVentas(){
    const ventasRef = await db.collection('ventas').get()
    return ventasRef.docs.map((venta) => {
      return {
        id: venta.id,
        ventasEnDB: venta.data(),
      }
    });
  }

  async function updateVentas(id, change) {
    const venta = db.collection('ventas').doc(id);
  
    const updateChange = await venta.update(change);
  
    return updateChange;
  }

  
module.exports= {
    add:addVentas,
    get:getVentas,
    put:updateVentas,
    // get:getDisponibilidad,
  };