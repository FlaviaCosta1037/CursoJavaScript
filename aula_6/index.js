//Utilizando uma variável 
let nome = 'Julio'; //String

console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome ,  'conheceu maria');
console.log('Maria teve um filho com', nome);
console.log('O filho de' ,nome, 'e Maria se chama Eduardo');

//Utilizando a mesma variável para trocar uma string
let nome2 = 'Flávia';

console.log(nome2); // Saída (Flávia)
nome2 = 'Paty'; //Recebe nova string
console.log(nome2); //Saída Paty

//Regras:

//Não é possível redeclarar variáveis.

//Não podemos criar variáveis com palavras reservadas.
/**
 * * Ex1: let console
 * Ex2: let let 
 * Ex3: let if
 * */

// As variáveis precisam ter nomes significativos. 
/**
 * Ex: let n = João (o que significa n ? qual a relação com João?)
 */

//Não pode iniciar uma variável com um numeral

//O nome das variáveis não podem conter espaços ou traços
/**
 * Ex: nome-Cliente
 * Ex: nome Cliente
 * Deve-se utilizar camelCase Ex: let nomeCompletoDoCliente
 */

//Case-sensitive
/**
 * let nomeCliente = 'Luiz';
 * letnomecliente = 'Otávio';
 * OBS São diferentes
 */

//Não podemos redeclarar variáveis com let.