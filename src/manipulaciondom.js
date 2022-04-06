let botonvalidar = document.getElementById("botonvalidar");

botonvalidar.addEventListener("click", validar);





function validar() {
    var tarjeta = document.getElementById("numeroTarjeta").value

    if (tarjeta==1){
        alert("correctooooo");
    } else {
        alert("buuuuuu");
    }
}