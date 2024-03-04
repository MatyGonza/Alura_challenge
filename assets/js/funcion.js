const msjEntrada = document.querySelector('#texto');
const msjSalida = document.querySelector(".secundario-textarea");



const mensaje = "";
function validarTexto(e) {
    let nuevoTexto = e.target.value;
    nuevoTexto = nuevoTexto.replace(/[áéíóúüÁÉÍÓÚÜ]/g, ''); // Eliminar acentos
    nuevoTexto = nuevoTexto.toLowerCase(); // Convertir a minúsculas

  // Permitir espacios
    nuevoTexto = nuevoTexto.replace(/[^a-z ]/g, '');

  // Actualizar el valor del textarea
    e.target.value = nuevoTexto;
    mensaje = nuevoTexto;

}

msjEntrada.addEventListener('input', validarTexto);


function btnEncriptar(){
    const txtEncriptada = encriptar(msjEntrada.value)
    msjSalida.value = txtEncriptada
    msjEntrada.value = "";
    msjSalida.style.backgroundImage = "none";
    document.querySelector(".myP2").style.visibility = "hidden";

}


function btnDesencriptar(){
    const txtEncriptada = Desencriptar(msjEntrada.value)
    msjSalida.value = txtEncriptada
    msjEntrada.value = "";
    
    msjSalida.style.backgroundImage = "none";
    document.querySelector(".myP2").style.visibility = "hidden";
}

function btnCopiar(){

    let copyText = document.querySelector(".secundario-textarea")
    copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);
    alert("El texto copiado:" + copyText.value);

}



/*
S

msjEntrada.addEventListener("input", () => {

    const nombre = msjEntrada.value;
    const regex = /^[a-z]+$/;

    if (!regex.test(nombre)) {
    msjEntrada.classList.add("error");
    msjEntrada.setCustomValidity("Solo se permiten letras minúsculas");
    } else {
    msjEntrada.classList.remove("error");
    msjEntrada.setCustomValidity("");
    }
});
 */

function encriptar(inputTxtEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    inputTxtEncriptada = inputTxtEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(inputTxtEncriptada.includes(matrizCodigo[i][0])){
            inputTxtEncriptada = inputTxtEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }
    }
    return inputTxtEncriptada
} 


function Desencriptar(inputTxtDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    inputTxtDesencriptada = inputTxtDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(inputTxtDesencriptada.includes(matrizCodigo[i][1])){
            inputTxtDesencriptada = inputTxtDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

        }
    }
    return inputTxtDesencriptada
} 


