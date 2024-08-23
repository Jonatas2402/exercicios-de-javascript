const button = document.querySelector('.btn')
const myForm = document.querySelector('#my-form')
const nomeInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')

const itens = document.querySelector('.items')
const body = document.querySelector('body')

button.addEventListener ('click', function(e){
    e.preventDefault();
    //return alert ('clicou')

    let nomeValor = nomeInput.value;
    let emailValor = emailInput.value;

    if(nomeValor === '' || emailValor === ''){
        alert('preencha todos os campos!')
    }

    myForm.style.background = 'red';
    itens.firstElementChild.textContent = nomeValor;
    itens.children[1].textContent = emailValor;

    body.style.background = 'white'

})