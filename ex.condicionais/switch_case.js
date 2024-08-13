//case = caso

const car = 'mercedes'

switch (car) {
    case "mercedes":
        console.log('mercedes is beatiful!');
        
        break;
}


//swich é utilizado quando você tem varias condições pra checar. Funciona tipo escolhendo um caminho baseado no valor de uma variavel. 
//Ex:

let corFavorita = 'azul'

switch (corFavorita) {
    case 'vermelho' :
        console.log('Você gosta de vermelho');
    break;
    case 'verde' :
        console.log('Você gosta de verde');
    break;
    case 'azul' :
        console.log('Você gosta de azul');
    break;    
}

//Aqui ele faz varias comparações até achar a condição verdadeira da variavel.

//exercicios

//verificação de idade.

let idade = 16

if(idade < 13) {
    console.log('criança');
    
} else if (idade >= 14 && idade <=17) {
    console.log('alolescente');
    
} else if (idade >= 18 && idade <= 64) {
    console.log('adulto');
    
}else {
    console.log('idoso');
    
}

//jogo de adivinhação

let numero = 3

switch (numero) {
    case 1:
        console.log('Errou');
        break;
    case 2 :
        console.log('Errou');
        break;
    case 3 :
        console.log('Acertou');
        break;
    case 4 :    
           console.log('Errou');
           break;  
    case 5 :
        console.log('Errou');
        break;
}

//Programa de notas

let nota = 8

switch (nota) {
    case 5 :
        console.log('Reprovado');
        break;
    case 6 || 7 :
        console.log('Recuperação');
        break;
    case 8 :
        console.log('aprovado');
        break;
                     
}