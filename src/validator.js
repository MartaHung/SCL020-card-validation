



/*let botonvalidar = document.getElementById("botonvalidar");

botonvalidar.addEventListener("click", validator);*/
function validator (cardnumber) {
 

  
  // Aqui escribir funcion de validacion

  let suma_tarjeta = 0; // contador de suma elementos tarjeta con condiciones
  let indice = 16; // contador de indice de elementos de tarjeta, reverso
  
  while (tarjeta > 0) { 


 


     let digito_tarjeta = tarjeta%10;

    if (indice%2==0){ //par
      suma_tarjeta = suma_tarjeta + digito_tarjeta;
    } else if (2*digito_tarjeta<10) { //impar de un digito
      suma_tarjeta = suma_tarjeta + 2*digito_tarjeta;
    } else { //impar de dos digitos
      suma_tarjeta = suma_tarjeta + Math.trunc((2*digito_tarjeta)/10) + (2*digito_tarjeta)%10;
    }



    indice = indice - 1;  //resto un numero para poder pasar al siguiente 

    tarjeta = Math.trunc(tarjeta / 10); 
  }
    // condicion final
  if (suma_tarjeta%10==0){
      alert("tarjeta valida");
  } else {

      alert("tarjeta invalida ¡intenta otra vez!");
  } 
}

       document.getElementById('numero').value=""
      alert("tarjeta invalida ¡intenta otra vez!");
  } 
}

/*maskify: function (cardnumber)=>{
  
  let doceDigitos = numero.slice(0,-4);
  let ultimosDigitos= numero.slice(-4);
  let enmascararDigitos = doceDigitos.replace(/./g, "#") + ultimosDigitos;
  document.getElementById('numero').value=enmascararDigitos;
  return enmascararDigitos;
}

};*/
export default validator; 


