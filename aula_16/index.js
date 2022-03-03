// Array

const alunos = ['Luiz,', 'Maria', 'João'];
console.log(alunos.length); //Saber o tamanho do array
alunos[3] = 'Luiza'; //Incluindo um elemento / indice no array alunos

//Incluindo elementos ao final do array sem precisar decorar o tamanho dele.
alunos[alunos.length] = 'Carlos'; 
alunos[alunos.length] = 'Patricia';
alunos[alunos.length] = 'José';

//Função para incluir um elemento no final do array (push)
alunos.push('Tadeu');
alunos.push('Flávia');

//Função para incluir elementos no inicio de um array(unshift)
alunos.unshift('Vera');

console.log(alunos); // Array completo
console.log(alunos[0]); //Acessando o indice 0 = Luiz
console.log(alunos[2]); // Acessando o ultimo indice

alunos[0] = 'Eduardo'; //Trocando o indice

console.log(alunos[0]); // Indice zero virou Eduard0

alunos.pop(); //Retirando o ultimo elemento do array
console.log(alunos); //Retirou Flávia

const removido = alunos.pop(); //Salvando o aluno removido em uma variavel. 
console.log(removido); //Vai aparecer tadeu.

alunos.shift(); //Removendo o primeiro elemento do array
console.log(alunos); //Retirou Eduardo

const removidoInicio = alunos.shift(); //Salvando o aluno removido do inicio em uma variavel.
console.log(removidoInicio); //Luiz

//Deletando um elemento de um array deixando a posição vazia.
const arrayNome = ['Maria', 'José','João'];
delete arrayNome[1]; // Posição 1 do array vazia.
console.log(arrayNome);

//Fatiando um array. Utilizando slice
const arrayNome2 = ['Maria', 'José','João', 'Luiza', 'Pedro'];
console.log(arrayNome2.slice(0, 3)); //Cortando Luiza e Pedro. de 0 a 3
console.log(arrayNome2.slice(0, -2)); //Cortando Luiza e Pedro de trás para frente.




