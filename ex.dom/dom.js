function divedit() {

// Estudando Dom

//Buscando elementos pelo seu id.
let header = document.getElementById('header')
/*Adiciona o id do elemntendo para manipula-lo.*/

//guardando codigo html de dentro do elemneto
let cont = header.innerHTML;

//reescrever o conteúdo adicionando outras tags
header.innerHTML = '<strong>+conteudo+</strong>'

//criar um ovo elemento DOM
let paragrafo = document.createElement('p')

//configurar o propriedade title do elemento
paragrafo.setAttribute('title','novo paragrafo')

//criar um nó no texto
let txt = document.createTextNode('paragrafo adicionado a árvore DOM')

//inserir um texto no paragrafo
paragrafo.appendChild(txt)

//inserir o paragrafo na pagina
header.appendChild(paragrafo)


}