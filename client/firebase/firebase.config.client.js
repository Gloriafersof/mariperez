// ruedita configuracion del proyecto y copias lo que sale 


// Import the functions you need from the SDKs you need
import {
     initializeApp 
}  
from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJRfZ7QeURTDb9Mvw8LKGX2EUD-bZk1u8",
  authDomain: "mariperez-server.firebaseapp.com",
  projectId: "mariperez-server",
  storageBucket: "mariperez-server.appspot.com",
  messagingSenderId: "104632262503",
  appId: "1:104632262503:web:d614b80d6b0a3b787f59c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}