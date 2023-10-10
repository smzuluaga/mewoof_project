
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
        alert("Mascota agregada con exito")
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
        this. remitente = remitente;
        this.cuerpo = cuerpo;
    }
}


// ******** INICIO MANIPULACION DOM ******** //

// SECCIONES
const seccionMatch = document.getElementById("section-mwhome");
const seccionPanelMascota = document.getElementById("mw_panelMascota");
const seccionMisMascotas = document.getElementById("Entregando_misMascotas");
const seccionSolicitudes = document.getElementById("Adoptante_solicitudesEnv");

// BOTONES NAV BAR
const navBotonPerfil = document.getElementById("mw-navButtonPerfil");
const navBotonMatch = document.getElementById("mw-navButtonMatch");
const navBotonChat = document.getElementById("mw-navButtonChat");
const navBotonSolicitudes = document.getElementById("mw-navButtonMascotas");
const navBotonHome = document.getElementById("mw-navButtonHome");

navBotonMatch.addEventListener('click', () => {
    ocultarSecciones();
    seccionMatch.style.display="flex";
})

navBotonSolicitudes.addEventListener('click', () => {
    ocultarSecciones();

    usuarioSesion.tipo === "Entregando" ? seccionMisMascotas.style.display="flex": seccionSolicitudes.style.display="flex";
})

// FUNCIONES GENERALES

window.onload  = iniciar();

function iniciar () {
    alert("Cargando Entorno..")
    mewoofDB = JSON.parse(localStorage.getItem('mewoofDB'));
    setUsuarioSesion(mewoofDB.usuarioSesion);
    mewoofDB.usuarioSesion = mewoofDB.usuarios.lista.find( x => x.email === usuarioSesion.email);
    // usuarioSesion.mascotasCargadas = mewoofDB.usuarioSesion.mascotasCargadas;
}


function setUsuarioSesion (usuario) {
    alert("GENERANDO USUARIO")

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
    seccionMatch.style.display="none";
    seccionMisMascotas.style.display="none";
    seccionSolicitudes.style.display="none";
}


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
    console.log("lleguekakakak");
    seccionMisMascotas.style.display="flex"
    seccionPanelMascota.style.display="none"
    formularioRaza.value = '';
    formularioEdad.value = '';
    formularioNombre.value = '';
    formularioSalud.value = '';
    formularioSize.value = '';
    alert("Mascota Creada");
}

// function renderizarSolicitudes(listaMascotas){
//     // Tablero donde se van a renderizar las solicitudes en Seccion mis Mascotas
//     const tablero = document.getElementById("mw-misMascotas-tablero");
    
//     // Inicializacion de ciclo que va a recorrer todo el arreglo de mascotas Cargadas
//     for (let mascota of listaMascotas){

//         /// CREACION DE ELEMENTOS PARA INSERTAR UNA TARJETA A HTML POR MEDIO DE LA MANIPULACION DEL DOM
//         // TarjetaMascota - Bloque 1 -> Foto
//         const tarjetaMascotaCargada = document.createElement("div");
//         const boxImagenTarjeta = document.createElement("div");
//         const imagenTarjeta = document.createElement("img");
        
//         // TarjetaMascota - Bloque 2 -> Info Mascota
//         const boxInfoTarjeta = document.createElement("div");
//         const nombreMascotaTarjeta = document.createElement("h3");
//         const edadMascotaTarjeta = document.createElement("span");
//         const descripcionMascotaTarjeta = document.createElement("p");
        
//         // TarjetaMascota - Bloque 3 -> Impresiones mascotas
//         const boxImpresiones = document.createElement("div");
//         const textImpresiones = document.createElement("button");

//         // Tarjeta Mascota - Asignacion de Clases y contenido de objetos creados para Tarjeta Mascota - Bloque 1 -> Foto
//         tarjetaMascotaCargada.classList.add("mw-mascotaCargada");
//         boxImagenTarjeta.classList.add("img-radius");
//         imagenTarjeta.classList.add("mw-mascotaCargada-img");

//         imagenTarjeta.src="img/banner2.png";

//         boxImagenTarjeta.appendChild(imagenTarjeta);
//         tarjetaMascotaCargada.appendChild(boxImagenTarjeta);
        
        
//         // Tarjeta Mascota - Asignacion de Clases y contenido de objetos creados para Tarjeta Mascota - Bloque 2 -> Info Mascota
//         boxInfoTarjeta.classList.add("mw-mascotaCargada-info");
//         nombreMascotaTarjeta.classList.add("card__title");
//         edadMascotaTarjeta.classList.add("point");

//         nombreMascotaTarjeta.innerHTML = mascota.nombre;
//         edadMascotaTarjeta.innerHTML = mascota.edad;
//         descripcionMascotaTarjeta.innerHTML=mascota.raza;

//         nombreMascotaTarjeta.appendChild(edadMascotaTarjeta);
//         boxInfoTarjeta.appendChild(nombreMascotaTarjeta);
//         boxInfoTarjeta.appendChild(descripcionMascotaTarjeta);
//         tarjetaMascotaCargada.appendChild(boxInfoTarjeta);
        
//         // Tarjeta Mascota - Asignacion de Clases y contenido de objetos creados para Tarjeta Mascota - Bloque 3 -> Impresiones Mascota
//         descripcionMascotaTarjeta.classList.add("card__copy");
//         boxImpresiones.classList.add("mw-impresionesMascota");
//         textImpresiones.classList.add("card_button");

//         mascota.solicitudesRecibidas.length === 1 ? textImpresiones.innerHTML = `${mascota.solicitudesRecibidas.length} like`: textImpresiones.innerHTML = `${mascota.solicitudesRecibidas.length} likes`;
//         textImpresiones.onclick="#";
        
//         boxImpresiones.appendChild(textImpresiones);
//         descripcionMascotaTarjeta.appendChild(boxImpresiones);
//         tarjetaMascotaCargada.appendChild(boxInfoTarjeta);

//         tablero.appendChild(tarjetaMascotaCargada);
//     }
// }

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