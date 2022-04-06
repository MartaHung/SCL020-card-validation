let botonvalidar = document.getElementById("botonvalidar");

var tarjeta = document.getElementById("numeroTarjeta")

if (number(tarjeta)=1) {
    botonvalidar.addEventListener("click", incorrecto);
} else {
    botonvalidar.addEventListener("click", correcto);
}


function incorrecto() {
    alert("incorrecto")}

function correcto() {
    alert("correcto")}
