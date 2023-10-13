const mesas= document.getElementById("mesas");
const butonmesas = document.getElementById("mesasboton");
const ventas = document.getElementById('ventasList');
const ventasBotonHeader = document.getElementById('ventasboton');
const productos = document.getElementById('productList');
const product = document.getElementById('productBoton');



butonmesas.addEventListener("click", () => {
  mesas.classList.toggle("abrir-mesas");
    productos.style.display = 'none';
    
    ventas.style.display = 'none';
    ventas.classList.remove('desplegar')
    ventas.classList.add('ocultar')
    mesas.classList.remove("ocultar");
  });
  
console.log(mesas);
console.log(productos);


ventasBotonHeader.addEventListener('click', () =>{
    
    ventas.style.display = 'flex';
  
    mesas.classList.remove('abrir-mesas')
   
  

    productos.style.display = 'none';

  })

  

product.addEventListener("click", () => {

  console.log('funciona!!')
 
    productos.style.display = 'grid';
    
    ventas.style.display = 'none';
   
    ventas.classList.add('ocultar')
    mesas.classList.add("ocultar");
  });
  


  
    








// const button = document.getElementById("menu-hambur");
// const options= document.getElementById("productos-abiertos");


// button.addEventListener("click", () => {
   
//     options.classList.toggle("show");
//     itemsbebidas.classList.remove("abrir");
//     itemscomida.classList.remove("abrir");
//     ventas.classList.remove("abrir");
//     mesas.classList.remove("abrir");
   
// });

// hasta aca

// options.addEventListener("click", e =>{
//     if (nose.id === "options"){
//         options.classList.remove("show");
//         button.classList.remove("close")

       
//     }
// })




// const butonmesas = document.getElementById("mesasboton");
// const butonventas= document.getElementById("ventasboton");
// const butoncompra= document.getElementById('compraboton');
// const mesas= document.getElementById("mesas");
// const ventas= document.getElementById('ventas');
// const compra= document.getElementById('compra');


//  butonmesas.addEventListener("click", () => {
   
//     mesas.classList.toggle("abrir-mesas");
//     ventas.classList.remove("showventas");
//     itemscomida.classList.remove("abrir");
//     itemsbebidas.classList.remove("abrir");
//     comidaop.classList.remove("abrir");
//     compra.classList.remove("showcompra");
   
// });



// butonventas.addEventListener("click", () => {
   
//     ventas.classList.toggle("showventas");
//     mesas.classList.remove("abrir-mesas");
//     itemscomida.classList.remove("abrir");
//     itemsbebidas.classList.remove("abrir");
//     comidaop.classList.remove("abrir");
//     compra.classList.remove("showcompra");
    
   
// });



// butoncompra.addEventListener("click", () => {
   
//     compra.classList.toggle("showcompra");
//      ventas.classList.remove("showventas");
    
//      itemscomida.classList.remove("abrir");
//      itemsbebidas.classList.remove("abrir");
//      comidaop.classList.remove("abrir");
//      mesas.classList.remove("abrir-mesas");
// });

// // comidaaaaaaa


// const comida = document.getElementById("combosboton");
// const itemscomida= document.getElementById("productList");
// const itemsbebidas= document.getElementById('bebidasList')
// const bebidas= document.getElementById('bebidasboton');
// const comidaop= document.getElementById('comidaList');
// const comer= document.getElementById('comidaboton');
// const comidaser= document.getElementById('productList');


// comida.addEventListener("click", () => {
   
//     itemscomida.classList.toggle("abrir");
//     comidaser.classList.toggle("abrir");
//     itemsbebidas.classList.remove("abrir");
//     comidaop.classList.remove("abrir");
//     ventas.classList.remove("showventas");
//     mesas.classList.remove("abrir-mesas");
//     compra.classList.remove("showcompra");
// });


// bebidas.addEventListener("click", () => {
   
//     itemsbebidas.classList.toggle("abrir");
//     itemscomida.classList.remove("abrir");
//     comidaser.classList.remove("abrir");
//     comidaop.classList.remove("abrir");
//     ventas.classList.remove("showventas");
//     mesas.classList.remove("abrir-mesas");
//     compra.classList.remove("showcompra");
// });

// comer.addEventListener("click", () => {
   
//     comidaop.classList.toggle("abrir");
//     itemsbebidas.classList.remove("abrir");
//     itemscomida.classList.remove("abrir");
//     ventas.classList.remove("showventas");
//     mesas.classList.remove("abrir-mesas");
//     compra.classList.remove("showcompra");
//     comidaser.classList.toggle("abrir");
// });













// CLICK MESAS




// const butomesa = document.getElementById("data-boton");
// const optionmesa1= document.getElementById("informacion-mesa1");
// const optionmesa2= document.getElementById("informacion-mesa2");
// const optionmesa3=document.getElementById("informacion-mesa3");
// const optionmesa4=document.getElementById("informacion-mesa4");
// const optionmesa5=document.getElementById("informacion-mesa5");
// const optionmesa6=document.getElementById("informacion-mesa6");
// const optionmesa7=document.getElementById("informacion-mesa7");



// // MESA1

// const mesa1 = document.getElementById('data-boton')

// mesa1.addEventListener('click',() =>{

//     butomesa.classList.toggle("quita");
//     optionmesa1.classList.toggle("muestra");
//     optionmesa2.classList.remove('muestra');
//     optionmesa3.classList.remove('muestra');
//     optionmesa4.classList.remove("muestra");
//     optionmesa5.classList.remove('muestra'); 
//     optionmesa6.classList.remove('muestra');
//     optionmesa7.classList.remove('muestra');

        

// })

// // MESA2

// const mesa2 = document.getElementById('data-boton2')

// mesa2.addEventListener('click',() =>{

//     butomesa.classList.toggle("quita");
//     optionmesa2.classList.toggle("muestra");
//     optionmesa1.classList.remove('muestra')
//     optionmesa3.classList.remove('muestra')
//     optionmesa4.classList.remove("muestra");
//     optionmesa5.classList.remove('muestra'); 
//     optionmesa6.classList.remove('muestra');
//     optionmesa7.classList.remove('muestra');

        

// })

// const mesa3 = document.getElementById('data-boton3')

// mesa3.addEventListener('click',() =>{

//     butomesa.classList.toggle("quita");
//     optionmesa3.classList.toggle("muestra");
//     optionmesa1.classList.remove('muestra');
//     optionmesa2.classList.remove('muestra');
//     optionmesa4.classList.remove("muestra");
//     optionmesa5.classList.remove('muestra'); 
//     optionmesa6.classList.remove('muestra');
//     optionmesa7.classList.remove('muestra');
        

// })

// const mesa4 = document.getElementById('data-boton4')

// mesa4.addEventListener('click',() =>{

//     butomesa.classList.toggle("quita");
//     optionmesa4.classList.toggle("muestra");
//     optionmesa3.classList.remove("muestra");
//     optionmesa1.classList.remove('muestra');
//     optionmesa2.classList.remove('muestra');
//     optionmesa5.classList.remove('muestra'); 
//     optionmesa6.classList.remove('muestra');
//     optionmesa7.classList.remove('muestra');
        

// })

// const mesa5 = document.getElementById('data-boton5')

// mesa5.addEventListener('click',() =>{

//     butomesa.classList.toggle("quita");
//     optionmesa5.classList.toggle("muestra");
//     optionmesa3.classList.remove("muestra");
//     optionmesa1.classList.remove('muestra');
//     optionmesa2.classList.remove('muestra');
//     optionmesa4.classList.remove('muestra');   
//     optionmesa6.classList.remove('muestra'); 
//     optionmesa7.classList.remove('muestra');  
// })



// const mesa6 = document.getElementById('data-boton6')

// mesa6.addEventListener('click',() =>{

//     butomesa.classList.toggle("quita");
//     optionmesa6.classList.toggle("muestra");
//     optionmesa3.classList.remove("muestra");
//     optionmesa1.classList.remove('muestra');
//     optionmesa2.classList.remove('muestra');
//     optionmesa4.classList.remove('muestra');   
//     optionmesa5.classList.remove('muestra'); 
//     optionmesa7.classList.remove('muestra');

    
// })


// const mesa7 = document.getElementById('data-boton7')

// mesa7.addEventListener('click',() =>{

//     butomesa.classList.toggle("quita");
//     optionmesa7.classList.toggle("muestra");
//     optionmesa3.classList.remove("muestra");
//     optionmesa1.classList.remove('muestra');
//     optionmesa2.classList.remove('muestra');
//     optionmesa4.classList.remove('muestra');   
//     optionmesa5.classList.remove('muestra'); 
//     optionmesa6.classList.remove('muestra'); 
// })