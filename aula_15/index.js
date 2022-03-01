// Utilizando o methodo Math

let num1 = 9.49;
//let num2 = Math.floor(num1); // Floor Arredondar para menos
//let num2 = Math.ceil(num1); //Ceil Arredondar para mais
let num2 = Math.round(num1); //Around Arredondar para inteiro. Se menos da metade, arredonda para menos, se mais da metade arredonda para mais.

console.log(num2);
console.log(Math.max(1, 2, 3, 5, 500, 2000, 700, -5))// Buscar o maior valor
console.log(Math.min(1, 2, 3, 5, 500, 2000, 700, -5))// Buscar o menor valor

//Aleatorio sem especificação
const aleatorio = Math.random(); //Se não especificar, ele busca aleatório entre 0 e 1
console.log(aleatorio);

//Aleatorio arredondando entre numeros de 5 e 10
const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5); //Se não especificar, ele busca aleatório entre 0 e 1
console.log(aleatorio2);

console.log(Math.pow(2, 10)); //Potenciação utilizando Math
//OU
console.log(2 ** 10) // Sem utilizar Math

//Raiz quadrada
let num4 = 25;
console.log(num4 ** (1/2));


