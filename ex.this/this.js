


const pessoa = {
    nome: 'jonatas',
    idade: 26,
    profissao: 'programador',
    falar: function () {
        console.log('olá, tudo bem');
        
    },
    falarNome: function() {
        console.log('meu nome é ' + this.nome);
        
    },
    aniversario: function() {
        this.idade += 1
    },
    saudacao: function(){
        console.log('olá Sr ' + this.nome);
        
    }
}

pessoa.falarNome()

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

pessoa.saudacao()