import validator from './validator.js';
/*console.log(validator); */

let botonvalidar = document.getElementById("botonvalidar");

botonvalidar.addEventListener("click", ()=> {

    let tarjeta = document.getElementById("numero").value;
    validator(numero);
}

);




/*let maskify_pant = document.getElementById("botonvalidar");

maskify_pant.addEventListener("click", maskify);
let numero =  document.getElementById("numero").value;
maskify(numero); //*/