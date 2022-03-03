//Funções 

//Uma função recebe um valor, pode executar ou não uma ação e pode retornar um valor

//Forma 1:
function saudacao(nome) { //Funçao de saudação "nome"
    console.log(`Bom dia ${nome}`) // Define o que será chamado dentro do console.log.
}

saudacao('Luiz'); //Pode ser usada diversas vezes. Nesse caso a impressão será: Bom dia Luiz

//Forma 2: Com return

function saudacao2 (){
    return `Bom dia ${nome}!` //Mandando a função retornar o valor
}
saudacao('Luiz'); //Definindo um valor dentro da saudação.

//Forma 3: Com variável

function saudacao3(){
    console.log(`Bom dia ${nome}`);
}
const variavel = saudacao('Luiz');

//Função para somar dois valores:
function soma(x, y){
    const resultado = x + y; //Tudo o que está dentro de uma função está protegido.
    return resultado;
}
console.log(soma(2 , 2));
console.log(soma(5 , 10));
console.log(soma(20 , 30));

const resultado = soma(2, 10); //Variável resultado é diferente da variável usada dentro da função.
console.log(resultado);

