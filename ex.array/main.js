//listas

//concat (agrupa dos ou mais array e retorna o resultado)

const x = ['feijão. arroz, macarrão']
const y = ['formam um almoço nutritivo.']

const resultado = x.concat(y);

console.log(resultado);


//join (agrupa todos os elementos de uma array que estejam separados por aspas duplas ou simples e junta todos como resultado.)

const t = ["a vida","é linda","viva intensamente"];

const res = t.join("\ ")

console.log(res);


//pop (o ultimo elemento da array é removido e retornado)

const vet = [4, 12, 15, 20, 40, 50, 48, 60]

const res2 = vet.pop();

console.log(res2);


//push (adiciona elementos a array, na ordem que foi adicionado, e retorna o valor referente)

const nomes = ['jonatas, karenn, alu']

const res3 = nomes.push('kesia');

console.log(res3);

//reverse (retona a array na ordem invertida.)

const numeros = [1, 2, 3, 4, 5 ,6]

const res4 = numeros.reverse();

console.log(res4);

//shift (o primeiro elemento da array é removido e retornado)

const num = [4, 8, 14, 12, 20, 22, 28, 25, 30, 33, 31, 40]

const r = num.shift();

console.log(r);

//sort (metodo que coloca os elementos de uma array em ordem alfabetica. Funciona do mesmo jeito para numeros.)

const letras = ['a', 'r', 'e', 't', 'y', 'w', 'j', 'b', 'g', 'c']

const certo = letras.sort();

console.log(certo);


const vetor = [12, 14, 1, 6, 2, 4, 30]
const errado = vetor.sort();

console.log(errado);


//splice (utilizado para remover, substituir e adicionar elementos em y=uma array.)

const ele = [4, 9, 8, 'jonatas', 18, 24]

const rem = ele.splice(3,1);//para remover um ou mais elementos

console.log(rem);
console.log(ele);

const add = ele.splice(0,0,1,2,3)//adicionar um ou mais elementos

console.log(add);
console.log(ele);


const sub = ele.splice(4,2,5,6);

console.log(sub);
console.log(ele);


//unshift (adiciona novos elementos no icio da array na ordem que forem fornecidos.)

const nomes2 = ['jonatas, aluisio, cleber, ferreira']

const resN = nomes2.unshift('karenn');

console.log(nomes2);

//toString (esse metodo repete toda array, semelhante ao join quando não exixte parametro.)


const novo = ['jonatas', 12, 'novo']

const resul = novo.toString();

console.log(resul);

//map (serve para manipular os valores de um array, o exemplo ele muultiplica os valors por 2)


const numbers = [1, 2, 3, 4, 5];

const numberMultiTwo = numbers.map(function(number) {
    return number * 2
})

console.log(numberMultiTwo);
