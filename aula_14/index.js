// Aprendendo com números.

let num1 = 1;
let num2 = 2.5;
console.log(typeof num2); //Type Number
console.log(num1.toString()+num2); //Transformand na impressão o primeiro numero em uma String e concatenando
num1 = num1.toString(); //Transformando e fazendo o numero 1 virar uma string.
console.log(typeof num1); // Type string

//Para saber a representação binária de um numero
let num3 = 1500;
console.log(num3.toString(2)); //10111011100

//Arredondar um número 
let num4 = 15.4345678
console.log(num4.toFixed(2)); //Arredondando com duas casa decimais
console.log(Number.isInteger(num2)); //Função para mostrar se o numero é inteiro. Retornar false or True.


