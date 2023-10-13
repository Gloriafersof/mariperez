
import {
    app
} from '../firebase/firebase.config.client.js'
console.log(app)


const registerNewUser = async (userData) => {
    const aNewUserData = await fetch('http://localhost:3900/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const user = await aNewUserData.json();
    return user;
}

const registro= document.getElementById('registro');

registro.addEventListener('submit', (event) => {

event.preventDefault();

  

    const displayName = event.target.children[0].children[1].children[0].values;
    const displayContrasena =event.target.children[0].children[3].children[0].value;
    const email =event.target.children[0].children[4].children[0].value;

    const roleMesero = document.getElementById('meserocheck');
    const roleCajero = document.getElementById('cajerocheck');



    const registroUsuario= {
        displayName,
        displayContrasena,
        email,
    }
    
    if (roleCajero.checked){
        roleCajero.checked = false
        registroUsuario.role= roleCajero.value;
    }else{
        roleMesero.checked= false;
        registroUsuario.role= roleMesero.value
    }
    
    registerNewUser(registroUsuario)
    .then((response) => {
        console.log(response);
    }).catch((error) => console.log(error))
    
    
})