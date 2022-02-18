//Diferença entre Let e Var

/**
 * Utilizando a opção var, é possível redeclarar a variável.
 * Utilizando a opção let, não é possível redeclarar.
 */

//Ex1: Utilizando var

var nome = 'Flávia';
var nome = 'Paty';
console.log(nome); //Aparecerá a segunda opção (Paty)

let nome2 = 'Flávia';
let nome2 = 'Paty'; //Ocorrerá um erro, pois não é possível redeclarar uma variável.
console.log(nome)
