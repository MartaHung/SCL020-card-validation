let botonvalidar = document.getElementById("botonvalidar");

var tarjeta = document.getElementById("numeroTarjeta")

if (numeroTarjeta = 10) {
    botonvalidar.addEventListener("click", incorrecto);
} else {
    botonvalidar.addEventListener("click", correcto);
}


function incorrecto() {
    alert("incorrecto")}

function correcto() {
    alert("correcto")}
    window.location="index.html";
