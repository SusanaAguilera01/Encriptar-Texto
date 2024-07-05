const btnCopy = document.querySelector(".but_copiar");
const respuesta = document.querySelector(".tex_res")

function encriptarTexto(){
    let texto_usuario = document.getElementById("textoUsuario").value;
    condicionesIniciales();

    if (texto_usuario.length != 0){
        let mayus = verificarMayus(texto_usuario);
        console.log(mayus);
        let acent = verificarAcento(texto_usuario);
        console.log(acent);

        if ((mayus == false) || (acent == false)){
            condicionesIniciales();
            asignarTextoElemento("h2", `Error`);
            asignarTextoElemento("h4", `Ingresa un texto que no contenga mayúsculas y/o acento`);
            limpiarCaja();
        }
        else{
            let text_encriptado = encriptar(texto_usuario);
            let respuesta = document.querySelector(".tex_res")
            respuesta.innerHTML = text_encriptado;
        }     
    }
    else{
        condicionesIniciales();
    }
}

function desencriptarTexto() {
    let texto_usuario = document.getElementById("textoUsuario").value;
    condicionesIniciales();

    if (texto_usuario.length != 0){
        let mayus = verificarMayus(texto_usuario);
        console.log(mayus);
        let acent = verificarAcento(texto_usuario);
        console.log(acent);

        if ((mayus == false) || (acent == false)){
            condicionesIniciales();
            asignarTextoElemento("h2", `Error`);
            asignarTextoElemento("h3", `Ingresa un texto que no contenga mayúsculas y/o acento`);
            limpiarCaja();
        }
        else{
            let text_desencriptado = desencriptar(texto_usuario);
            let respuesta = document.querySelector(".tex_res")
            respuesta.innerHTML = text_desencriptado; 
        }     
    }
    else{
        condicionesIniciales();
    }
    
}

function verificarMayus(texto){
    for (let i = 0; i < texto.length; i++) {
        if ((texto[i].toUpperCase() === texto[i]) && (texto[i] != " ")){
            return false
        } 
    }
    return true         
}    

function verificarAcento(texto){
    for (let i = 0; i < texto.length; i++) { 
        if ((texto[i] == "á") || (texto[i] == "é") || (texto[i] == "í") || (texto[i] == "ó") || (texto[i] == "ú") || (texto[i] == "Á") || (texto[i] == "Á") || (texto[i] == "Í") || (texto[i] == "Ó") || (texto[i] == "Ú")){
            limpiarCaja();
            return false
        }         
    }
    return true    
}

function encriptar(texto){
    document.getElementById('figura').style.display = "none";
    document.getElementById('texto1').style.display = "none";
    document.getElementById('texto2').style.display = "none";
    document.getElementById('copy').style.display = "block";

    let result = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    return result        
}

function desencriptar(texto) {
    document.getElementById('figura').style.display = "none";
    document.getElementById('texto1').style.display = "none";
    document.getElementById('texto2').style.display = "none";
    document.getElementById('copy').style.display = "block";

    let result = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    return result 
}

btnCopy.addEventListener("click", e=>{
    e.preventDefault();

    let copiar = respuesta;
    copiar.select();
    
    document.execCommand("copy");

})


function condicionesIniciales() {
    asignarTextoElemento('textarea', "");
    document.getElementById('texto1').style.display = "block";
    document.getElementById('texto2').style.display = "block";
    document.getElementById('copy').style.display = "none";
    
}

function limpiarCaja(){
    document.querySelector('#textoUsuario').value = '';
}

function asignarTextoElemento(elemento, texto){
    document.querySelector(elemento).innerHTML = texto;
}
