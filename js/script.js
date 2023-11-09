//Mostrar contraseña
function mostrarcontra() {
  var passwordShow = document.getElementById("mw_loginPassword");

  if (passwordShow.type === "password") {
      passwordShow.type = "text"; 
  } else {
      passwordShow.type = "password"; 
  }
}
//Fin mostrar contraseña

// SECCIONES DEL INDEX
const seccionLogin= document.getElementById("mw_login");
const seccionTipoUsuario= document.getElementById("mw_usuarioTipo");
const seccionRegister= document.getElementById("mw_register");
const seccionRegister2= document.getElementById("mw_register2");

// BOTONES BOTONES LOGIN PARTE 1 - USUARIO CONTRASEÑA
const botonLoginNav = document.getElementById("mw-loginNav");
const botonConoceme = document.getElementById("mw__botonConoceme");
const botonLoginApp = document.getElementById("mw-loginButton");
const botonaApp = document.getElementById("mw-loginButton-modifier");
const botonCloseLogin= document.getElementById("mw-loginCloseButton");
const botonATipoUsuario = document.getElementById("mw-redireccionaTipoUsuario");
const botonMostrarPassword = document.getElementById("mw-mostrar_password");
const inputUser = document.getElementById("mw_loginUser");
const inputPassword = document.getElementById("mw_loginPassword");
let botonesFormularios = document.querySelectorAll(".boton-formulario");

botonConoceme.addEventListener('click', () => {
  seccionTipoUsuario.style.display="flex";
});

botonLoginNav.addEventListener('click', () => {
    seccionLogin.style.display="flex";
});

botonLoginApp.addEventListener('click', () => {
    loginValidations();
});

botonCloseLogin.addEventListener('click', () => {
    seccionLogin.style.display="none";
})

botonATipoUsuario.addEventListener('click', () => {
    seccionLogin.style.display="none";
    seccionTipoUsuario.style.display="flex";
});

// PENDIENTE MBOTON PARA MSOTRAR Y OCULTAR LA CONTRASEÑA
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

// botonRegistrarDandoAdopcion.addEventListener('click', () => {
//     seccionRegister.style.display="none";
//     seccionLogin.style.display="flex"
//     // FUNCION GUARDAR USUARIO NUEVO
//     newUserEntregando();
// });

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

// botonRegistrarAdoptante.addEventListener('click', () => {
//     seccionRegister2.style.display="none";
//     seccionLogin.style.display="flex"
//     newUserAdoptante();
// });



botonesFormularios.forEach(function (boton) {
  boton.addEventListener("click", function (event) {
    
    if (boton.id === "mw-registerButtonDandoAdopcion") {
      boton.id = "D";
      
    } else if (boton.id === "mw-registerButtonAdoptante") {
      boton.id = "A";
    }

    const mwRegisterId = document.getElementById(`${boton.id}-mw_registerId`);
    const mwRegisterNombre = document.getElementById(
      `${boton.id}-mw_registerNombre`
    );
    const mwRegisterApellido = document.getElementById(
      `${boton.id}-mw_registerApellido`
    );
    const mwRegisterPais = document.getElementById(
      `${boton.id}-mw_registerPais`
    );
    const mwRegisterCiudad = document.getElementById(
      `${boton.id}-mw_registerCiudad`
    );
    const mwRegisterCel = document.getElementById(`${boton.id}-mw_registerCel`);
    const mwRegisterEmail = document.getElementById(
      `${boton.id}-mw_registerMail`
    );
    const mwRegisterPassword = document.getElementById(
      `${boton.id}-mw_registerPassword`
    );
    const mwRegisterPasswordConfirm = document.getElementById(
      `${boton.id}-mw_registerPasswordConfirm`
    );
    
    // validacionRegister(mwRegisterId);
    validacionRegister(mwRegisterNombre);
    validacionRegister(mwRegisterApellido);
    validacionRegister(mwRegisterPais);
    validacionRegister(mwRegisterCiudad);
    validacionRegister(mwRegisterCel);
    validacionRegister(mwRegisterEmail);
    validacionRegister(mwRegisterPassword);
    validacionRegister(mwRegisterPasswordConfirm);

    if(boton.id == "D"){
        const contenedorDeFormularioEntregando = document.getElementById("mw_user1Form");
        let parrafosEnFormularioEntregando = contenedorDeFormularioEntregando.getElementsByTagName("p");
        if(parrafosEnFormularioEntregando.length == 0 && mwRegisterPasswordConfirm.value != ''){
            seccionRegister.style.display="none";
            seccionLogin.style.display="flex"
            newUserEntregando();
        }
    } else if(boton.id == "A"){

      const contenedorDeFormularioAdopantdo = document.getElementById("mw_user2Form");
        let parrafosEnFormularioAdoptando = contenedorDeFormularioAdopantdo.getElementsByTagName("p");
        if(parrafosEnFormularioAdoptando.length == 0 && mwRegisterPasswordConfirm.value != ''){
            seccionRegister2.style.display="none";
            seccionLogin.style.display="flex"
            // FUNCION GUARDAR USUARIO NUEVO
            newUserAdoptante();
        }
    }
    

    
  });
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
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email") // getElementsByName se trae con el nombre
    const mensajeInput = document.getElementById("message");
    const enviarButton = document.getElementById("enviarButton");
  
    // Validar nombre
    function validarNombre(nombreCompleto) {
      const regexNombreContactenos = /^([A-z\u00C1-\u00ff]){1,15}((\s([A-z\u00C1-\u00ff]{1,15})){1,10}$)?$/;

      return regexNombreContactenos.test(nombreCompleto);
    }

    // Validar email
    function validarEmail(emailValido) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Permit verificar el cuerbo de un correo

        return regex.test(emailValido);
    }

    function validarMensaje(mensajeValido){
      const regexCampoTexto = /^([A-z\u00C1-\u00ff]){1,15}((\s([A-z\u00C1-\u00ff]{1,18})){1,200}\s?$)?$/;

      return regexCampoTexto.test(mensajeValido);
    }

  enviarButton.addEventListener("click", function(event) {
    event.preventDefault()
    const nombreIngresado = nombreInput.value.trim();
    const emailIngresado = emailInput.value.trim();
    const mensajeIngresado = mensajeInput.value.trim();

    const nombreContactosValido = validarNombre(nombreIngresado);
    const emailContactenosValido = validarEmail(emailIngresado);
    const mensajeContactenosValido = validarMensaje(mensajeIngresado);

    alertasValidacionIfElse(nombreContactosValido, nombreInput);
    alertasValidacionIfElse(emailContactenosValido, emailInput);
    alertasValidacionIfElse(mensajeContactenosValido, mensajeInput);

    const contenedorFormularioContactenos = document.getElementById("form-contactUs");

    let parrafosEnFormularioContactenos = contenedorFormularioContactenos.getElementsByTagName("p");
    if(parrafosEnFormularioContactenos.length == 0 && nombreIngresado != '' && emailIngresado != '' && mensajeIngresado != ''){
      contenedorFormularioContactenos.submit();
      }
    });
});
// FIN SECCIÓN CONSTÁCTENOS


//// ***************************** ////
/// INICIO SECCIÓN APLICATIVO 

//MODELADO DE OBJETOS 

// Se inicializa una variable para traer la BD  de mewoof desde local storage y una variable para almacenar el usuario que va a estar en sesion

let mewoofDB;
let usuarioSesion;
window.onload = validarLocalStorage (), resetUsuarioSesion();

// const userCounter = mewoofDB.usuarios.lista.length;


// FUNCIONES

function validarLocalStorage () {
    if (localStorage.getItem('mewoofDB')){

    console.log("YA EXISTIA")
    mewoofDB = JSON.parse(localStorage.getItem('mewoofDB'));
    console.log(mewoofDB);

} else {
    console.log("NO EXISTIA")
    newMewoofappLS = 
    {
        usuarios: {
            lista: [],
            eliminados: [],
        },
        mascotas: {
            lista: [],
            eliminados: [],
        },
        usuarioSesion: null,
    }
    
    localStorage.setItem('mewoofDB', JSON.stringify(newMewoofappLS))
    mewoofDB = JSON.parse(localStorage.getItem('mewoofDB'));

    console.log(mewoofDB);
}
};

function newUserEntregando () {

    const id = document.getElementById('D-mw_registerId');
    const nombre = document.getElementById('D-mw_registerNombre');
    const apellido = document.getElementById('D-mw_registerApellido');
    const pais = document.getElementById('D-mw_registerPais');
    const ciudad = document.getElementById('D-mw_registerCiudad');
    const cel = document.getElementById('D-mw_registerCel');
    const email = document.getElementById('D-mw_registerMail');
    const password = document.getElementById('D-mw_registerPassword');
    const password2 = document.getElementById('D-mw_registerPasswordConfirm');

    let newUser = {nombre: nombre.value, apellido: apellido.value, pais: pais.value, ciudad: ciudad.value, cel: cel.value, email: email.value, password: password.value, tipo:'Entregando', mascotasCargadas: [], about:''};
    mewoofDB.usuarios.lista.push(newUser)
    saveLocaStorage();

    alert(`¡Registro Exitoso! 
    Bienvenido a la comunidad Mewoof`);

    nombre.value = '';
    apellido.value = '';
    pais.value = '';
    ciudad.value = '';
    id.value = '';
    cel.value = '';
    email.value = '';
    password.value = '';
    password2.value = '';
    
}

function newUserAdoptante () {

    const id = document.getElementById('A-mw_registerId');
    const nombre = document.getElementById('A-mw_registerNombre');
    const apellido = document.getElementById('A-mw_registerApellido');
    const pais = document.getElementById('A-mw_registerPais');
    const ciudad = document.getElementById('A-mw_registerCiudad');
    const cel = document.getElementById('A-mw_registerCel');
    const email = document.getElementById('A-mw_registerMail');
    const password = document.getElementById('A-mw_registerPassword');
    const password2 = document.getElementById('A-mw_registerPasswordConfirm');

    let newUser = {nombre: nombre.value, apellido: apellido.value, pais: pais.value, ciudad: ciudad.value, cel: cel.value, email: email.value, password: password.value, tipo:'Adoptante', solicitudesEnviadas: [], about:''};
    mewoofDB.usuarios.lista.push(newUser)
    saveLocaStorage();

    alert("¡Registro Exitoso! \n Bienvenido a la comunidad Mewoof");

    nombre.value = '';
    apellido.value = '';
    pais.value = '';
    ciudad.value = '';
    id.value = '';
    cel.value = '';
    email.value = '';
    password.value = '';
    password2.value = '';
}



function loginValidations () {

    const usuario = inputUser.value;
    const password = inputPassword.value;

    const usuarioBuscado = mewoofDB.usuarios.lista.find( x => x.email === usuario)

    if (usuarioBuscado) {
        const elementoHtmlUser = document.getElementById("mw_loginUser");
        const estadoUsuarioEncontrado = usuarioBuscado;
        alertasValidacionIfElse(estadoUsuarioEncontrado, elementoHtmlUser);
        if (usuarioBuscado.password === password) {
            alert("Autenticación Exitosa \n ¡Bienvenido!");
            mewoofDB.usuarioSesion = usuarioBuscado;
            saveLocaStorage();
            window.open("aplicativo.html");
            inputUser.value = '';
            inputPassword.value = '';
        } else {
            const elementoHtmlPassword = document.getElementById("mw_loginPassword");
            const estadoPasswordCoincide = usuarioBuscado.password === password;
            alertasValidacionIfElse(estadoPasswordCoincide, elementoHtmlPassword);
            // alert("Contraseña Incorrecta");
            inputPassword.value = '';
        }
    } else {
        const elementoHtmlUser = document.getElementById("mw_loginUser");
        const estadoUsuarioEncontrado = usuarioBuscado;
        alertasValidacionIfElse(estadoUsuarioEncontrado, elementoHtmlUser);
        // alert ("Usuario no encontrado \n Puede registrarse en el boton 'Aún no estoy registrado'")
        inputUser.value = '';
        inputPassword.value = '';
    }

}

function saveLocaStorage() {
    localStorage.setItem('mewoofDB', JSON.stringify(mewoofDB));
}

function limpiarForm () {

}

function eliminarUsuario (usuarioEmail){
    let usuarioEliminar = mewoofDB.usuarios.lista.findIndex(x => x.email === usuarioEmail);

    mewoofDB.usuarios.lista.splice(usuarioEliminar,1);

    saveLocaStorage();
}

function resetUsuarioSesion() {
    mewoofDB.usuarioSesion = null;
    saveLocaStorage();
}

let passwordUserTestToConfirmD = '';
let passwordUserTestToConfirmA = '';

function validacionRegister(HTMLElement) {
  const elementoHtml = HTMLElement;
  
  if (elementoHtml.id === "D-mw_registerId" ||    elementoHtml.id === "A-mw_registerId"){
    const registerId = elementoHtml.value.trim();
    const regexId = /^([A-z\d]){1,10}$/;
    let registerValido = regexId.test(registerId);
 
    alertasValidacionIfElse(registerValido, elementoHtml);

  } else if (elementoHtml.id === "D-mw_registerNombre" || elementoHtml.id === "A-mw_registerNombre") {
    const registerNombre = elementoHtml.value.trim();
    const regexNombre =
      /^([A-z\u00C1-\u00ff]){1,15}((\s([A-z\u00C1-\u00ff]{1,15})){1,1}$)?$/;
    let nombreValido = regexNombre.test(registerNombre);

    alertasValidacionIfElse(nombreValido, elementoHtml);

  } else if (elementoHtml.id === "D-mw_registerApellido" || elementoHtml.id === "A-mw_registerApellido") {
    const registerApellido = elementoHtml.value.trim();
    const regexApellido =
      /^([A-z\u00C1-\u00ff]){1,15}((\s([A-z\u00C1-\u00ff]{1,15})){1,1}$)?$/;
    let apellidoValido = regexApellido.test(registerApellido);

    alertasValidacionIfElse(apellidoValido, elementoHtml);
    
  } else if (elementoHtml.id === "D-mw_registerPais" || elementoHtml.id === "A-mw_registerPais") {
    const registerPais = elementoHtml.value.trim();
    const regexPais =
      /^([A-z\u00C1-\u00ff]){3,15}((\s([A-z\u00C1-\u00ff]{1,15})){1,6}$)?$/;
    let paisValido = regexPais.test(registerPais);

    alertasValidacionIfElse(paisValido, elementoHtml);
  
  } else if (elementoHtml.id === "D-mw_registerCiudad" || elementoHtml.id === "A-mw_registerCiudad") {
    const registerCiudad = elementoHtml.value.trim();
    const regexCiudad =
      /^([A-z\u00C1-\u00ff]){2,15}((\s([A-z\u00C1-\u00ff]{1,15})){1,6}$)?$/;
    let ciudadValido = regexCiudad.test(registerCiudad);

    alertasValidacionIfElse(ciudadValido, elementoHtml);

  } else if (elementoHtml.id === "D-mw_registerCel" || elementoHtml.id === "A-mw_registerCel") {
    const registerCel = elementoHtml.value.trim();
    const regexCel = /^\+?(\d{2,3}[^\dA-z]*[#pe]?\d*){3,3}$/;
    let celValido = regexCel.test(registerCel);

    alertasValidacionIfElse(celValido, elementoHtml);

  } else if (elementoHtml.id === "D-mw_registerMail" || elementoHtml.id === "A-mw_registerMail") {
    const registerMail = elementoHtml.value.trim();
    const registerMailValue = elementoHtml.value;
    const regexMail = /^[\w_]{1,30}(\.?\+?[\w]{5,10})?@[\w]{2,10}\.\w{2,5}$/;
    let mailValidoRegex = regexMail.test(registerMail);
    let mailValidoPorExistencia = mewoofDB.usuarios.lista.find(x => x.email === registerMailValue);
    let mailValido = false;

    if((mailValidoRegex && mailValidoPorExistencia == undefined)){
      mailValido = true;
    }else if(mailValidoRegex && mailValidoPorExistencia) {
      mailValido = false;
    }


    alertasValidacionIfElse(mailValido, elementoHtml)
  } else if (elementoHtml.id === "D-mw_registerPassword" || elementoHtml.id === "A-mw_registerPassword") {
    const registerPassword = elementoHtml.value.trim();
    const regexPassword = /^([\w\d\.\*\-]){8,20}$/;
    let passwordValido = regexPassword.test(registerPassword);

    alertasValidacionIfElse(passwordValido, elementoHtml);

  } else if (elementoHtml.id === "D-mw_registerPasswordConfirm" || elementoHtml.id === "A-mw_registerPasswordConfirm") {
    let registerPasswordConfirm = elementoHtml.value.trim();
    let passwordConfirmValido;
    if(elementoHtml.id == "D-mw_registerPasswordConfirm"){
        if(registerPasswordConfirm === passwordUserTestToConfirmD && registerPasswordConfirm != ''){
            passwordConfirmValido = true;
        } else {
            passwordConfirmValido = false;
        }
    }else if(elementoHtml.id == "A-mw_registerPasswordConfirm"){
        if(registerPasswordConfirm === passwordUserTestToConfirmA && registerPasswordConfirm != ''){
            passwordConfirmValido = true;
        } else {
            passwordConfirmValido = false;
        }
    }

    alertasValidacionIfElse(passwordConfirmValido, elementoHtml)
  }else if(elementoHtml.id === "mw-mascotaRaza"){
    const registerRaza = elementoHtml.value.trim();
    const regexRaza =
      /^([A-z\u00C1-\u00ff]){3,15}((\s([A-z\u00C1-\u00ff]{1,15})){1,6}$)?$/;
    let razaValido = regexRaza.test(registerRaza);

    alertasValidacionIfElse(razaValido, elementoHtml);
  }else if(elementoHtml.id === "mw-mascotaSize"){
    const registerSize = elementoHtml.value.trim();
    const regexSize = /^([A-z\u00C1-\u00ff]){1,15}((\s([A-z\u00C1-\u00ff]{1,15})){1,1}$)?$/;
    let sizeValido = regexSize.test(registerSize);

    alertasValidacionIfElse(sizeValido, elementoHtml);
  }else if(elementoHtml.id === "mw-mascotaNombre"){
    const registerNombreMascota = elementoHtml.value.trim();
    const regexNombreMascota = /^([A-z\u00C1-\u00ff]){1,15}((\s([A-z\u00C1-\u00ff]{1,15})){1,1}$)?$/;
    let nombreMascotaValido = regexNombreMascota.test(registerNombreMascota);

    alertasValidacionIfElse(nombreMascotaValido, elementoHtml);
  }else if(elementoHtml.id === "mw-mascotaEdad"){
    const registerEdadMascota = elementoHtml.value.trim();
    const regexEdadMascota = /^\d\d?$/;
    let edadMascotaValido = regexEdadMascota.test(registerEdadMascota);

    alertasValidacionIfElse(edadMascotaValido, elementoHtml);
  }else if(elementoHtml.id === "mw-mascotaSalud"){
    const registerSaludMascota = elementoHtml.value.trim();
    const regexSaludMascota = /^([A-z\u00C1-\u00ff]){2,15}((\s([A-z\u00C1-\u00ff]{1,18})){1,40}\s?$)?$/;
    let saludMascotaValido = regexSaludMascota.test(registerSaludMascota);

    alertasValidacionIfElse(saludMascotaValido, elementoHtml);
  }else if(elementoHtml.id === "mw-mascotaNeeds"){
    const registerNecesidadesMascota = elementoHtml.value.trim();
    const regexNecesidadesMascota = /^([A-z\u00C1-\u00ff]){2,15}((\s([A-z\u00C1-\u00ff]{1,18})){1,40}\s?$)?$/;
    let necesidadesMascotaValido = regexNecesidadesMascota.test(registerNecesidadesMascota);

    alertasValidacionIfElse(saludMascotaValido, elementoHtml);
  }
}

function alertasValidacionIfElse(estado, elementoHtml){
    if (!estado) {

      const parrafoExistenciaPorId = document.getElementById(
          `${elementoHtml.id}-alert`
        );
        if (!parrafoExistenciaPorId) {
          creacionAlertaRegister(elementoHtml);
        }
      } else {
        const parrafoExistenciaPorId = document.getElementById(
          `${elementoHtml.id}-alert`
        );
        // console.log(parrafoExistenciaPorId);
        if (parrafoExistenciaPorId != null) {

          const elementoPadreDeParrafoExistente =
            parrafoExistenciaPorId.parentNode;
            elementoPadreDeParrafoExistente.removeChild(parrafoExistenciaPorId);
          //Esto es para el testeo de contraseñas si el elemento es contraseña setea una variable global de contraseña para poder ser comparada después
          if(elementoHtml.id === "D-mw_registerPassword"){
                passwordUserTestToConfirmD = elementoHtml.value.trim();
                console.log(passwordUserTestToConfirmD);
          }else if(elementoHtml.id === "A-mw_registerPassword"){
              passwordUserTestToConfirmA = elementoHtml.value.trim();
              console.log(passwordUserTestToConfirmA);
          }
        } else if(estado){
            if(elementoHtml.id === "D-mw_registerPassword"){
                passwordUserTestToConfirmD = elementoHtml.value.trim();
          }else if(elementoHtml.id === "A-mw_registerPassword"){
              passwordUserTestToConfirmA = elementoHtml.value.trim();
              console.log(passwordUserTestToConfirmA);
          }
        }
      }
};

  function creacionAlertaRegister(elementoHtml) {
    const elementoPadreDeParrafoExistente = elementoHtml.parentNode;

    const nuevoParrafoAlerta = document.createElement("p");
    nuevoParrafoAlerta.id = `${elementoHtml.id}-alert`;
    
    if(elementoHtml.id === "D-mw_registerId" || elementoHtml.id === "A-mw_registerId"){
        nuevoParrafoAlerta.textContent = "Escriba un documento válido";
    } else if (elementoHtml.id === "D-mw_registerNombre" || elementoHtml.id === "A-mw_registerNombre") {
      nuevoParrafoAlerta.textContent = "Escriba un nombre válido";
    } else if (elementoHtml.id === "D-mw_registerApellido" || elementoHtml.id === "A-mw_registerApellido") {
      nuevoParrafoAlerta.textContent = "Escriba un apellido válido";
    } else if (elementoHtml.id === "D-mw_registerPais" || elementoHtml.id === "A-mw_registerPais") {
      nuevoParrafoAlerta.textContent = "Escriba un país válido";
    } else if (elementoHtml.id === "D-mw_registerCiudad" || elementoHtml.id === "A-mw_registerCiudad") {
      nuevoParrafoAlerta.textContent = "Escriba una ciudad válida";
    } else if (elementoHtml.id === "D-mw_registerCel" || elementoHtml.id === "A-mw_registerCel") {
      nuevoParrafoAlerta.textContent = "Digite un teléfono válido";
    } else if (elementoHtml.id === "D-mw_registerMail" || elementoHtml.id === "A-mw_registerMail") {

      let registerMailValueParaTextoAlerta = elementoHtml.value;
      let mailValidoPorExistenciaParaTextoAlerta = mewoofDB.usuarios.lista.find(x => x.email === registerMailValueParaTextoAlerta);

      if(mailValidoPorExistenciaParaTextoAlerta != undefined){
        if(registerMailValueParaTextoAlerta === mailValidoPorExistenciaParaTextoAlerta.email){
            nuevoParrafoAlerta.textContent = "Este correo ya existe"
        }}
      else {
        nuevoParrafoAlerta.textContent = "Digite un Email válido";
      }

    } else if (elementoHtml.id === "D-mw_registerPassword" || elementoHtml.id === "A-mw_registerPassword") {
      nuevoParrafoAlerta.textContent = "Mínimo 8 caracteres";
    } else if (elementoHtml.id === "D-mw_registerPasswordConfirm" || elementoHtml.id === "A-mw_registerPasswordConfirm") {
      nuevoParrafoAlerta.textContent = "Las contraseñas no coinciden";
    } else if (elementoHtml.id === "mw_loginUser"){
      nuevoParrafoAlerta.textContent = "El usuario no ha sido encontrado"
    } else if (elementoHtml.id === "mw_loginPassword"){
      nuevoParrafoAlerta.textContent = "La constraseña es incorrecta"
    } else if(elementoHtml.id === "nombre"){
      nuevoParrafoAlerta.textContent = "Escriba nombre válido"
    } else if(elementoHtml.id === "email"){
      nuevoParrafoAlerta.textContent = "Escriba un email válido"
    } else if(elementoHtml.id === "message"){
      nuevoParrafoAlerta.textContent = "Escriba 4 caracteres mínimo"
    }

    if(elementoHtml.id === "nombre" || elementoHtml.id === "email" || elementoHtml.id === "message"){
      nuevoParrafoAlerta.style.color = "red";
      nuevoParrafoAlerta.style.fontSize = "15px";
      nuevoParrafoAlerta.style.marginLeft = "17px";
      nuevoParrafoAlerta.style.marginBottom = "10px";
      let elementoAnteriorAParrafo;
      if(elementoHtml.id === "nombre"){
        elementoAnteriorAParrafo = document.getElementById("nombre")
      } else if(elementoHtml.id === "email"){
        elementoAnteriorAParrafo = document.getElementById("email")
      } else if(elementoHtml.id === "message"){
        elementoAnteriorAParrafo = document.getElementById("message")
      }
      elementoAnteriorAParrafo.insertAdjacentElement("afterend", nuevoParrafoAlerta);

    } else {
    if(elementoHtml.id === "mw_loginUser" || elementoHtml.id === "mw_loginPassword"){
        nuevoParrafoAlerta.style.color = "rgba(239, 65, 71, 0.9)";
        nuevoParrafoAlerta.style.fontSize = "12px";
        nuevoParrafoAlerta.style.marginBottom = "7px";
    } else {
        nuevoParrafoAlerta.style.color = "#e4bf94";
        nuevoParrafoAlerta.style.fontSize = "11px";
        nuevoParrafoAlerta.style.marginBottom = "7px";
    }
    elementoPadreDeParrafoExistente.parentNode.insertBefore(
    nuevoParrafoAlerta,
    elementoPadreDeParrafoExistente.nextSibling
    );
  }
}
// event.preventDefault();

