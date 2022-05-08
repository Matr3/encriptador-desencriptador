
//Funciones Para Cambio del Codigo Css
function originalCss() {
    document.querySelector(".position").style.display = "block";
    document.querySelector(".position-2").style.display = "none";
    document.querySelector(".texto-encriptado").style.fontSize = "16px";
    document.querySelector(".texto-encriptado").style.textAlign = "center";
    document.querySelector(".positionText").style.display = "block";
}

function modificarCss(){
    document.querySelector(".position").style.display = "none";
    document.querySelector(".position-2").style.display = "block";
    document.querySelector(".texto-encriptado").style.fontSize = "24px";
    document.querySelector(".texto-encriptado").style.textAlign = "left";
    document.querySelector(".positionText").style.display = "none";

}

//Funcion Para Separacion de texto y Convertido en Array
function separarLetras(text){
    var listado = Array.from(text);
    return listado;
}

//Funcion Para Verificar la Condicion y La Codificacion
function verificarMinuscula(letras){
    var mayusculas = Array.from("AÁáBCDEÉFGHIÍíJKLMNOÓóPQRSTUÚúVWXYZ");
    var errorMsj = Array.from("Ingresa el texto que desees encriptar o desencriptar.");
    var activo = false;
    var mensajeEncriptado = [];
    
    for (let u = 0; u < mayusculas.length; u++){
        for (let x = 0; x < letras.length; x++){
            if(letras[x] == mayusculas[u]){
            /*alert("Solo letras ninúsculas y sin acentos!");*/
            originalCss();
            activo = true;
            mensajeEncriptado = errorMsj;
            return mensajeEncriptado;
            }                     
        }
    }
    if(activo==false){   
        activo = false;
        for (let i = 0; i < letras.length; i++) {
            var comparacion = letras[i];
            if (comparacion == "e") {
                letras[i] = "enter";
                mensajeEncriptado.push(letras[i]);
            } else if (comparacion == "i"){
                letras[i] = "imes";
                mensajeEncriptado.push(letras[i]);
            }else if (comparacion == "a"){
                letras[i] = "ai";
                mensajeEncriptado.push(letras[i]);
            }else if (comparacion == "o"){
                letras[i] = "ober";
                mensajeEncriptado.push(letras[i]);
            }else if (comparacion == "u"){
                letras[i] = "ufat";
                mensajeEncriptado.push(letras[i]);
            } else {
            mensajeEncriptado.push(letras[i]);
            }    
        }
        modificarCss();
    }
    return mensajeEncriptado;
     
}

//Funcion para Desencriptacion
function desencriptarTexto(mensaje){
    var rpl = mensaje;
    var mensajeDesencriptado = rpl.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");

    modificarCss();
    return mensajeDesencriptado;
        
}

//Boton para Capturar texto para la Encriptacion del Texto
var btEncriptar = document.querySelector("#encriptar");
    
btEncriptar.addEventListener("click", function(codificacion){
        codificacion.preventDefault();
        var mensaje = document.querySelector("#mensaje").value;
        if (mensaje != "") {
            var letras = separarLetras(mensaje);
            var minusculas = verificarMinuscula(letras);
            var mensajeEncriptado = document.querySelector("#textdesencriptado");
            mensajeEncriptado.textContent = minusculas.join("");
        }
});


//Boton para Capturar texto para la Desencriptacion del Texto
var btDesencriptar = document.querySelector("#desencriptar");

btDesencriptar.addEventListener("click", function(codificacion2){
    codificacion2.preventDefault();
    var mensaje = document.querySelector("#mensaje").value;
    if (mensaje != "") {
        var texto = desencriptarTexto(mensaje);
        var mensajeDesencriptado = document.querySelector("#textdesencriptado");
        mensajeDesencriptado.textContent = texto;
    }
});

//Boton para Copiar texto del desencriptador
function copy() {
    let textarea = document.getElementById("textdesencriptado");
    textarea.select();
    document.execCommand("copy");
    alert("Copiado Exitoso");
  }
  




