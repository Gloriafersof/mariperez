let mesaSeleccionada = null;
const mesitas = [
 
]




// Definir la función 'actualizarMesa()' para actualizar la visualización de una mesa en la página
function actualizarMesa(numeroMesa) {
    const mesa = mesitas[numeroMesa]; // Obtener el array de productos de la mesa correspondiente
    const mesaHtml = document.getElementById(`mesas-${numeroMesa}`); // Obtener el elemento HTML de la mesa correspondiente
    mesaHtml.innerHTML = ''; // Limpiar el contenido del elemento HTML de la mesa correspondiente
    mesaHtml.appendChild(document.createTextNode(`Mesa ${numeroMesa}:`)); // Agregar el número de mesa al elemento HTML de la mesa correspondiente
    const listaProductos = document.createElement('ul'); // Crear un elemento HTML 'ul' para contener la lista de productos de la mesa correspondiente
    for (const producto of mesa) { // Recorrer el array de productos de la mesa correspondiente
      const itemProducto = document.createElement('li'); // Crear un elemento HTML 'li' para cada producto
      itemProducto.appendChild(document.createTextNode(producto)); // Agregar el nombre del producto al elemento HTML 'li' correspondiente
      listaProductos.appendChild(itemProducto); // Agregar el elemento HTML 'li' al elemento HTML 'ul' correspondiente
    }
    mesaHtml.appendChild(listaProductos); // Agregar el elemento HTML 'ul' de la lista de productos al elemento HTML de la mesa correspondiente
  }










function seleccionarMesa(numeroMesa) {
    mesaSeleccionada = numeroMesa;
    console.log ('mesa seleccionada ' + mesaSeleccionada)
  }
  function agregarProducto() {
    if (mesaSeleccionada !== null) {
      const producto = mesitas.push(producto);
      actualizarMesa(mesaSeleccionada);
      console.log('producto select')
    } else {
      alert("Por favor seleccione una mesa antes de agregar un producto.");
    }
  }