/**
 * Luíz Otávio Miranda tem 30 anos, pesa 84Kg, tem 1.80 altura e seu IMC é de 25.9259259
 * Luíz Otávio nasceu em 1980
 */

const nome = 'Luíz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmMetro = 1.80;
let imc = peso / (alturaEmMetro * alturaEmMetro); //peso / (altura * altura)
let anoNascimento = 2022 - idade;

// 3 formas de imprimir o texto:

console.log(nome, sobrenome, 'tem', idade, 'anos');  
console.log('Seu peso é ' + '' +  peso + ' kg e tem ' + '' + alturaEmMetro + ' de altura');
console.log(`O seu imc é de ${imc} nome nasceu em ${anoNascimento}`); //Forma mais sofisticada. Utiliza-se a crase.