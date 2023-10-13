// import {obtenerOrdenes} from '../products/productFetchAPI.js'
// const ordenList = document.querySelector('#ordenList');
// const ordenesHTML = document.querySelector('#ordenes');

// const saveANewOrden = async (orden) => {
//   const ordenData = await fetch('http://localhost:3200/orden', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(orden)
//   });
//   const newOrden = await ordenData.json();
//   console.log(newOrden);
//   return newOrden;
// }

// document.addEventListener('DOMContentLoaded', () => {

//   obtenerOrdenes().then(ordenLista => {
//     const listOrden = ordenLista.message.sort((a, b) => b.ordenes.mesa - a.ordenes.mesa).map((orden) => {
//       const todasLasOrdenes = orden.ordenes;
//       ordenesHTML.appendChild(todasLasOrdenes)
//       const arrOrden = orden.ordenes.productos;

//       console.log(todasLasOrdenes);
    
//       const productInOrder = () => {
//         const productCards = arrOrden.map((element, index) => {
  
//           const card = `
//             <div>
//             ${element.nombre} ------------ ${element.precio}$
//             <i class="fas fa-trash deleted" id="${index}"></i>
//             </div>
//           `;
  
//           return card;
//         }).join("");
        
//         return productCards;
//       };

//       ordenList.innerHTML = `<div>
//       ${productInOrder() }
//       </div>`
//     })
//     console.log(listOrden);
//   })
// })