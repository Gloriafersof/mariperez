import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  signOut,
} from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js'
import {
  app
} from '../firebase/firebase.config.client.js';

const auth = getAuth(app);

console.log(auth);

const errores= document.getElementById('errores')


const signIn = document.getElementById('signIn');

const loginUser = async (token) => {
  const userLoggedSuccess = await fetch('http://localhost:5200/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  

  const user = await userLoggedSuccess.json();
  return user;
}

signIn.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = event.target.children[0].children[1].children[0].value;
  const password = event.target.children[1].children[1].children[0].value;

  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const token = userCredentials._tokenResponse.idToken;
          loginUser(token)
          const user= userCredentials.user;
          console.log(user);
         
          const objectRole= JSON.parse(user.reloadUserInfo.customAttributes)
          console.log(user.reloadUserInfo.customAttributes);
          console.log(objectRole.role);


           
  if (objectRole.role === 'mesonero') {
    window.location.href = `../indexMesero.html`;
  } else if (objectRole.role === 'cajero') {
    window.location.href = `../index.html`;
  }





            })



            .catch((error) =>{
  const errorCode = error.code;
  const errorMessage= error.errorMessage;


  if(errorCode === 'auth/invalid-email'){
    errores.innerText= 'Correo Incorrecto'
    
  }else if (errorCode === 'auth/user-not-found'){
    errores.innerText= 'Usuario Incorrecto'

  }else if (errorCode === 'auth/wrong-password'){
    errores.innerText= 'Contraseña incorrecta'

  

  }else if (errorCode === 'auth/invalid-login-credentials'){
    errores.innerText= 'Credenciales inválidas'
  }else{
    errores.innerText = errorCode
    console.log(errorCode);
    console.log(errorMessage);
   }
 })
        })
    })










