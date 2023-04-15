// Obtener los elementos del DOM necesarios
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const textoEntrada = document.getElementById("texto-entrada");
const areaTextoSalida = document.querySelector(".area-texto-salida");
const notFound = document.getElementById("notFound");
const resultado = document.getElementById("resultado");

// Función para mostrar el mensaje de "No encontrado"
function mostrarNotFound() {
    resultado.style.display= "none";
    notFound.style.display = "block";
}

// Función para encriptar la cadena de caracteres
function encriptar(cadena) {
  cadena = cadena.replace(/e/g, "enter");
  cadena = cadena.replace(/i/g, "imes");
  cadena = cadena.replace(/a/g, "ai");
  cadena = cadena.replace(/o/g, "ober");
  cadena = cadena.replace(/u/g, "ufat");
  return cadena;
}

// Función para desencriptar la cadena de caracteres
function desencriptar(cadena) {
  cadena = cadena.replace(/enter/g, "e");
  cadena = cadena.replace(/imes/g, "i");
  cadena = cadena.replace(/ai/g, "a");
  cadena = cadena.replace(/ober/g, "o");
  cadena = cadena.replace(/ufat/g, "u");
  return cadena;
}

function copiarTexto() {
    const texto = document.getElementById("texto-salida");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
  }  

// Evento de clic en el botón "Encriptar"
btnEncriptar.addEventListener("click", () => {
  const texto = textoEntrada.value;
  if (texto.trim() !== "") {
    const textoEncriptado = encriptar(texto);

    const textoSalida = document.getElementById("texto-salida");
    const btnCopiar = document.getElementById("btn-copiar");
    
    textoSalida.value = textoEncriptado;
    notFound.style.display = "none";
    btnCopiar.addEventListener("click", copiarTexto);
    resultado.style.display = "flex";
  } else {
    mostrarNotFound();
  }
});

// Evento de clic en el botón "Desencriptar"
btnDesencriptar.addEventListener("click", () => {
  const texto = textoEntrada.value;
  if (texto.trim() !== "") {
    const textoDesencriptado = desencriptar(texto);
    
    const textoSalida = document.getElementById("texto-salida");
    const btnCopiar = document.getElementById("btn-copiar");

    textoSalida.value = textoDesencriptado;
    notFound.style.display = "none";
    btnCopiar.addEventListener("click", copiarTexto);
    resultado.style.display = "flex";
  } else {
    mostrarNotFound();
  }
});
