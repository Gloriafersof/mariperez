// const btnAddBebida= document.getElementById('bebidasboton');
// const bebidaList = document.getElementById('bebidasList');
// const comandaList = document.getElementById('comandaList');
// const tableButtons = document.getElementsByClassName('tableButton');
// const tableContents = {
//   mesa1: {
//     content: [],
//     orderList: document.getElementById('orderListMesa1')
//   },
//   mesa2: {
//     content: [],
//     orderList: document.getElementById('orderListMesa2')
//   },
//   mesa3: {
//     content: [],
//     orderList: document.getElementById('orderListMesa3')
//   }
// };
// let areBebidasVisible = false;
// let comanda = [];
// let selectedTable = null;

// const printBebidaList = async () => {
//   const dataList = await fetch('http://localhost:3600/bebidas', {
//     method: 'GET',
//   });
//   const dataResult = await dataList.json();
//   console.log(dataResult);
//   return dataResult;
// };

// const agregarBebida = (nombre, precio) => {
//   const bebida = {
//     nombre: nombre,
//     precio: precio
//   };
//   comanda.push(bebida);
//   mostrarComanda();
//   mostrarTablaSeleccionada();
// };

// const mostrarComanda = () => {
//   comandaList.innerHTML = "";
//   comanda.forEach((bebida) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${bebida.nombre} - $${bebida.precio}`;
//     comandaList.appendChild(listItem);
//   });
// };

// const mostrarTablaSeleccionada = () => {
//   if (selectedTable) {
//     const tableContent = tableContents[selectedTable.dataset.table];
//     if (tableContent) {
//       const orderList = tableContent.orderList;
//       orderList.innerHTML = "";
//       tableContent.content.forEach((bebida) => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${bebida.nombre} - $${bebida.precio}`;
//         orderList.appendChild(listItem);
//       });
//     } else {
//       console.error("The selected table's content does not exist in tableContents");
//     }
//   }
// };


// const agregaBebida = (nombre, precio) => {
//   const bebida = {
//     nombre: nombre,
//     precio: precio
//   };
//   // Check if a table is selected
//   if (selectedTable) {
//     // Get the ID of the selected table
//     const tableId = selectedTable.dataset.table;
//     // Add the product to the tableContents object
//     if (tableContents.hasOwnProperty(tableId)) {
//       tableContents[tableId].content.push(bebida);
//     } else {
//       console.error("The selected table does not exist in tableContents");
//     }
//   } else {
//     console.error("No table is selected");
//   }
//   mostrarComanda();
//   mostrarTablaSeleccionada();
// };


// const enviarOrden = () => {
//   if (selectedTable) {
//     const tableContent = tableContents[selectedTable.dataset.table];
//     if (tableContent) {
//       tableContent.content.push(...comanda);
//       comanda = [];
//       mostrarComanda();
//       mostrarTablaSeleccionada();
//     } else {
//       console.error("La mesa seleccionada no existe en tableContents");
//     }
//   } else {
//     const errorMensaje = document.getElementById('errorMensaje');
//     if (errorMensaje) {
//       errorMensaje.textContent = "¡Por favor, seleccione una mesa antes de enviar la orden!";
//     }
//   }
// };

// btnAddBebida.addEventListener('click', () => {
//   if (areBebidasVisible) {
//     bebidaList.style.display = 'none';
//     areBebidasVisible = false;
//   } else {
//     printBebidaList()
//       .then((bebidas) => {
//         const listBebida = bebidas.message.map((bebida) => {
//           console.log(bebida);
//           const printBebida = `
//             <div class="card">
//               <div class="card-img">
//                 <img src='${bebida.bebida.imagen}' referrerpolicy="no-referrer" />
//               </div>
//               <div class="card-title">
//               Nombre: ${bebida.bebida.nombre}
//             </div>
//             <div class="card-subtitle">
//               Descripcion: ${bebida.bebida.descripcion}
//             </div>
//             <div class='card-footer'>
//               <div class="card-price"><span>$</span> ${bebida.bebida.precio}</div>
//             </div>
           
//               <!-- rest of the product card code -->
//               <button class="btnAddProduct" data-nombre="${bebida.bebida.nombre}" data-precio="${bebida.bebida.precio}">Agregar</button>
//             </div>
//           `;
//           return printBebida;
//         });
//       bebidaList.innerHTML = listBebida.join("");
//       bebidaList.style.display = 'grid';
//         areBebidasVisible = true;

//         const btnsAddProduct = document.getElementsByClassName('btnAddProduct');
//         for (let i = 0; i < btnsAddProduct.length; i++) {
//           btnsAddProduct[i].addEventListener('click', (event) => {
//             const target = event.target;
//             const nombre = target.getAttribute('data-nombre');
//             const precio = target.getAttribute('data-precio');
//             agregarBebida(nombre, precio);
//           });
//         }
//       })
//       .catch((error) => console.error(error));
//   }
// });

// for (let i = 0; i < tableButtons.length; i++) {
//   tableButtons[i].addEventListener('click', (event) => {
//     const target = event.target;
//     if (selectedTable) {
//       selectedTable.classList.remove('active');
//     }
//     target.classList.add('active');
//     selectedTable = target;

//     mostrarTablaSeleccionada();
//   });
// }
// document.getElementById('ordenarButton').addEventListener('click', enviarOrden);
