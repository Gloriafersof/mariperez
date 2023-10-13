export const printProductList = async () => {
    const dataList = await fetch('http://localhost:5200/products', {
      method: 'GET',
    });
    const dataResult = await dataList.json();
    return dataResult;
};

export const obtenerOrdenes= async () => {
    const ordenList = await fetch('http://localhost:5200/orden', {
      method: 'GET',
    });
    const ordenResult = await ordenList.json();
    
    return ordenResult;
}


export const obtenerVentas= async () => {
  const ventasList = await fetch('http://localhost:5200/ventas', {
    method: 'GET',
  });
  const ventasResult = await ventasList.json();
  return ventasResult;
}

export const actualizarOrden = async(id, nuevoPedido) => {
    const dataOrList = await fetch(`http://localhost:5200/orden/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoPedido)
      
      
    });
    
    const dataResult = await dataOrList.json();
    return dataResult;
}

export const enviarProductosABaseDeDatos = async (data) => {
  const productos = [];
  try {
    const respuesta = await fetch('http://localhost:5200/orden', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    
    });
    
    if (respuesta.ok) {
      const respuestaJson = await respuesta.json();
      
      // Limpiar el arreglo de productos
      productos.splice(0, productos.length);
      return respuestaJson;
    } else {
      throw new Error("Error al enviar los productos a la base de datos");
    }
  }
  catch (err) {
    throw new Error('Test')
  }
}



export const enviarVentasABaseDeDatos = async (dat) => {
  const productos = [];
  try {
    const respuesta = await fetch('http://localhost:5200/ventas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dat)
    
    });
    
    if (respuesta.ok) {
      const respuestaJson = await respuesta.json();
      
      // Limpiar el arreglo de productos
      productos.splice(0, productos.length);
      return respuestaJson;
    } else {
      throw new Error("Error al enviar los productos a la base de datos");
    }
  }
  catch (err) {
    throw new Error('Test')
  }
}

export const deleteProductosDeLaOrden = async (id) => {
  try {
    const deleteProduct = await fetch(`http://localhost:5200/orden/${id}`, {
      method: 'DELETE',
    });

    const deleteSuccess = await deleteProduct.json();
    return deleteSuccess;
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
  }
};