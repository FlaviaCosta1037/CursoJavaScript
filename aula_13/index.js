// 

let umaString = "Um texto";
console.log(umaString);

console.log(umaString[4]); //exibindo o indice 4 ex: letra "e".
// OU utilizar o charAt
console.log(umaString.charAt(6)); //exbindo o indice 8 ex: letra "t".
console.log(umaString.concat(' ', 'em', ' ', 'um')); //Função concatenar. Não usual
// OU utilizar `${}`
console.log(`${umaString} em um lindo dia!`); // MAIS USUAL

//Utilizando indexOf - para saner o index inicial de uma palavra

console.log(umaString.indexOf('texto')); //terceiro indice (resultado: 3)
console.log(umaString.lastIndexOf('m', 4)); //vai informar o indice de trás para frente
console.log(umaString.search(/x/)); //Parece com o indexOf. Diferença que aceita expressões regulares

//Replace: substitui uma palavra por outra
console.log(umaString.replace('Um', 'Outro')); // Um texto >> Outro texto

let umaString2 = 'O rato roeu a roupa do rei de roma';
console.log(umaString2.replace(/r/g, '#')); //Substituir em toda a frase.
console.log(umaString2.length); //Retorna o exato tamanho da frase com espaço
console.log(umaString2.slice(-5)); //Função Slice fatia as strings. ex: são 34 strings, - 5, ele pega a palavra roma.
//OUTRO EXEMPLO
console.log(umaString2.slice(30)) // Mesmo resultado acima. POde usar negativo e positivo.

//Função Split: Divide cada palavra de um array

console.log(umaString2.split(" ")); 


