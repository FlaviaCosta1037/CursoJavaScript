//Object

//Para criar um objeto tem que criar dentro de chaves { }

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}
//acessando um atributo do objeto acima
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//Criando função para um objeto

/*Primeiro formato */

// function criaPessoa(nome, sobrenome, idade){ // nome, sobrenome e idade (parametro)
//     return {
//         
//         // nome: nome,
//         // sobrenome: sobrenome,
//         // idade: idade    
//     }
// };

//2º formato:

function criaPessoa(nome, sobrenome, idade){ // nome, sobrenome e idade (parametro)
    return {nome, sobrenome, idade};
};

const pessoa2 = criaPessoa('Flávia', 'Costa', 35); //Flavia, Costa, 35 (argumento que é passado para o parametro)
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

const pessoa3 = criaPessoa('Maria', 'Moreira', 50);
const pessoa4 = criaPessoa('João', 'Carambola', 45);
const pessoa5 = criaPessoa('Junior', 'Freitas', 69);

console.log(pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);
console.log(pessoa2.sobrenome, pessoa3.sobrenome, pessoa4.sobrenome, pessoa5.sobrenome);
console.log(pessoa2.idade, pessoa3.idade, pessoa4.idade, pessoa5.idade);


//Criando um metodo dentro de um objeto
const pessoa6 = {
    nome: 'Luiz',
    sobrenome:'Miranda',
    idade: 40,

    //criando o método 

    fala(){
        console.log(`${this.nome} falou Olá mundo!`); //Neste contexto dentro do objeto pesso6, o this se referencia a pessoa6
    }
};
pessoa6.fala();
