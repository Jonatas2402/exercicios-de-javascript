//if else:É basicamente "se isso, então aquilo" se a condição for verdadeira acontece uma coisa, se não acontece outra coisa ex:

let idade = 18

if(idade >= 18) {
    console.log('pode tirar carteira');
    
} else {
    console.log('não pode tirar carteira');
    
}


//As vezes, precisamos usar varias condições. else if entra em ação ex:

let hora = 11

if(hora < 12) {
    console.log('bom dia');
    
} else if (hora < 18) {
    console.log('boa tarde');
    
} else {
    console.log('boa noite');
    
}
const sum = 1+1

if (sum === 2) {
    console.log('sum é igual a 2!');
    
}else {
    console.log('sum is not two!');
    
}
//uso de and e or
//&& = and(e)
//|| = or(ou)
 
const sum1 = 2+2
const sum2 = 3+10

if(sum1 === 4 && sum2 === 6) {
    console.log('sum is 4 and sum2 is 6!');   
}

if(sum1 === 4 || sum2 === 6) {
    console.log('sum is 4 or sum2 is 6!'); 
}


