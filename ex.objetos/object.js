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


//Montando um objeto
//Objeto é uma coleção de propriedades, e uma propriedade é uma associação entre chave e valor. O valor de uma propriedade pode ser uma função, que é então conhecida como um método do objeto. ex:

let outraPessoa = {
    nome: 'jonatas',
    idade: 26,
    falar: function() {
        console.log(`oi meu nome é ${this.nome}`);
        
    }
}


//Aqui o objeto pessoa com três propriedades:nome, idade, falar. Falar é um método, ou seja, uma função dentro de um objeto.

//Para acessar propriedades e métodos.
//Usamos a notação de ponto ou colchetes.
//Ex:

console.log(outraPessoa.nome);
outraPessoa.falar();

//alterando e adicionando propriedades.
//Você pode alterar as propriedades de um objeto ou adicionar novas propriedades a ela após sua criação.
//Ex:

outraPessoa.idade = 27;//alterando a idade.
outraPessoa.sobrenome = 'silva';//add nova propriedade.

console.table(outraPessoa);

//Iterando sobre propriedade
//Podemos percorrer todas as propriedades de um objeto usando um loop for...in.
//Ex:
for (let chave in outraPessoa) {
    console.log(`${chave}: ${outraPessoa[chave]}`);
    
}

//Com o loop for...in, passamos por cada propriedade do objeto outraPessoa, imprimindo seu nome e valor.


//Objetos como referências
//Em JavaScript, objetos são referenciados. quando você atribui um objeto a uma variável, está passando uma referência a esse objeto.

//Ou seja, Se você fax uma "copia" de um objeto, e altera alguma propriedade, o objeto original também será alterado.


//Métodos avançados.
//JavaScript oferece métodos avançados para trabalhar com objetos, como 
//Object.keys(), Object.values() e Object.entries().
//Ex:
console.log(Object.keys(outraPessoa));
//Object.keys(outraPessoa) retorna um array com os nomes das propriedades do objeto outraPessoa.

//Exercicios

//criar um objeto com nome carro e adicionar marca, modelo, ano.
const carro = {
    marca: 'fiat',
    modelo: 'argo',
    ano: 2024
}

console.log(carro.modelo);
//alterar ano de carro, adicionar cor a o objeto.
carro.cor = 'Preto'
carro.ano = 2025

console.log(carro);
//Criar um método em um objeto, criando uma soma dentro de um objeto.
const calculadora = {
    soma: function(a, b) {
        return a + b
    } 
}

let resul = calculadora.soma(10, 20)

console.log(resul);
//Iterando sobre as propriedades de um objeto.
for (let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
    
}

//Referências de objeto
let livro = {
    titulo: 'javascript o livro dos misterios',
    autor: 'jonatas silva'
}

let outroLivro = livro 
outroLivro.titulo = 'javascript é massa'

console.log(outroLivro);

//Usando métodos avançados de objeto
console.log(Object.keys(carro));

console.log(Object.values(carro));
