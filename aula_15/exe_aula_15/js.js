
const numero = Number(prompt('Digite um número: ')); //Convertendo o prompt em Number.

const numeroTitulo = document.getElementById('numero-titulo'); //Criada uma constante numeroTitulo para alterar o numero da ID criada. Constante numeroTitulo recebe o numuero digitado pelo usuário no titulo.

const texto = document.getElementById('texto'); //Constante texto recebe o calculo realizado baseado no numero digitado pelo usuário. Calculos realizados abaixo.

//Texto recebe novos valores de acordo com os calculos.
numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raíz quadrada: ${numero ** 0.5}</p>`; 
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}</p>`;