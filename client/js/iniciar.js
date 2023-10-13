
const crear = document.getElementById('crear');
const container = document.getElementById('registro');
const iniciar= document.getElementById('iniciar');
const registrar= document.getElementById('botonregistrar')
const botones = document.getElementById('botonvolver');
const botoninit = document.getElementById('loginBoton');

// Evento para abrir form de registro
crear.addEventListener('click', () =>{
   registrar.classList.toggle('ver');
  container.classList.toggle('show');
  iniciar.classList.toggle('close');
  botones.classList.toggle('ver');
  botoninit.classList.toggle('close');

}

);


 
function validarEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);

  
}

function validarNombre(nombre) {
  var re = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
  return re.test(nombre);
}


// Evento para regresar al form de iniciar sesión
registrar.addEventListener('click', () =>{
  if ((correoregistro.value != '' && validarEmail(correoregistro.value)) && ((contraseñaregistro.value != '' && contraseñaregistro.value.length > 6))&&(validarNombre(nombreregistro.value))){

    container.classList.remove('show');
    iniciar.classList.remove('close')
    registrar.classList.remove('ver')
  
    botones.classList.remove('ver');
    botoninit.classList.remove('close');
    parrafo.classList.add('close')


   
  }
  }
);

botones.addEventListener('click', () =>{
  container.classList.remove('show');
  iniciar.classList.remove('close')
  registrar.classList.remove('ver')
  botoninit.classList.remove('close');
  botones.classList.remove('ver')
  parrafo.classList.add('close')
})





// errores
const form= document.getElementById('form')
const nombreregistro=document.getElementById('nombrereginput')
const contraseñaregistro=document.getElementById('contraseñareginput')
const correoregistro=document.getElementById('correoreginput')
const parrafo= document.getElementById('warnings')







function validarDatos(){
  let warning =''
  let entrar= false
  let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  parrafo.innerHTML=''
/*    if(nombrereg.value.length < 6){
    warning+= `el nombre es muy corto`
    entrar= true
    return false
  
    no acepte numeros  
   } */
  
   if(!regexEmail.test(emailregistro.value)){
     warning+= `Email incorrecto`
     entrar= true
     return 
   }
   if (contraregistro.value.length < 8){
     warning+= `La contrasena no es valida`
     entrar= true
     return
   }
  
   if(entrar){
     parrafo.innerHTML= warning
   }
   return 'Valores incorrectos'

}

// export default {
//   validarDatos
// }






