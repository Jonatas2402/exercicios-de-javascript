let list = ['laranja', 'maça', 'abacaxi', 'marácuja', 'limão'];
//primeiro criei a lista que vai ser utilizada.
const listUl = document.createElement('ul');
//criando a lista no html.
const body = document.getElementsByTagName('body');
//Manipulando o body.
console.log(body[0]);

body[0].appendChild(listUl);
//Adicionando a lista no Body do meu html
let listBody = document.getElementsByTagName('ul');
//manipulando a lista.
console.log(listBody[0]);

for(let i = 0; i < list.length; i++){
//criando um loop para passar a lista no html.    
    let liFor = document.createElement('li');
//criando li da minha lista
    let textoLi = document.createTextNode(list[i]);
//criando o texto da minha li, que será os nomes das frutas.
    liFor.appendChild(textoLi);
//adicionando o texto nas li´s    
    console.log(liFor);

    listBody[0].appendChild(liFor);
//adicionando as li´s na ul do html.    
}
