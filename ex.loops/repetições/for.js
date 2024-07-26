//for loops.

for (let num = 0; num < 10; num++) {
    console.log(num);
}
//iniciamos com uma variavel num valendo 0. logo após colocamos uma condicional qeu pergunta se 0 é menor que 10, se for ele repetirar o seu valor adicionando mais 1 em seu valor, até alcançar o valor da condicional que é 10 no exemplo acima, resultando assim em 9 repetições ou loops.


//usando loops em listas.

const carros = ['ferrari', 'fiat', 'hyundai', 'tesla']

for(let i = 0; i < carros.length; i++) {
    console.log(carros[i]);
}

//isso faz com que o valor de I seja igual a quantidade de itens na lista que é 3 pos a lista é basiado em 0.
//sendo assim ele irar repetir o valor da lista ao inves de um número.


//metodo for of

for (let carro of carros) {
    console.log(carro);
}
// nesse exemplo para cada carro na lista carros ele será repetido.

//foreach

carros.forEach(function(carro, index){
    console.log(index);
    console.log(carro);
})
//dessa forma o carro também é repetido pela função e o index retorna sua posição na lista.