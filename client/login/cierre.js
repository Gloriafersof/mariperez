import {
    getAuth,
    signInWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence,
    signOut,
    onAuthStateChanged,
  } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js'
  import {
    app
  } from '../firebase/firebase.config.client.js';
  
  const auth = getAuth(app);
  
  console.log(auth);

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // Si el usuario está desconectado, redirígelo a la página de inicio de sesión
      window.location.href = `login/index.html`;
    } else {
      // Aquí va el código para cargar la cuenta
    }
  });
  
  
  const botonCerrar = document.getElementById('cerrarSes')
  
  function cerrarSesion(){
    signOut(auth).then(() =>{
        window.location.href = `login/index.html`
    }).catch((error) => {
  
    console.error('Error al cerrar sesión', error)
    });
  }
  
  botonCerrar.addEventListener('click', cerrarSesion)
  
  console.log(botonCerrar);