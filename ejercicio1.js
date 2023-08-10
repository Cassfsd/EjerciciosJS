// Programa que pida dos números y que nos diga cuál es el mayor, el menor y si son iguales. 

//Creo la función para comparar esos números. 
function compareNumbers () {

    let num1 = parseFloat(prompt("Ingrese el primer número"));
    let num2 = parseFloat(prompt("Ingrese el segundo número"));

    //Verifico los datos ingresados y si no son válidos, me pide que los ingrese de nuevo. 
     while (isNaN(num1) || isNaN(num2)) {
     num1 = parseFloat(prompt("Ingrese el primer número"));
    num2 = parseFloat(prompt("Ingrese el segundo número"));
     if (isNaN(num1) || isNaN(num2)) {
       alert("Por favor ingrese 2 números válidos");
     }
   }

  //Si los números no son un número, o son iguales o menores a 0, no los vuelva a pedir. 
  if (isNaN(num1) <=0  || isNaN(num2)  <=0 ) {
    alert ("Los números no son válidos");
    return //el return acá permite finalizar la función en caso de que alguno de los números no sean válidos. 
}
}
compareNumbers();

    //Determinar el número mayor y menor 
    let mayor, menor;
     if (num1<num2){
     menor = num1;
     mayor= num2;
    alert ("El número " + menor + " es menor" );
    alert("El número mayor es: " + mayor + "\nEl número menor es: " + menor);
     }
     else if (num1>num2){
        mayor = num1;
        menor= num2;
     alert ("El número " + mayor + " es mayor" );
     alert("El número mayor es: " + mayor + "\nEl número menor es: " + menor);
    } // \n es para salto de línea
    else {
         alert ("Ambos números son iguales");
        return;    }
  
 compareNumbers();


