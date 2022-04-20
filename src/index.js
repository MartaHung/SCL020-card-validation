import validator from './validator.js';

//console.log(validator);


let botonvalidar = document.getElementById("botonvalidar");
botonvalidar.addEventListener("click", (event)=>{
  event.preventDefault();
 let numero = document.getElementById("numero").value;
  validator.isValid(numero);
  validator.maskify(numero)
})


