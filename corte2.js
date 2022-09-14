let nombre = "J.Sebastián";
let name = prompt ("Por favor escriba su nombre");
let age = prompt ("Escriba su edad");
let edadFutura = Number(age) + 10;
let edadPasada = Number(age) - 5;
let edadMult = Number(age) *3;
let edadDob = Number(age) /2;

//alert("Hola");
alert("Hola " + name);
alert( name + " en diez años su edad será: " + edadFutura);
alert(name + " hace cinco años su edad era: " + edadPasada);
alert("El triple de su edad es: " + edadMult);
alert("La mitad de su edad es: " + edadDob);
document.write("Escuela de Artes y Letras");
console.log("Martes 13");
document.getElementById("cuadro1").innerHTML = nombre;