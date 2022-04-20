import validator from './validator.js';
import {maskify} from './validator.js';

/*console.log(validator); */


let botonvalidar = document.getElementById("botonvalidar");
botonvalidar.addEventListener("click", (event)=>{
  event.preventDefault();
  let numero =  document.getElementById("numero");
    validator(numero);
    maskify(numero);
})


