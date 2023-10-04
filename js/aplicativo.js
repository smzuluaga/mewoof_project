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