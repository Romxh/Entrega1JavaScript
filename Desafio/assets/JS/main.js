//EJERCICIO 1
let ingresarNumero = parseInt(prompt("¡Hola! Ingrese un numero:"));
for(let i = ingresarNumero ; i < 10 ; i++){
    let resultado = ingresarNumero + i ;
    alert(ingresarNumero +" + "+ i +" = "+ resultado);
}
console.log("Fin")

//EJERCICIO 2
let ingresePalabra = prompt("¡Hola! Ingrese una palabra:")
while(ingresePalabra != "ESC" ){
alert("Ingresaste "+ ingresePalabra);
ingresePalabra = prompt("Ingrese otra palabra. Tipea ESC para finalizar el ciclo.");
}
console.log("Fin")

//EJERCICIO 3
let ingreseotronumero = prompt("¡Hola! Ingrese un numero:")
let i = ingreseotronumero;
while(i) alert("Hola") * i--;