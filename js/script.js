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

//SECCIÓN CONSTÁCTENOS
//Validación datos ingresados al formulario
document.addEventListener("DOMContentLoaded", function() {
    // Traer los datos de entrada
    var nombreInput = document.getElementById("nombre");
    var emailInput = document.getElementsByName("email")[0]; // getElementsByName se trae con el nombre
    var enviarButton = document.getElementById("enviarButton");

    // Validar nombre
    function validarNombre(nombreCompleto) {
        var nombreApellido = nombreCompleto.split(" ");
        return nombreApellido.length === 2 && nombreApellido[0].length >= 3 && nombreApellido[1].length >= 3;
    }

    // Validar email
    function validarEmail(emailValido) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Permit verificar el cuerbo de un correo
        return regex.test(emailValido);
    }

    enviarButton.addEventListener("click", function(event) {
        var nombreCompleto = nombreInput.value.trim();
        var emailValido = emailInput.value.trim();

        // Realizar validación de nombre y correo electrónico
        if (validarNombre(nombreCompleto) && validarEmail(emailValido)) {
            document.querySelector("form").submit();
        } else {
            if (!validarNombre(nombreCompleto)) {
                alert("Ingrese su nombre completo.");
            }
            if (!validarEmail(emailValido)) {
                alert("Ingrese un email valido.");
            }
            event.preventDefault(); // no deja enviar el formulario
        }
    });
});
// FIN SECCIÓN CONSTÁCTENOS
