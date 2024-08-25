let list = ['laranja', 'maça', 'abacaxi', 'marácuja', 'limão'];

const listUl = document.createElement('ul');

const body = document.getElementsByTagName('body');

console.log(body[0]);

body[0].appendChild(listUl);

let listBody = document.getElementsByTagName('ul');

console.log(listBody[0]);

for(let i = 0; i < list.length; i++){
    
    let liFor = document.createElement('li');

    let textoLi = document.createTextNode(list[i]);

    liFor.appendChild(textoLi);
    
    console.log(liFor);

    listBody[0].appendChild(liFor);
}
