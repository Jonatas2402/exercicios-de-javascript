const alunos = ['joão', 'lucas', 'melissa', 'nicolas', 'jonatas', 'carlos'];

alunos.push('karenn');

alunos.map((nomes) => {
    console.table(nomes);
    
})

const notas = [8.5, 6.3, 7, 5.3, 10, 5.3, 10];

notas.map((nota) =>{
    console.table(nota);
    
})
//console.log(alunos.length);

//console.log(notas.length);



function somar (a, b, c) {
    return a + b + c
}

let resul = somar(13, 170, 399);

function media(a, b, c) {
    return a / b / c

    let mediaTotal = media(resul);
    
}



