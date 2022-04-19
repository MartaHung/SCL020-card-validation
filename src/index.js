import {validator, maskify}  from './validator.js';
/*console.log(validator); */
let numero ="";

let botonvalidar = document.getElementById("botonvalidar");
botonvalidar.addEventListener("click", ()=>{
   numero =  document.getElementById("numero").value;
    validator(numero);
    maskify(numero);
})

