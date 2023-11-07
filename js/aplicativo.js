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


let mewoofDB = JSON.parse(localStorage.getItem('mewoofDB'));
let usuarioSesion = mewoofDB.usuarioSesion;
// let apiUserController;

document.addEventListener('DOMContentLoaded', () => {
    Swal.fire(
        {
        icon: "success",
        title: "Acceso Exitoso",
        confirmButtonColor: "#F7ABB2",
        showConfirmButton: false,
        // toast: true,
        // grow: 'fullscreen',
        timer: '1900',
        padding: '10%'
        }
      );
})

// function fetchAPI(url) {

//     fetch (url, {method: 'GET'})
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.filter(x=>x.especie.id===1));
//         return data;
//     })
// }



console.log(usuarioSesion);
window.onload  = iniciar();


function iniciar () {
    mewoofDB = JSON.parse(localStorage.getItem('mewoofDB'));
    seccionHome.style.display="flex";
     
}
//     // mewoofDB = JSON.parse(localStorage.getItem('mewoofDB'));
//     // usuarioSesion = mewoofDB.usuarioSesion;
//     // alert(mewoofDB.usuarioSesion.email)
//     // alert(`http://localhost:8080/usuarios/email?email=${mewoofDB.usuarioSesion.email}`)
//     // apiUserController = fetchAPI(`http://localhost:8080/usuarios/email?email=${mewoofDB.usuarioSesion.email}`)
    
//     // setUsuarioSesion(usuarioSesion);
    
//     // alert("Cargando Entorno..")
//     // setUsuarioSesion(mewoofDB.usuarioSesion);
//     // mewoofDB.usuarioSesion = usuarioSesion;
//     // saveLocaStorage();
//     // usuarioSesion.mascotasCargadas = mewoofDB.usuarioSesion.mascotasCargadas;
// }


// function setUsuarioSesion (usuario) {
//     alert("GENERANDO USUARIO")
    
//     usuario.tipo.nombre === 'Entregando' 
//     ? usuarioSesion = new Entregando(usuario.nombre, usuario.apellido, usuario.pais, usuario.ciudad, usuario.id, usuario.cel, usuario.email, usuario.password, usuario.tipo )
//     : usuarioSesion = new Adoptante(usuario.nombre, usuario.apellido, usuario.pais, usuario.ciudad, usuario.id, usuario.cel, usuario.email, usuario.password, usuario.tipo );
    
//     console.log(usuarioSesion);
// }


///***********************************************///
// MODELADO DE OBJETOS

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


navBotonPerfil.addEventListener('click', () => {
  ocultarSecciones();
  seccionPerfilUser.style.display="flex";
})


navBotonMatch.addEventListener('click', () => {
    ocultarSecciones();
    usuarioSesion.tipo.nombre === "Adoptante"?
    seccionMatchPreferences.style.display="flex":
    seccionMatchHuman.style.display="flex";
})

navBotonChat.addEventListener('click', () => {
    ocultarSecciones();
    seccionChat.style.display="flex";
})

navBotonSolicitudes.addEventListener('click', () => {
    ocultarSecciones();

    usuarioSesion.tipo.nombre === "Entregando" ? seccionMisMascotas.style.display="flex": seccionSolicitudes.style.display="flex";
    
    if (usuarioSesion.tipo.nombre === "Entregando") {
        renderizarSolicitudes(mewoofDB.usuarios.lista[findUser(usuarioSesion)].mascotasCargadas);
    }
})

navBotonHome.addEventListener('click', () => {
    ocultarSecciones();
    seccionHome.style.display="flex";
})
// FIN FUNCIONES NAV BAR

// FUNCIONES GENERALES





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
inputCelular.value = usuarioSesion.telefono;
inputPais.value = usuarioSesion.pais.id;
inputCiudad.value = usuarioSesion.ciudad.id;
inputEmail.value =usuarioSesion.email;


mewoofDB.usuarioSesion.about === "AboutMe" ? inputAbout.value = mensajePerfil(usuarioSesion) : inputAbout.value = inputAbout.value = mewoofDB.usuarioSesion.about;
// inputInteres.value = usuarioSesion.intereses;

function mensajePerfil(usuario) {
    return `Hola, soy ${usuario.nombre} ${usuario.apellido}, vivo en ${usuario.ciudad.nombre}, ${usuario.pais.nombre} y soy amante de los animales`
} 

// FALTA QUE ENVIE A BDDDDDDDDDDDDD
botonGuardarCambiosPerfil.addEventListener('click', () => {
    let perfilCambio = mewoofDB.usuarioSesion;

    perfilCambio.nombre = inputNombre.value;
    perfilCambio.apellido = inputApellido.value;
    perfilCambio.telefono = inputCelular.value;
    perfilCambio.pais.id = inputPais.value;
    perfilCambio.pais.nombre = inputPais.innerHTML;
    perfilCambio.ciudad.id = inputCiudad.value;
    perfilCambio.ciudad.nombre = inputCiudad.innerHTML;
    perfilCambio.email = inputEmail.value;
    perfilCambio.about = inputAbout.value;
    perfilCambio.id = mewoofDB.usuarioSesion.id;
    perfilCambio.password = mewoofDB.usuarioSesion.password;
    perfilCambio.tipo.id = mewoofDB.usuarioSesion.tipo.id;
    perfilCambio.tipo.nombre = mewoofDB.usuarioSesion.tipo.nombre;
    saveLocaStorage();

    console.log(mewoofDB.usuarioSesion);

    let url = "http://localhost:8080/usuarios/actualizarUsuario"

    fetch(url, {
        method: 'PUT',
        // headers: {
        //     'Content-Type' : 'application/json'
        // },
        body: mewoofDB.usuarioSesion
    })
    .then((response) => {
        if(!response.ok){
            throw new Error('La solicitud no se completó correctamente.');
        }
        return response.json(); // Analiza la respuesta como JSON
    } )
    .then((data)=>{
        console.log('Respuesta del servidor:', data);
    })
    .catch((error) => {
        console.error('Error al actualizar el usuario:', error);
    });

    Swal.fire(
        {
        icon: "success",
        title: "Información Actualizada con Éxito",
        confirmButtonColor: "#F7ABB2",
        showConfirmButton: false,
        // width: '40%',
        padding:'10%',
        timer: '1500',
        customClass:{
            container: 'SwalResponsive'
        }
        // toast: true,
        // grow: 'fullscreen',
        }
      );

})

botonCambiarPassword.addEventListener('click', () => {
    // seccionCambiarPassword.style.right="0%";
    // document.getElementById("mw-profile-content_user").style
    Swal.fire({
        icon: 'warning',
        title: 'Cambiar Contraseña',
        grow: 'column',
        confirmButtonText: 'Guardar Contraseña',
        confirmButtonColor: '#F7ABB2',
        showCloseButton: true,
        html: '<div><input type="password" id="swalCurrentPassword" class="swalPasswordChange" placeholder="Contraseña Actual"><input type="password" id="swalCurrentPassword" class="swalPasswordChange" placeholder="Nueva Contraseña"><input type="password" id="swalCurrentPassword" class="swalPasswordChange" placeholder="Repetir Nueva Contraseña"></div>',

    })
})

botonCerrarPassword.addEventListener('click', () => {
    seccionCambiarPassword.style.right="350%";
})

botonGuardarPassword.addEventListener('click', () => {
    
    console.log(`UsuarioSesion: ${usuarioSesion.password} - tipo: ${typeof(usuarioSesion.password)}`)
    console.log(`contraseña anterior input: ${inputLastPassword.value} - tipo: ${typeof(inputLastPassword.value)}`)
    console.log(` nueva contraseña: ${inputNewPassword.value} - tipo: ${typeof(inputNewPassword.value)}`);
    console.log(` confirmar contraseña: ${inputConfirmPassword.value} - tipo: ${typeof(inputConfirmPassword.value)}`);
    console.log(`boolean compare: ${inputLastPassword.value == usuarioSesion.password} - bollean extrict: ${inputLastPassword.value === usuarioSesion.password}`)
    if (usuarioSesion.password === inputLastPassword.value){
        
        let user= mewoofDB.usuarioSesion
        user.password = inputNewPassword.value;
        Swal.fire(
            {
            icon: "success",
            title: "Contraseña Actualizada con Éxito",
            confirmButtonColor: "#F7ABB2",
            showConfirmButton: false,
            // width:'40%',
            padding: '10%',
            timer: '1500',
            customClass:{
                pupup: 'SwalResponsive'
            }
            // toast: true,
            // grow: 'fullscreen',
            }
        );
        seccionCambiarPassword.style.right="150%";
        saveLocaStorage();
    }
})
// FIN FUNCIONES PERFIL


// INICIO SECCION PREFERENCES

//BOTONES DE SELECCION GATO, PERRO O AMBOS
const botonPreferencesCat = document.getElementById("mw-preferencesMew");
const botonPreferencesDog = document.getElementById("mw-preferencesWoof");
const botonPreferencesCatDog = document.getElementById("mw-preferencesMewoof");
const inputEspacioDisponible = document.getElementById("mw-preferenceMascotaNeedsSpace")
const inputTiempoDisponible = document.getElementById("mw-preferencesMascotaNeedsTime")
const inputDineroDisponible = document.getElementById("mw-preferencesMascotaNeedsMoney")
const imgVariableTarjetaMascota = document.getElementById("mw-mascotaCardImg");



botonPreferencesCat.addEventListener('click', () => {
    ocultarSecciones();
    seccionMatch.style.display="flex";
    imgVariableTarjetaMascota.src = "../img/exi-3-op.jpg"
    // let petForMatch  = traerMascotas(1,inputEspacioDisponible.value,inputTiempoDisponible.value, inputDineroDisponible.value)
    let petForMatch  = traerMascotas(1)
    console.log(petForMatch);
})

botonPreferencesDog.addEventListener('click', () => {
    ocultarSecciones();
    seccionMatch.style.display="flex";
    imgVariableTarjetaMascota.src = "../img/banner2.png"
    // let petForMatch  = traerMascotas(2,inputEspacioDisponible.value,inputTiempoDisponible.value, inputDineroDisponible.value)
    let petForMatch  = traerMascotas(2)
    console.log(petForMatch);
    
})

botonPreferencesCatDog.addEventListener('click', () => {
    ocultarSecciones();
    seccionMatch.style.display="flex";
    imgVariableTarjetaMascota.src = "../img/perrito1.jpg"
    // let petForMatch  = traerMascotas(inputEspacioDisponible.value,inputTiempoDisponible.value, inputDineroDisponible.value)
    let petForMatch  = traerMascotas(0)
    console.log(petForMatch);
})


// function traerMascotas (especie,espacio,tiempo,dinero) {
function traerMascotas (especie) {
    url = "http://localhost:8080/mascotas"

    // let listaMascotas = JSON.parse(fetchAPI(url));

    fetch (url, {method: 'GET'})
        .then(response => response.json())
        .then(data => {

            if (especie === 0) {
                console.log(data);
                return data
            } else {
                console.log(data.filter(x=>x.especie.id===especie));
                return data.filter(x=>x.especie.id===especie);
            }
        })
    
}

// console.log(`prueba ${traerMascotas(0)}`);

// FIN SECCION PREFERENCES

// INICIO SECCION MATCHES

// FIN SECCION MATCHES


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
    
    let url = "http://localhost:8080/mascotas";

    let newMascota = {
        "nombre": "Fifi",
        "edad": 2,
        "especie": {
            "id": 2,
            "especie": "Caninos"
        },
        "raza": {
            "id": 1,
            "especie": {
                "id": 2,
                "especie": "Caninos"
            },
            "raza": "Beagle"
        },
        "size": {
            "id": 2,
            "nombre": "Pequeño",
            "dimensionMaximaCm": 40
        },
        "usuario": usuarioSesion, // REIVSAR SI FUNCIONA ASI
        "estadoSalud": {
            "id": 1,
            "estado": "Optimo"
        },
        "estadoAdopcion": {
            "id": 1,
            "estado": "En Adopcion"
        }
    }; 

    fetch(url, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMascota)
        }
    )
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ('Error al crear el usuario')
        }
        })
        .then(data => {
        // Maneja los datos de la respuesta aquí
        console.log('Mascota creada:', data);
        })
        .catch(error => {
        // Maneja cualquier error que pueda ocurrir durante la solicitud
        console.error('Error:', error);
        });

    console.log(mascotasController);

    // usuarioSesion.agregarMascota(usuarioSesion, formularioRaza.value, formularioSize.value,formularioNombre.value, formularioEdad.value, formularioSalud.value);
    Swal.fire(
        {
        icon: "success",
        title: "Mascota Creada con Éxito",
        confirmButtonColor: "#F7ABB2",
        showConfirmButton: false,
        width: '40%',
        padding:'10%',
        timer: '1500'
        // toast: true,
        // grow: 'fullscreen',
        }
      );

    seccionPanelMascota.style.display="none"
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
    validacionRegister(mwRegisterNecesidades);

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