const prompt = require("prompt-sync")();

let menu = 0;
class  Calculadora {
 sumar(a, b) {
    return a + b
 }
 restar(a, b) {
    return a - b
 }
  multiplicar(a, b) {
    return a * b
 }
 dividir(a, b) {
    if (b === 0){
        throw new error ("no se puede dividir por 0");
    }
    return a / b;
 }
}
const calculadora = new Calculadora();
let num1, num2;
while (menu != 5) {
    console.log ("[1] sumar");
    console.log ("[2] restar");
    console.log ("[3] multiplicar");
    console.log ("[4] dividir");
    console.log ("[5] salir");
    menu = Number(prompt("ingrese una opcion: "));

    switch (menu) {
         case 1:
            console.log("\nSuma");
            num1 = Number(prompt("ingrese el primer numero: "));
            num2 = Number(prompt("ingrese el segundo numero: "));

            console.log("resultado: " + calculadora.sumar(num1, num2));
            break;

         case 2:
            console.log("\nResta");
            num1 = Number(prompt("ingrese el primer numero: "));
            num2 = Number(prompt("ingrese el segundo numero: "));

            console.log("resultado: " + calculadora.restar(num1, num2));
            break;

         case 3:
            console.log("\nMultiplicacion");
            num1 = Number(prompt("ingrese el primer numero: "));
            num2 = Number(prompt("ingrese el segundo numero: "));

            console.log("resultado: " + calculadora.multiplicar(num1, num2));
            break;

         case 4:
            console.log("\nDivision");
            num1 = Number(prompt("ingrese el primer numero: "));
            num2 = Number(prompt("ingrese el segundo numero: "));
           try {
            console.log("resultado: " + calculadora.dividir(num1, num2));
           } catch (error){
            console.log("error: no se peude dividir por 0 "+ error.message);
           }
            break;
         case 5:

            break;

        default:
            console.log("opcion invalida");
            break;
    }

}