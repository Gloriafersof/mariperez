import { 
    printProductList,
    obtenerOrdenes,
    obtenerVentas,
    actualizarOrden,
    enviarProductosABaseDeDatos,
    enviarVentasABaseDeDatos,
    deleteProductosDeLaOrden,
  } from './productFetchAPI.js';
  const btnAddProduct = document.getElementById('combosboton');
  const productList = document.getElementById('productList');
  const comandaList = document.getElementById('comandaList');
  const tableButtons = document.getElementsByClassName('tableButton');
  const ordenList = document.getElementById('ordenList');
  const categoria = document.getElementById('boton');
  const enviarButton = document.getElementById('enviarButton');
  const selectMesa = document.getElementById('selectMesas'); // ID sdel select de las mesas
  const ultimoValorSeleccionado = selectMesa.selectedOptions[selectMesa.selectedOptions.length - 1].value;
  const cuerpoTablaVentas = document.getElementById('ventasList');
  
  console.log(cuerpoTablaVentas);
  let productos = []; // Array para almacenar los productos agregados
  
  let products=[]
  let total = 0;
  
  let mesaCurrentValue = selectMesa.value;
  
  console.log(selectMesa.value);
  
  printProductList()
  .then((data) => products = data)
  .catch((error) => console.log(error));
  obtenerOrdenes().then(ordenLista => {
  
    
    // Mostrar en HTML
    const listOrden = ordenLista.message.sort((a, b) => a.ordenes.mesa -  b.ordenes.mesa).map((orden) => {
      const arrOrden = orden.ordenes.productos;
    
      const productInOrder = () => {
        const productCards = arrOrden.map((element, index) => {
  
          const card = `
          <div>        
            ${element.nombre} ------------ ${element.precio}$
          
          </div>
          `;
  
          return card;
        }).join("");
     
  
  
        
        return productCards;
      };
    
    // Controlador de eventos para el botón de eliminación
   
    console.log(orden);
    
    
    if (Array.isArray(arrOrden)) {
      total = arrOrden.reduce((accumulator, element) => {
        return accumulator + parseFloat(element.precio);
      }, 0).toFixed(2);
    
      const productCards = productInOrder();
    
      const ordenCard = `
        <div class="carro" id=${orden.id}>
          <div class="carro-img">
            <p>Mesa ${orden.ordenes.mesa}</p>
          </div>
          <div>
            ${productCards}
          </div>
          <!-- Resto del código de la tarjeta de producto -->
          <div class="total-section">
            <p>Total: ${total}$</p>
          </div>
         
        </div>
      `;
      console.log('arrOrden:', arrOrden);
      
      document.body.addEventListener('click', evt => {
      if (!evt.target.matches('.delete-mesa')) return; // Si el clic no fue en el botón de eliminar, no hacemos nada
      const mesa = evt.target.closest('.carro'); // Encuentra la mesa más cercana
      if (mesa) {
        deleteProductosDeLaOrden(mesa.id); // Llama a la función para eliminar la mesa
      }
    });
  
    
    // ELIMINAR ORDEN POR SI SE LLEGAN A
    // const carrito = document.querySelector('#ordenList');
      // carrito.addEventListener('click', (e) => {
        //   console.log(e.target)
        
        //   if (e.target.closest('.deleted')){
      //     console.log('eliminar')
      //   } else {
        //     console.log('no lo elimina')
      //   }
      // })
      return ordenCard;
    } else {
      // Handle the case when arrOrden is not an array
      console.log('arrOrden is not an array');
      return null; // Or any other appropriate action
    }
    console.log('arrOrden:', arrOrden);
    return ordenCard;
  });
  
  ordenList.innerHTML = listOrden.join("");
  ordenList.style.display = 'grid';
  // Agregar evento de clic a los botones "Cobrar Mesa"
  
      
    });
   
  
    
  // obtener Ventas
 
  //actualizarOrden()
  
  
  const filter= (categoria)=>{
    const filtrado= products.message.filter(p=> categoria ? p.product.categoria===categoria : p);
    console.log(filtrado);
    
    const listProducts = filtrado.map((product) => {
      
      const printProduct = `
      
          <div class="card">
            <div class="card-img">
              <img src='${product.product.imagen}' referrerpolicy="no-referrer" />
              </div>
              <div class="card-title">
              ${product.product.nombre}
              </div>
              <div class="card-subtitle">
              ${product.product.descripcion}
              </div>
              <div class='card-footer'>
              <div class="card-price"><span>$</span> ${product.product.precio}</div>
              </div>
              
              
              <!-- rest of the product card code -->
              <button class="btnAddProduct" data-nombre="${product.product.nombre}" data-precio="${product.product.precio}">Agregar</button>
              </div>
              `;
              return printProduct;
              
            });
  
            // Inyectar al HTML
  
  
            document.getElementById("agregarButton").addEventListener("click", function() {
              location.reload();
            });
  
            productList.innerHTML = listProducts.join("");
            productList.style.display = 'grid'; // show the product section
            const btnsAddProduct = document.getElementsByClassName('btnAddProduct');
            
          
            productos = [];
            selectMesa.selectedIndex = 0;
            selectMesa.addEventListener('change', () => {
     // Deshabilitar todas las opciones en el elemento selectMesa
     for (let i = 0; i < selectMesa.options.length; i++) {
      selectMesa.options[i].disabled = true;
      
  }
  
  
  
  // Habilitar solo la opción seleccionada
  selectMesa.options[selectMesa.selectedIndex].disabled = false;
              const ultimoValorSeleccionado = selectMesa.selectedOptions[selectMesa.selectedOptions.length - 1].value;
              const mesa = selectMesa.value; // Obtener el valor seleccionado de la mesa
              productos = [];
              
              obtenerOrdenes()
                .then((ordenes) => {
                  console.log(ordenes); // Registrar los pedidos obtenidos
            
                  let arregloDeOrdenes = [];
                  let arregloDeOrdenesConIDMesaYNumeroDeMesa = [];
                  const listaDeOrdenes = ordenes.message;
            
                  listaDeOrdenes.map((ordenesConProductosMesasYEstatus) => {
                    const mesaOcupada = ordenesConProductosMesasYEstatus.ordenes.mesa;
                    const detallesMesa = {
                      idMesa: ordenesConProductosMesasYEstatus.id,
                      productosDeLaMesa: ordenesConProductosMesasYEstatus.ordenes.productos,
                      numeroDeMesa: ordenesConProductosMesasYEstatus.ordenes.mesa
                    };
                    arregloDeOrdenes.push(mesaOcupada);
                    arregloDeOrdenesConIDMesaYNumeroDeMesa.push(detallesMesa);
                  });
            
                  let arregloSinMesasRepetidas = [...new Set(arregloDeOrdenes)];
            
                  // Verificar si el valor seleccionado coincide con una mesa ocupada en la base de datos
                  if (arregloSinMesasRepetidas.includes(mesa)) {
                    console.log('El valor seleccionado coincide con una mesa ocupada en la base de datos');
                    const mesaEncontrada = arregloDeOrdenesConIDMesaYNumeroDeMesa.find((mesaFound) => mesaFound.numeroDeMesa === mesa)
  
                    console.log(mesaEncontrada);
                    // console.log(mesaEncontrada.productosDeLaMesa);
  
                    console.log(productos.length);
                    console.log(mesaEncontrada.productosDeLaMesa.length);
                    
                    // if(mesaEncontrada.productosDeLaMesa.length !== productos.length){
                      //   console.log('El producto que tienes no es el mismo que esta en la base de datos')
                    // } else {
                      //   console.log('no funciona la mesa encontrada con productos longitud');
                      // }
                      productos.splice(0, productos.length); // Eliminar todos los elementos del array productos
                      
                      productos.push(...mesaEncontrada.productosDeLaMesa);
                      
                      console.log(productos);
                      enviarButton.addEventListener('click', () => {
                        const nuevosDatos = {
                          productos: productos
                        };
                        console.log(ultimoValorSeleccionado);
                        window.location.reload()
                    
                      // Actualizar la orden existente en la base de datos
                      actualizarOrden(mesaEncontrada.idMesa, nuevosDatos)
                        .then((ordenActualizada) => {
                          console.log(ordenActualizada);
                          // Limpiar el arreglo de productos después de enviar la orden
                          productos = [];
                          selectMesa.selectedIndex = 0;
  
                          
                    
                          // Realizar cualquier otra acción necesaria después de enviar la orden
                          // ...
                        })
                        .catch((error) => console.log('[actualizarOrden]: problema con el actualizar la orden' + error));
                    });
                    
                    
                    
                  } else {
                    console.log('El valor seleccionado no coincide con ninguna mesa ocupada en la base de datos');
                    enviarButton.addEventListener('click', () => {
                      const datos = {
                        mesa: mesa,
                        productos: productos,
                        estatus: 'ocupado',
                      };
                      
                      enviarProductosABaseDeDatos(datos)
                        .then((ordenCreada) => {
                          console.log(
                            `Orden agregada a la base de datos:
                            ${ordenCreada.message}
                            `)
                            window.location.reload()
                        })
                        .catch((error) => console.error('[enviarProductosABaseDeDatos]: Error al crear orden'));
                      })
                    }
                    
                })
                .catch((error) => console.log(error));
            });
  
            
            
            // Agregar evento click a cada botón
            for (let i = 0; i < btnsAddProduct.length; i++) {
              btnsAddProduct[i].addEventListener('click', (event) => {
                const target = event.target;
                const nombre = target.getAttribute('data-nombre');
                const precio = target.getAttribute('data-precio');
                // Crear un objeto con los datos del producto y la mesa seleccionada
                const producto = {
                  nombre: nombre,
                  precio: precio
          };
          
          // Agregar el producto al array de productos
          productos.push(producto);
          
          // Limpiar los campos o realizar cualquier otra acción necesaria
         // Crear el div principal
  // Crear el div principal
  const divPrincipal = document.createElement('div');
  divPrincipal.id = 'divPrincipal';
  document.body.appendChild(divPrincipal);
  
  // Crear el nuevo div
  const mesa = selectMesa.value;
  
  // Verificar si ya existe un div con la información de la mesa
  let divs = Array.from(document.querySelectorAll('div'));
  let divMesa = divs.find(el => el.textContent.includes(`Mesa: ${mesa}`));
  
  // Si no existe un div con la información de la mesa, crear uno nuevo
  if (!divMesa) {
      divMesa = document.createElement('div');
      divMesa.innerHTML = ` Mesa: ${mesa}`;
      divPrincipal.appendChild(divMesa);
  }
  
  // Crear un nuevo div para el producto
  let nuevoElemento = document.createElement('div');
  nuevoElemento.innerHTML = `Producto: ${producto.nombre}`;
  divPrincipal.appendChild(nuevoElemento);
  
  
  
  console.log(nuevoElemento);
  
  
          console.log(productos);
        });
      }
    }
  
  (async( ) =>{
  await printProductList ()
  filter()
  })();
  
  categoria.addEventListener('input', (e)=> {
    
  filter(e.target.value)
  })
  
  /* solicitando actualizar el registro existente en la base de datos para la mesa seleccionada en lugar de crear un nuevo registro cada vez que se agrega un producto?
  
  necesito poder modificar la mesa que ya fue enviada a la base de datos y poder agregarle un nuevo producto  */
  
  
  