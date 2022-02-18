//Aprendendo constantes

//Regras:

//Não pode declarar uma constante sem inicializá-la
//Não podemos criar constantes com palavras reservadas
//Constantes precisam ter nomes significativos
//Não podemos começar o nome de uma constante com um número
//Não podem conter espaços ou traços 
//Utilizamos camelCase
//Case-sensitive
//Não podemos modificar o valor de uma constante
//Não utilizar var, utilizar LET.
//Não posso modificar uma constante. 

const nome = 'João';
console.log(nome);

//Utilizando constantes com operadores aritiméticos

/**
 * Nos cenários abaixo as constantes não mudam seus valores;
 * Elas podem receber resultados com valores definidos por outras constantes;
 * E o let pode ser redefinido.
 */

const primeiroNumero = 2;
const segundoNumero = 7;
const resultado = primeiroNumero * segundoNumero;
const resultado2 = (resultado * primeiroNumero) + segundoNumero;
let resultado3 = resultado2 * resultado;
resultado3 = resultado3 - resultado2;

console.log(resultado3);

//String = text e Number = número
//Entendendo a tipagem da variável (Se é um numero ou uma string por exemplo)
//Utilizar a função typeoff

const numero = 12;
console.log(typeof numero);

const numero2 = '100';
console.log(typeof numero2);

const numero3 = 100;

console.log(numero + numero2); //Concatenação de numero com string
console.log(numero + numero3); // Soma de dois números.
console.log(numero, numero2,numero); //Exbibição das constantes na tela