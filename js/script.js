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