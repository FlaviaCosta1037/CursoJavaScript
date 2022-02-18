/**
 * Luíz Otávio Miranda tem 30 anos, pesa 84Kg, tem 1.80 altura e seu IMC é de 25.9259259
 * Luíz Otávio nasceu em 1980
 */

const nome = 'Luíz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura); //peso / (altura * altura)
let anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem ', altura, 'de altura e o seu IMC é de ', imc,'.', nome, 'nasceu em ', anoNascimento);