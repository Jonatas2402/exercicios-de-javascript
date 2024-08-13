//objetos guarda valores de uma propriedade

const pessoa = {
    primeiroNome: 'jonatas',
    sobreNome: 'silva',
    idade: 26,
    profissão: 'programador',
    hobbies: ['ler', 'estudar', 'jogar'],
    cat: {
        name: 'alex',
        idade: 2

        
    }
};
/*const primeiroNome = pessoa.primeiroNome;
const sobreNome = pessoa.sobreNome;
const idade = pessoa.idade;
const profissão = pessoa.profissão;
const hobbies = pessoa.hobbies; */

//mesma coisa que acima
//também temos como renomear, como foi renomeado a idae para age
const {idade: age, primeiroNome, sobreNome, hobbies, profissão, cat:{name: catname}} = pessoa

console.log(primeiroNome);
console.log(sobreNome);
console.log(age);
console.log(hobbies);

//adicionar mais um elemento ao objeto
/*pessoa.cat = 'alex'*/
//assim você pode colocar os dados do novo elemento direto no objeto
console.log(pessoa.cat.idade);
//podemos acessar qualquer propriedade do objeto.
console.log(catname);




const todos = [
    {
        id: 1,
        descrição: 'estudar programação',
        completa: false
    },
    {
        id: 2,
        descrição: 'estudar inglês',
        completa: true,
    },
    {
        id: 3,
        descrição: 'treinar',
        completa: true,
    }
]

const res = todos [2].descrição;

console.log(res);







