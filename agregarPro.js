// al dar click en agregar se me agreguen los productos a alguna comanda en este caso al ul

// const productList = document.getElementById('productList');
// const btnAgg = document.getElementById('btnAgg');

// const printProductList = async () => {
//   const dataList = await fetch('http://localhost:3500/products', {
//     method: 'GET',
//   });
//   const dataResult = await dataList.json();
//   console.log(dataResult);
//   return dataResult;
// }



// btnAgg.addEventListener('click', () => {

//   printProductList()
//     .then((products) => {
//       const listProducts = products.message.map(products => {

//         const printProduct = `
//         <div class="lista">
//           <div class="ul">
//             <img src='${products.product.imagen}' referrerpolicy="no-referrer" />
//           </div>
//           <div class='ul'>
//             Nombre: ${products.product.nombre}
//           </div>
//           <div class="ulDes">
//             Descripcion: ${products.product.descripcion}
//           </div>
//             <div class='card-footer'>
//               <div class="card-price"><span>$</span> ${products.product.precio}</div>
//             </div>
//           </div>
//           ${buttons()}
//         `;
//         return printProduct;
//       });
//       productList.innerHTML = listProducts.join("");
//      console.log('Producto agregado')
//     })
//     .catch((error) => console.error(error));

// })

