const registerNewUser = async (userData) => {
    const aNewUserData = await fetch('http://localhost:5200/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const user = await aNewUserData.json();
    return user;
}

const registro = document.getElementById('registro');

registro.addEventListener('submit', (event) => {

    event.preventDefault();


    const displayName = event.target.children[0].children[1].children[0].value;
    const email = event.target.children[1].children[1].children[0].value;
    const password = event.target.children[2].children[1].children[0].value;
    const roleMesero = event.target.children[3].children[1].children[0];
    const roleCajero = event.target.children[3].children[3].children[0];

    const registroUsuario = {
        displayName,
        password,
        email,
    }



    if (roleMesero.checked) {
        registroUsuario.role = "mesonero"
    } else if (roleCajero.checked) {
        registroUsuario.role = "cajero"
    }

    console.log(registroUsuario);

    registerNewUser(registroUsuario)
        .then((responseUser) => {
            TODO: // Si te gustaría agregar un mensaje cuando se registró, te recomiendo SweetAlert2 👇🏼👇🏼 Y debes colocarlo acá antes de redireccionar al usuario
                console.log(responseUser)
           window.location.href = `../login/index.html`;
        })
        .catch((error) => console.error(error))
})