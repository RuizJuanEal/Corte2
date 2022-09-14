let nombre = "J.Sebastián";
let name = prompt ("Por favor escriba su nombre");
let age = prompt ("Escriba su edad");
let edadFutura = Number(age) + 10;
let edadPasada = Number(age) - 5;
let edadMult = Number(age) *3;
let edadDob = Number(age) /2;
// let parImpar = 

//alert("Hola");
alert("Hola " + name);
alert(name + " en diez años su edad será: " + edadFutura);
alert(name + " hace cinco años su edad era: " + edadPasada);
alert(name + " el triple de su edad es: " + edadMult);
alert(name + " la mitad de su edad es: " + edadDob);


if (Number(age) == 0){
alert(name + " su edad es: " + "impar");
    }
    else{
        alert(name + " su edad es: " + "par");
    };

if (Number(age) >= 22) {
    alert(name + " usted es mayor de 22 años"); 
    }   
        else{
            alert(name + " usted es menor de 22 años");   
        };
document.write("Escuela de Artes y Letras");
console.log("Martes 13");
document.getElementById("cuadro1").innerHTML = nombre; 