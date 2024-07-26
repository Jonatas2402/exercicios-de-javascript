//JSON serve para transitar dados entre o back end e o front end

const todos = [
    {
        id: 1,
        descrição: 'estudar programação',
        completa: false
    },
    {
        id: 2,
        descrição: 'estudar inglês',
        completa: true,
    },
    {
        id: 3,
        descrição: 'treinar',
        completa: true,
    }
];

const todosJSON = JSON.stringify(todos);

console.log(todosJSON);

//deixa de ser uma lista e um objeto
//para virar um arquivo JSON, sempre utilizado para enviar algo para o servidor.

const todosList = JSON.parse(todosJSON);

console.log(todosList);

//transforma o arquivo JSON em uma lista, essencial quando recebemos um arquivo JSON do servidor.

