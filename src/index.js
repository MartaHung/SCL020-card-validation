import validator from './validator.js';
import {maskify} from './validator.js'; //se destructura maskify

/*console.log(validator); */


let botonvalidar = document.getElementById("botonvalidar");
botonvalidar.addEventListener("click", (event)=>{
  event.preventDefault();
  let numero =  document.getElementById("numero");
    validator(numero);
    maskify(numero);
})


