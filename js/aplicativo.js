///***********************************************///
// MODELADO DE OBJETOS
let mewoofDB;
let usuarioSesion;

// se define la clase Usuario
class Usuario {

    constructor(nombre, apellido, pais, ciudad, id,  cel, email, password, tipo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.ciudad = ciudad;
        this.id = id;
        this.cel = cel;
        this.email = email;
        this.password = password;
        this.user = this.email;
        this.tipo = tipo;
        this.about = '';
    }
    
    registrarse () {
        console.log("registrado");
    } 

    modificarPerfil () {
        console.log("modificado");
    }

}

// se define la clase Entregando que hereda de Usuario
class Entregando extends Usuario {
    constructor(nombre, apellido, pais, ciudad, id, cel, email, password,tipo){
        super(nombre, apellido, pais, ciudad, id, cel, email, password,tipo)
        this.mascotasCargadas = [];
        
    }
    
    agregarMascota (currentOwner, raza, size, nombre, edad, estadoSalud) {
       
        console.log('Cargada');
        let newMascota = new Mascota(currentOwner, raza, size, nombre, edad, estadoSalud);
        let containerMascotas = mewoofDB.usuarios.lista.find(x => {
           return x.email === usuarioSesion.email
        })
        // console.log(containerMascotas);
        // console.log(usuarioSesion);
        containerMascotas.mascotasCargadas.push(newMascota);
        mewoofDB.mascotas.lista.push(newMascota);

        saveLocaStorage();
        // alert("Mascota agregada con exito")
    }
}

// se define la clase Entregando que hereda de Usuario
class Adoptante extends Usuario {
    constructor(nombre, apellido, pais, ciudad, id, cel, email, password,tipo){
        super(nombre, apellido, pais, ciudad, id, cel, email, password,tipo)
        this.solicitudesEnviadas = [];
    }

    enviarSolicitud () {
        console.log("Enviada");
    }

    eliminarSolicitud () {
        console.log("eliminada");
    }
}

// se define la clase Mascota
class Mascota {
    constructor(currentOwner, raza, size, nombre, edad, estadoSalud){
        this.estadoAdopcion = false;
        this.solicitudesRecibidas = [];
        this.idMascota = "";
        this.currentOwner = currentOwner;
        this.raza = raza;
        this.size = size;
        this.nombre = nombre;
        this.edad = edad;
        this.estadoSalud = estadoSalud;
    }
}

// Se define la clase Solicitd 
class Solicitud {
    constructor(destinatario, remitente, cuerpo){
        this.destinatario = destinatario;
        this.remitente = remitente;
        this.cuerpo = cuerpo;
    }
}


// ******** INICIO MANIPULACION DOM ******** //

// SECCIONES
const seccionPerfilUser = document.getElementById("mw_section-profile");
const seccionMatchHuman = document.getElementById("mw-sectionMatchHuman");
const seccionMatchPreferences = document.getElementById("mw_sectionMatchPreferences");
const seccionMatch = document.getElementById("mw-sectionMatch");
const seccionChat = document.getElementById("mw_sectionChat");
const seccionPanelMascota = document.getElementById("mw_panelMascota");
const seccionMisMascotas = document.getElementById("Entregando_misMascotas");
const seccionSolicitudes = document.getElementById("Adoptante_solicitudesEnv");
const seccionHome = document.getElementById("mw_sectionHome");

// BOTONES NAV BAR
const navBotonPerfil = document.getElementById("mw-navButtonPerfil");
const navBotonMatch = document.getElementById("mw-navButtonMatch");
const navBotonChat = document.getElementById("mw-navButtonChat");
const navBotonSolicitudes = document.getElementById("mw-navButtonMascotas");
const navBotonHome = document.getElementById("mw-navButtonHome");

navBotonPerfil.addEventListener('click', () => {
  ocultarSecciones();
  seccionPerfilUser.style.display="flex";
})


navBotonMatch.addEventListener('click', () => {
    ocultarSecciones();
    usuarioSesion.tipo=== "Adoptante"?
    seccionMatchPreferences.style.display="flex":
    seccionMatchHuman.style.display="flex";
})

navBotonChat.addEventListener('click', () => {
    ocultarSecciones();
    seccionChat.style.display="flex";
})

navBotonSolicitudes.addEventListener('click', () => {
    ocultarSecciones();

    usuarioSesion.tipo === "Entregando" ? seccionMisMascotas.style.display="flex": seccionSolicitudes.style.display="flex";
    
    if (usuarioSesion.tipo === "Entregando") {
        renderizarSolicitudes(mewoofDB.usuarios.lista[findUser(usuarioSesion)].mascotasCargadas);
    }
})

navBotonHome.addEventListener('click', () => {
    ocultarSecciones();
    seccionHome.style.display="flex";
})
// FIN FUNCIONES NAV BAR

// FUNCIONES GENERALES

window.onload  = iniciar();

function iniciar () {
    // alert("Cargando Entorno..")
    mewoofDB = JSON.parse(localStorage.getItem('mewoofDB'));
    setUsuarioSesion(mewoofDB.usuarioSesion);
    mewoofDB.usuarioSesion = mewoofDB.usuarios.lista.find( x => x.email === usuarioSesion.email);
    // usuarioSesion.mascotasCargadas = mewoofDB.usuarioSesion.mascotasCargadas;
}


function setUsuarioSesion (usuario) {
    // alert("GENERANDO USUARIO")

    usuario.tipo === 'Entregando' 
    ? usuarioSesion = new Entregando(usuario.nombre, usuario.apellido, usuario.pais, usuario.ciudad, usuario.id, usuario.cel, usuario.email, usuario.password, usuario.tipo )
    : usuarioSesion = new Adoptante(usuario.nombre, usuario.apellido, usuario.pais, usuario.ciudad, usuario.id, usuario.cel, usuario.email, usuario.password, usuario.tipo );
    
   console.log(usuarioSesion);
}

function findUser (usuario){
    return mewoofDB.usuarios.lista.findIndex(x => x.email === usuario.email)
}

function saveLocaStorage () {
    localStorage.setItem('mewoofDB', JSON.stringify(mewoofDB));
}

function ocultarSecciones () {
    seccionPerfilUser.style.display="none";
    seccionMatchHuman.style.display="none";
    seccionMatchPreferences.style.display="none";
    seccionMatch.style.display="none";
    seccionChat.style.display="none";
    seccionPanelMascota.style.display="none";
    seccionMisMascotas.style.display="none";
    seccionSolicitudes.style.display="none";
    seccionHome.style.display="none";
}

// FIN FUNCIONES GENERALES

// INICIO FUNCIONES PERFIL

// FOTO Y CONTRASEÑA
const seccionCambiarPassword = document.getElementById("password-popup");
const botonCambiarPassword = document.getElementById("open-popup");
const botonCerrarPassword = document.getElementById("close-popup");
const botonGuardarPassword = document.getElementById("save-password");
let inputLastPassword = document.getElementById("password");
let inputNewPassword = document.getElementById("new-password");
let inputConfirmPassword = document.getElementById("confirm-password");

// FORMULARIO
let nombreMostrar = document.getElementById("username_user");
let inputNombre = document.getElementById("inputName");
let inputApellido = document.getElementById("inputApellido");
let inputCelular = document.getElementById("inputCelular");
let inputPais = document.getElementById("inputPais");
let inputCiudad = document.getElementById("inputCiudad");
let inputEmail = document.getElementById("inputEmail");
let inputAbout = document.getElementById("inputAbout");
// let inputInteres = document.getElementById("");
const botonGuardarCambiosPerfil = document.getElementById("mw-PerfilBtn-guardarCambios");

nombreMostrar.innerHTML = `${usuarioSesion.nombre} ${usuarioSesion.apellido}`;
inputNombre.value = usuarioSesion.nombre;
inputApellido.value = usuarioSesion.apellido;
inputCelular.value = usuarioSesion.cel;
inputPais.value = usuarioSesion.pais;
inputCiudad.value = usuarioSesion.ciudad;
inputEmail.value = usuarioSesion.email;

mewoofDB.usuarios.lista.find(x=>x.email===usuarioSesion.email).about === "" ? inputAbout.value = mensajePerfil(usuarioSesion) : inputAbout.value = mewoofDB.usuarios.lista.find(x=>x.email===usuarioSesion.email).about;
// inputInteres.value = usuarioSesion.intereses;

function mensajePerfil(usuario) {
    return `Hola, soy ${usuario.nombre} ${usuario.apellido}, vivo en ${usuario.ciudad}, ${usuario.pais} y soy amante de los animales`
} 

// botonGuardarCambiosPerfil.addEventListener('click', () => {
//     let perfilCambio = mewoofDB.usuarios.lista.find(x=>x.email===usuarioSesion.email)

//     perfilCambio.nombre = inputNombre.value;
//     perfilCambio.apellido = inputApellido.value;
//     perfilCambio.cel = inputCelular.value;
//     perfilCambio.pais = inputPais.value;
//     perfilCambio.ciudad = inputCiudad.value;
//     perfilCambio.email = inputEmail.value;
//     perfilCambio.about = inputAbout.value;
//     saveLocaStorage();
//     alert("Información Actualizada con éxito");

// })

// botonCambiarPassword.addEventListener('click', () => {
//     seccionCambiarPassword.style.right="0%";
// })

// botonCerrarPassword.addEventListener('click', () => {
//     seccionCambiarPassword.style.right="150%";
// })

// botonGuardarPassword.addEventListener('click', () => {
//     alert("1111@11")
//     console.log(`UsuarioSesion: ${usuarioSesion.password} - tipo: ${typeof(usuarioSesion.password)}`)
//     console.log(`contraseña anterior input: ${inputLastPassword.value} - tipo: ${typeof(inputLastPassword.value)}`)
//     console.log(` nueva contraseña: ${inputNewPassword.value} - tipo: ${typeof(inputNewPassword.value)}`);
//     console.log(` confirmar contraseña: ${inputConfirmPassword.value} - tipo: ${typeof(inputConfirmPassword.value)}`);
//     console.log(`boolean compare: ${inputLastPassword.value == usuarioSesion.password} - bollean extrict: ${inputLastPassword.value === usuarioSesion.password}`)
//     if (usuarioSesion.password === inputLastPassword.value){
//         alert("1111@22")
//         let user= mewoofDB.usuarios.lista.find(x=>x.email===usuarioSesion.email)
//         user.password = inputNewPassword.value;
//         user.password = inputConfirmPassword.value;
//         alert("Contraseña Actualizada con éxito");
//         seccionCambiarPassword.style.right="150%";
//         saveLocaStorage();
//     }
// })
// FIN FUNCIONES PERFIL


// INICIO SECCION PREFERENCES

//BOTONES DE SELECCION GATO, PERRO O AMBOS
const botonPreferencesCat = document.getElementById("mw-preferencesMew");
const botonPreferencesDog = document.getElementById("mw-preferencesWoof");
const botonPreferencesCatDog = document.getElementById("mw-preferencesMewoof");
const imgVariableTarjetaMascota = document.getElementById("mw-mascotaCardImg");



botonPreferencesCat.addEventListener('click', () => {
    ocultarSecciones();
    seccionMatch.style.display="flex";
    imgVariableTarjetaMascota.src = "../img/Gato3.jpg"
})

botonPreferencesDog.addEventListener('click', () => {
    ocultarSecciones();
    seccionMatch.style.display="flex";
    imgVariableTarjetaMascota.src = "../img/bannerr2.png"

})

botonPreferencesCatDog.addEventListener('click', () => {
    ocultarSecciones();
    seccionMatch.style.display="flex";
    imgVariableTarjetaMascota.src = "../img/perrito1.jpg"
})



// FIN SECCION PREFERENCES


// BOTONES CREAR MASCOTA
const botonAbrirPanelMascota = document.getElementById("mw_panelMascotaOpen");
const botonCerrarPanelMascota = document.getElementById("mw_panelMascotaClose");
let botonCrearMascota = document.getElementById("mw_cargarMascotaButton");

let formularioRaza = document.getElementById("mw-mascotaRaza");
let formularioSize = document.getElementById("mw-mascotaSize");
let formularioNombre = document.getElementById("mw-mascotaNombre");
let formularioEdad = document.getElementById("mw-mascotaEdad");
let formularioSalud = document.getElementById("mw-mascotaSalud");
let formularioNecesidades = document.getElementById("mw-mascotaNeeds");
let formularioFoto = document.getElementById("mw-mascotaFoto");

botonAbrirPanelMascota.addEventListener('click', () => {

seccionPanelMascota.style.display="flex";
});

botonCerrarPanelMascota.addEventListener('click', () => {
    seccionPanelMascota.style.display="none";
});

// botonCrearMascota.addEventListener('click', crearMascota());

function crearMascota() {
    usuarioSesion.agregarMascota(usuarioSesion, formularioRaza.value, formularioSize.value,formularioNombre.value, formularioEdad.value, formularioSalud.value);

    seccionPanelMascota.style.display="none"
    alert("Mascota Creada");
    formularioRaza.value = '';
    formularioEdad.value = '';
    formularioNombre.value = '';
    formularioSalud.value = '';
    formularioSize.value = '';
    renderizarSolicitudes(mewoofDB.usuarios.lista[findUser(usuarioSesion)].mascotasCargadas);
}

function renderizarSolicitudes(listaMascotas){
    // Tablero donde se van a renderizar las solicitudes en Seccion mis Mascotas
    const tablero = document.getElementById("mw_misMascotas-tablero");
    // tablero.innerHTML="";
    
    // Inicializacion de ciclo que va a recorrer todo el arreglo de mascotas Cargadas
    for (let mascota of listaMascotas){

        if (document.getElementById(`mascota-${mascota.nombre}-${mascota.currentOwner.nombre}`)){
            continue;
        }
        /// CREACION DE ELEMENTOS PARA INSERTAR UNA TARJETA A HTML POR MEDIO DE LA MANIPULACION DEL DOM
        // TarjetaMascota - Bloque 1 -> Foto
        const tarjetaMascotaCargada = document.createElement("div");
        const boxImagenTarjeta = document.createElement("div");
        const imagenTarjeta = document.createElement("img");
        
        // TarjetaMascota - Bloque 2 -> Info Mascota
        const boxInfoTarjeta = document.createElement("div");
        const nombreMascotaTarjeta = document.createElement("h3");
        const boxImpresiones = document.createElement("div");
        const textImpresiones = document.createElement("button");
        const edadMascotaTarjeta = document.createElement("span");
        const descripcionMascotaTarjeta = document.createElement("p");
        
        // TarjetaMascota - Bloque 3 -> Botones eliminar y editaar
        const boxBotones= document.createElement("div");
        const botonEditarMascota = document.createElement("i");
        const botonEliminarMascota = document.createElement("i");


        // Tarjeta Mascota - Asignacion de Clases y contenido de objetos creados para Tarjeta Mascota - Bloque 1 -> Foto
        tarjetaMascotaCargada.classList.add("mw-mascotaCargada");
        tarjetaMascotaCargada.setAttribute("id",`mascota-${mascota.nombre}-${mascota.currentOwner.nombre}`);
        boxImagenTarjeta.classList.add("img-radius");
        imagenTarjeta.classList.add("mw-mascotaCargada-img");

        imagenTarjeta.src="img/banner2.png";

        boxImagenTarjeta.appendChild(imagenTarjeta);
        tarjetaMascotaCargada.appendChild(boxImagenTarjeta);
        
        
        // Tarjeta Mascota - Asignacion de Clases y contenido de objetos creados para Tarjeta Mascota - Bloque 2 -> Info Mascota
        boxInfoTarjeta.classList.add("mw-mascotaCargada-info");
        boxImpresiones.classList.add("mw-impresionesMascota");
        textImpresiones.classList.add("card_button");
        nombreMascotaTarjeta.classList.add("card__title");
        edadMascotaTarjeta.classList.add("point");
        descripcionMascotaTarjeta.classList.add("card__copy");
        descripcionMascotaTarjeta.classList.add("hiden");

        mascota.solicitudesRecibidas.length === 1 ? textImpresiones.innerHTML = `${mascota.solicitudesRecibidas.length} like`: textImpresiones.innerHTML = `${mascota.solicitudesRecibidas.length} likes`;
        nombreMascotaTarjeta.innerHTML = mascota.nombre;
        edadMascotaTarjeta.innerHTML = `${mascota.edad} años`;
        descripcionMascotaTarjeta.innerHTML= `¡Hola! soy ${mascota.nombre}, soy un Peludito de raza ${mascota.raza} vivo en ${mascota.currentOwner.ciudad}, ${mascota.currentOwner.pais} y soy muy amoroso, !Conoceme más!`;
        // textImpresiones.onclick="#";

        boxImpresiones.appendChild(nombreMascotaTarjeta);
        boxImpresiones.appendChild(textImpresiones);

        boxInfoTarjeta.appendChild(boxImpresiones);
        boxInfoTarjeta.appendChild(edadMascotaTarjeta);
        boxInfoTarjeta.appendChild(descripcionMascotaTarjeta);
        tarjetaMascotaCargada.appendChild(boxInfoTarjeta);
        
        // Tarjeta Mascota - Asignacion de Clases y contenido de objetos creados para Tarjeta Mascota - Bloque 3 -> Impresiones Mascota
        boxBotones.classList.add("mw_mascotaCargada-actionButtons");
        botonEditarMascota.classList.add('bx');
        botonEditarMascota.classList.add('bx-edit');
        botonEditarMascota.setAttribute('id', "mw_buttonEditarMascota" )
        botonEliminarMascota.classList.add('bx');
        botonEliminarMascota.classList.add('bx-trash');
        botonEliminarMascota.setAttribute('id', "mw_buttonEliminarMascota" )

        boxBotones.appendChild(botonEditarMascota);
        boxBotones.appendChild(botonEliminarMascota);

        tarjetaMascotaCargada.appendChild(boxBotones);
    

        tablero.appendChild(tarjetaMascotaCargada);
    }
}





// INICIO FUNCION DE AGREGAR OBJETO CUANDO SE OPRIME EL CORAZON DE LIKE <3

let listaDeOjetos = [];
const objeto = {};

let divAddObjects = document.getElementById("like");

function addObjectsToList(){
    
    const nombreH3 = document.querySelector(".card__title");
    const descripcionPerrito = document.querySelector(".card__copy");
    const rutaImagenPerrito = document.querySelector(".card__img")
    
    const imagePerrito = rutaImagenPerrito.src;
    objeto.rutaImagen = imagePerrito;
    const nombreTexto = nombreH3.textContent.trim();
    
    let nombreGuardar = nombreTexto.split(' ');
    
    for(caracter of nombreTexto){
        if(!isNaN(caracter) && caracter != ' '){
            objeto.edad = parseInt(caracter)
        } else {
            objeto.nombre = nombreGuardar[0]
        }
    }
    
    const descripcionTexto = descripcionPerrito.textContent.trim();
    
    objeto.descripcion = descripcionTexto
    
    
    listaDeOjetos.push(objeto)
    console.log(listaDeOjetos)  
    
}

divAddObjects.addEventListener("click", addObjectsToList);
// FIN FUNCION DE AGREGAR OBJETO CUANDO SE OPRIME EL CORAZON DE LIKE <3

botonCrearMascota.addEventListener('click', function(event){
    const mwRegisterRaza = document.getElementById("mw-mascotaRaza");
    const mwRegisterSize = document.getElementById("mw-mascotaSize");
    const mwRegisterNombre = document.getElementById("mw-mascotaNombre");
    const mwRegisterEdad = document.getElementById("mw-mascotaEdad");
    const mwRegisterSalud = document.getElementById("mw-mascotaSalud");
    const mwRegisterNecesidades = document.getElementById("mw-mascotaNeeds");

    validacionRegister(mwRegisterRaza);
    validacionRegister(mwRegisterSize);
    validacionRegister(mwRegisterNombre);
    validacionRegister(mwRegisterEdad);
    validacionRegister(mwRegisterSalud);
    // validacionRegister(mwRegisterNecesidades);

    if(botonCrearMascota.id =="mw_cargarMascotaButton"){
        const contenedorDeFormularioEntregando = document.getElementById("mw_mascotaForm");
        let parrafosEnFormularioEntregando = contenedorDeFormularioEntregando.getElementsByTagName("p");
        if(parrafosEnFormularioEntregando.length == 0){
            crearMascota();
        }
    }
});

function validacionRegister(HTMLElement) {
    const elementoHtml = HTMLElement;

    if(elementoHtml.id === "mw-mascotaRaza"){
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

        alertasValidacionIfElse(necesidadesMascotaValido, elementoHtml);
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
        if (parrafoExistenciaPorId != null) {
            const elementoPadreDeParrafoExistente =
            parrafoExistenciaPorId.parentNode;
            elementoPadreDeParrafoExistente.removeChild(parrafoExistenciaPorId);
            //Esto es para el testeo de contraseñas si el elemento es contraseña setea una variable global de contraseña para poder ser comparada después
        } 
    }
};

function creacionAlertaRegister(elementoHtml) {
    const elementoPadreDeParrafoExistente = elementoHtml.parentNode;

    const nuevoParrafoAlerta = document.createElement("p");
    nuevoParrafoAlerta.id = `${elementoHtml.id}-alert`;
    if (elementoHtml.id == "mw-mascotaRaza"){
    nuevoParrafoAlerta.textContent = "Dígite una raza válida"
    } else if (elementoHtml.id == "mw-mascotaSize"){
        nuevoParrafoAlerta.textContent = "Dígite un tamaño válido"
    } else if (elementoHtml.id == "mw-mascotaNombre"){
        nuevoParrafoAlerta.textContent = "Dígite un nombre válido"
    } else if (elementoHtml.id == "mw-mascotaEdad"){
        nuevoParrafoAlerta.textContent = "Dígite una edad válida"
    } else if (elementoHtml.id == "mw-mascotaSalud"){
        nuevoParrafoAlerta.textContent = "Escriba 10 caracteres mínimo"
    } else if (elementoHtml.id == "mw-mascotaNeeds"){
        nuevoParrafoAlerta.textContent = "Escriba 10 caracteres mínimo"
    }

    nuevoParrafoAlerta.style.color = "#e4bf94";
    nuevoParrafoAlerta.style.fontSize = "13px";
    nuevoParrafoAlerta.style.marginBottom = "6px"
    
    elementoPadreDeParrafoExistente.parentNode.insertBefore(
    nuevoParrafoAlerta,
    elementoPadreDeParrafoExistente.nextSibling
    );
    }