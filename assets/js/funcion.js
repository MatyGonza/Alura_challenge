const msjEntrada = document.querySelector(".principal-textarea");
const msjSalida = document.querySelector(".secundario-textarea");

function btnEncriptar(){
    const txtEncriptada = encriptar(msjEntrada.value)
    msjSalida.value = txtEncriptada
    msjEntrada.value = "";
    msjSalida.style.backgroundImage = "none";
}


function btnDesencriptar(){
    const txtEncriptada = Desencriptar(msjEntrada.value)
    msjSalida.value = txtEncriptada
    msjEntrada.value = "";
}


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


