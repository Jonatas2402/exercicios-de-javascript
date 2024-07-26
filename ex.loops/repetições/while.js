//while loops
//será execitado determinado código enquanto uma condição for verdadeira.

let index = 0

while(index < 10) {
    console.log('index é menor que 10');
    //index = index + 1
    index++
}

//for in

const person = {
    name: 'jonatas',
    idade: 26,
}

for(property in person) {
    console.log(person[property]);
}
//pouco usado por conta de não ser performatico.