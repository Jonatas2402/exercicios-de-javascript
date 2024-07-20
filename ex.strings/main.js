//Strings

//replace (substituir uma string)
let a = 'não se esqueça da toalha'
let res = a.replace("toalha", "mochila")
let res2 = a.replace("bicicleta", "toalha")
console.log(res);
console.log(res2);
//res2 não retorna nemhuma alteração por não
//encontrar o valor "bicicleta".


//search (busca um valor na variavel e retorna sua posição nela.)

let str = "a vida é feita de alegria"
let resp = str.search("feita")
let resp2 = str.search("cachorro")

console.log(resp);
console.log(resp2);
//resp2 retornará -1 pois o valor não foi
//encontrado na variavel.


//slice (retorna a posição inicial até a posição final da string.)

let texto = 'sempre gostei de aprender estou gostando muito de aprender programação.'
let ret = texto.slice(); //sem valor de referncia
//ele retorna toda a string.
let ret2 = texto.slice(26) //com valor de referencia
// ele retorna exatamente a string no valor referenciado.
 console.log(ret);
 console.log(ret2);

 //split (separa as strings em uma array)
 let dados = 'Terra, Jupiter, Marte, saturno, urano, netuno'
 let array = dados.split(", ");
 let array2 = dados.split(", ", 2);
 let array3 = dados.split(", ", 4)
 console.log(array);//retorna os três dados da array.
 console.log(array2);// retorna os dois primeios dados.
 console.log(array3);// retorna os valores relacionados com a sua ordem (terra 1, jupiter 2, marte 3.) e assim por diante.

 //toLowercase (deixa a string em letras menusculas)

 let texto2 = 'ESTOU APRENDENDO JAVASCRIPT E ESTOU GOSTANDO MUITO'

 let arr = texto2.toLowerCase();

 console.log(arr); // retornará o texto em menusculo

 //toUppercase (assim com o toLowwercase, o Uppercase retorna as letras maiusculas)

 let texto3 = 'javascript é muito bom, estou muito feliz em aprender js'

 let arr2 = texto3.toLocaleUpperCase();

 console.log(arr2);

 //length (Um numero inteiro que retorna a quantidade de letras da string)

 let nome2 = 'jonatas'

 console.log(nome2.length);

 