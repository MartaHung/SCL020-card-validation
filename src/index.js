import validator from './validator.js';

//console.log(validator);

  
let botonvalidar = document.getElementById("botonvalidar");
botonvalidar.addEventListener("click", (event)=>{
  event.preventDefault();
 let numero = document.getElementById("numero").value;
 let numero2= document.getElementById("numero").value;
 validator.isValid(numero);
 
 

 if (validator.isValid(numero) == true){
  alert("¡tarjeta valida!");
  let numero = document.getElementById("numero").type = "text";
  document.getElementById("numero").value = validator.maskify(numero2);

} else {
  alert("tarjeta invalida. ¡Intenta otra vez!");
  document.getElementById("numero").type = "number";
  document.getElementById("numero").value ="";
  }


})



let teclas=  document.getElementById('numero');
teclas.addEventListener('input',function(){
  if (teclas.value.length > 16) 
     teclas.value = teclas.value.slice(0,16); 
     
}
)
