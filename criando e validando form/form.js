const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

const errorMsg = document.querySelector('.msg');

const items = document.querySelector('#items')

submitButton.addEventListener('click', function(e){
    e.preventDefault()

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if(nameValue === '' || emailValue === '') {
       errorMsg.textContent = 'por favor preencha todos os campos!';
       errorMsg.classList = 'error';
       return
    }
    const li = document.createElement = 'li';
    li.classList = 'item';
    li.innerHTML = `Nome: ${nameValue}<br />Eemail: ${emailValue}`;

    items.appendChild(li)
})