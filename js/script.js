// SECCIONES DEL INDEX
const seccionLogin= document.getElementById("mw_login");
const seccionTipoUsuario= document.getElementById("mw_usuarioTipo");
const seccionRegister= document.getElementById("mw_register");
const seccionRegister2= document.getElementById("mw_register2");

// BOTONES BOTONES LOGIN PARTE 1 - USUARIO CONTRASEÑA
const botonLoginNav = document.getElementById("mw-loginNav");
const botonLoginApp = document.getElementById("mw-loginButton");
const botonCloseLogin= document.getElementById("mw-loginCloseButton");
const botonATipoUsuario = document.getElementById("mw-redireccionaTipoUsuario");
const botonMostrarPassword = document.getElementById("mw-mostrar_password");
const inputPassword = document.getElementById("mw_loginPassword");

botonLoginNav.addEventListener('click', () => {
    seccionLogin.style.display="flex";
});

botonLoginApp.addEventListener('click', () => {
    alert ("¡Ingreso Exitoso!");
});

botonCloseLogin.addEventListener('click', () => {
    seccionLogin.style.display="none";
})

botonATipoUsuario.addEventListener('click', () => {
    seccionLogin.style.display="none";
    seccionTipoUsuario.style.display="flex";
});

// botonMostrarPassword.addEventListener('click', () => {
//     inputPassword.type="text";
// });

// BOTONES LOGIN PARTE 2 - TIPO DE USUARIO
const botonBackTipoUsuario= document.getElementById("mw-usuarioTipoCloseButton1");
const botonCloseTipoUsuario= document.getElementById("mw-usuarioTipoCloseButton");
const botonARegister = document.getElementById("mv-usuarioTipoButton1");
const botonARegister2 = document.getElementById("mv-usuarioTipoButton2");
const botonALogin2 = document.getElementById("mw-redireccionaLogin2");

botonBackTipoUsuario.addEventListener('click', () => {
    seccionTipoUsuario.style.display="none";
    seccionLogin.style.display="flex";
});

botonCloseTipoUsuario.addEventListener('click', () => {
    seccionTipoUsuario.style.display="none";
});

botonARegister.addEventListener('click', () => {
    seccionTipoUsuario.style.display="none";
    seccionRegister.style.display="flex";
});

botonARegister2.addEventListener('click', () => {
    seccionTipoUsuario.style.display="none";
    seccionRegister2.style.display="flex";
});

botonALogin2.addEventListener('click', () => {
    seccionTipoUsuario.style.display="none";
    seccionLogin.style.display="flex";
});

// BOTONES LOGIN PARTE 3 - USUARIO DANDO EN ADOPCIÓN
const botonBackRegister= document.getElementById("mw-registerTipoCloseButton1");
const botonCloseRegister= document.getElementById("mw-registerCloseButton");
const botonALogin3 = document.getElementById("mw-redireccionaLogin3");
const botonRegistrarDandoAdopcion = document.getElementById("mw-registerButtonDandoAdopcion");

botonBackRegister.addEventListener('click', () => {
    seccionRegister.style.display="none";
    seccionTipoUsuario.style.display="flex";
});

botonCloseRegister.addEventListener('click', () => {
    seccionRegister.style.display="none";
});

botonALogin3.addEventListener('click', () => {
    seccionRegister.style.display="none";
    seccionLogin.style.display="flex";
});

botonRegistrarDandoAdopcion.addEventListener('click', () => {
    alert("¡Registro Exitoso! \n Bienvenido a la comunidad Mewoof");
    seccionRegister.style.display="none";
    seccionLogin.style.display="flex"
});

// BOTONES LOGIN PARTE 4 - USUARIO ADOPTANDO

const botonBackRegister2= document.getElementById("mw-register2TipoCloseButton1");
const botonCloseRegister2= document.getElementById("mw-register2CloseButton");
const botonALogin4 = document.getElementById("mw-redireccionaLogin4");
const botonRegistrarAdoptante = document.getElementById("mw-registerButtonAdoptante");

botonBackRegister2.addEventListener('click', () => {
    seccionRegister2.style.display="none";
    seccionTipoUsuario.style.display="flex";
});
botonCloseRegister2.addEventListener('click', () => {
    seccionRegister2.style.display="none";
});

botonALogin4.addEventListener('click', () => {
    seccionRegister2.style.display="none";
    seccionLogin.style.display="flex";
});

botonRegistrarAdoptante.addEventListener('click', () => {
    alert("¡Registro Exitoso! \n Bienvenido a la comunidad Mewoof");
    seccionRegister2.style.display="none";
    seccionLogin.style.display="flex"
});



// BOTONTES MOSTRAR MÁS SECCION OUR TEAM
function mostrarMas1() {
    const member1 = document.querySelector("#mw-cardtext1");
    member1.style="display: block";
    document.getElementById("mostrar-menos1").style="display: block";
    document.getElementById("mostrar-mas1").style="display: none";
}

function mostrarMas2() {
    const member2 = document.querySelector("#mw-cardtext2");
    member2.style="display: block";
    document.getElementById("mostrar-menos2").style="display: block";
    document.getElementById("mostrar-mas2").style="display: none";
    
}

function mostrarMas3() {
    const member3 = document.querySelector("#mw-cardtext3");
    member3.style="display: block";
    document.getElementById("mostrar-menos3").style="display: block";
    document.getElementById("mostrar-mas3").style="display: none";
    
}

function mostrarMas4() {
    const member4 = document.querySelector("#mw-cardtext4");
    member4.style="display: block";
    document.getElementById("mostrar-menos4").style="display: block";
    document.getElementById("mostrar-mas4").style="display: none";
    
}

// BOTONTES MOSTRAR MENOS SECCION OUR TEAM
function mostrarMenos1() {
    const member1 = document.querySelector("#mw-cardtext1");
    member1.style="display: none"
    document.getElementById("mostrar-menos1").style="display: none";
    document.getElementById("mostrar-mas1").style="display: block";
}

function mostrarMenos2() {
    const member2 = document.querySelector("#mw-cardtext2");
    member2.style="display: none"
    document.getElementById("mostrar-menos2").style="display: none";
    document.getElementById("mostrar-mas2").style="display: block";
}

function mostrarMenos3() {
    const member3 = document.querySelector("#mw-cardtext3");
    member3.style="display: none"
    document.getElementById("mostrar-menos3").style="display: none";
    document.getElementById("mostrar-mas3").style="display: block";
}

function mostrarMenos4() {
    const member4 = document.querySelector("#mw-cardtext4");
    member4.style="display: none"
    document.getElementById("mostrar-menos4").style="display: none";
    document.getElementById("mostrar-mas4").style="display: block";
}

const navCont = document.querySelector(".mw-navcontainer-menu");
const botonNav = document.querySelector(".toggle");

botonNav.addEventListener("click", () => {
    navCont.classList.toggle("nav-menu-visible")
})

//SECCIÓN CONTÁCTENOS
//Validación datos ingresados al formulario
document.addEventListener("DOMContentLoaded", function() {
    // Traer los datos de entrada
    let nombreInput = document.getElementById("nombre");
    let emailInput = document.getElementsByName("email")[0]; // getElementsByName se trae con el nombre
    let enviarButton = document.getElementById("enviarButton");
  
    // Validar nombre
    function validarNombre(nombreCompleto) {
        let nombreApellido = nombreCompleto.split(" ");
        return nombreApellido.length === 2 && nombreApellido[0].length >= 3 && nombreApellido[1].length >= 3;
    }

    // Validar email
    function validarEmail(emailValido) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Permit verificar el cuerbo de un correo
        return regex.test(emailValido);
    } 

    enviarButton.addEventListener("click", function(event) {
        let nombreCompleto = nombreInput.value.trim();
        let emailValido = emailInput.value.trim();

        // Realizar validación de nombre y correo electrónico
        if (validarNombre(nombreCompleto) && validarEmail(emailValido)) {
            document.querySelector("form").submit();
            document.getElementById("nombre").value = ""; //Limpiar campos 
            document.getElementById("email").value = "";
        } else {
            if (!validarNombre(nombreCompleto)) {
                alert("Ingrese su nombre completo.");
            }
            if (!validarEmail(emailValido)) {
                alert("Ingrese un email valido.");
            }
            event.preventDefault(); // no deja enviar el formulario antes de tiempo
        }
    });
});
// FIN SECCIÓN CONSTÁCTENOS
