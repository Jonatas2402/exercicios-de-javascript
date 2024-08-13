//funções:São ferramentas que criamos para realizar tarefas especificas. elas ajudam a evitar repetições e tronam o codigo mais organizado e fácil de gerenciar.
//imagina ter que escrever o mesmo codigo varias vezes, com funções, você escreve uma vez e chama essa função sempre que precisar. com no exemplo abaixo

function somar(num1, num2){
    return num1 + num2
}
//Aqui nós chamamos a função somar e damos dois valores para ela somar, e logo após os valores aguardam ser chamadas em resultado.
let resultado = somar (5, 3)

console.log(resultado);

//parâmetros e argumentos
//Os parâmetros são como place holders que definem que tipo de valores a função espera receber.
//Já os argumetos são os valores reais passados para a função.
//ex:

function saudar(nome) {
    console.log('olá, ' + nome);
    
}

saudar('jonatas')
//Nesse exemplo o parâmetro é nome e o argumento é jonatas, a função saudar vai pegar esse argumeto e usar no lugar do parâmetro.

//Arrow Functions
//Funções seta, são um jeoto mais moderno e mais elegante de escrever funções. Elas são especialmentes úteis para funções anônimas e curtas, vão ser muito úteis em umfuturo próximo, então é bom ter praticar com isso
//Ex:
let soma = (a, b = 10) =>a + b
let resul = soma (4 + 8)
console.log(resul);


//exercicios

//calculando área de um retangulo.
// a = b * c

function calretangulo(a, b = c) {
    return a * b
}

let c = calretangulo(10, 5)

console.log(c);

//verificador de numeros pares

function Numpar(num1, num2) {
    return num1 % num2
}
let numero = Numpar(50,4)

console.log(numero);



switch (numero) {
    case 0 || 2 :
        console.log('true');
        break;
    case 1 || 3 :
        console.log('false');
        break;     
}
//utilizei o operador resto da divisão para ter um numero par ou ímpar.

//calcular imc

function imc(peso,altura ) {
    return peso / (altura * altura)
}

let imc1 = imc(100, 1.72, 1.72)

console.log(imc1);



