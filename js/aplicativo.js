// let listaDeOjetos = [];
// const objeto = {};

// let divAddObjects = document.getElementById("like");

// function addObjectsToList(){
//     const nombreH3 = document.querySelector(".card__title");

//     const descripcionPerrito = document.querySelector(".card__copy");

//     const rutaImagenPerrito = document.querySelector(".card__img")

//     const imagePerrito = rutaImagenPerrito.src;
    
//     objeto.rutaImagen = imagePerrito;
    
//     const nombreTexto = nombreH3.textContent.trim();
    

//     let nombreGuardar = nombreTexto.split(' ');

//     for(caracter of nombreTexto){
//         if(!isNaN(caracter) && caracter != ' '){
//             objeto.edad = parseInt(caracter)
//         } else {
//             objeto.nombre = nombreGuardar[0]
//         }
//     }

//     const descripcionTexto = descripcionPerrito.textContent.trim();

//     objeto.descripcion = descripcionTexto
    

//     listaDeOjetos.push(objeto)
//     console.log(listaDeOjetos)  

// }

// divAddObjects.addEventListener("click", addObjectsToList);


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

// FUNCIONES

window.onload  = iniciar();

function iniciar () {
    alert("Iniciando")
    mewoofDB = JSON.parse(localStorage.getItem('mewoofDB'));
    setUsuarioSesion(mewoofDB.usuarioSesion);
    mewoofDB.usuarioSesion = mewoofDB.usuarios.lista.find( x => x.email === usuarioSesion.email)
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

