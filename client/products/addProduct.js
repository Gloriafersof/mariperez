// const titleProduct = document.getElementById('title');
// const descriptionProduct = document.getElementById('description');
// const priceProduct = document.getElementById('price');
// const imageProduct = document.getElementById('image');
// const btnAdd = document.getElementById('btnAdd');

// const saveANewProduct = async (product) => {
//   const productData = await fetch('http://localhost:3100/products', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(product)
//   });
//   const newProduct = await productData.json();
//   console.log(newProduct);
//   return newProduct;
// }

// btnAdd.addEventListener('click', () => {
//   const productValues = {
//     title: titleProduct.value,
//     description: descriptionProduct.value,
//     price: priceProduct.value,
//     image: imageProduct.value,
//   }
//   saveANewProduct(productValues)
//     .then((response) => {
//       console.log(response);
//       window.location.href = "./index.html";
//     })
//     .catch((error) => console.log(error))
// })