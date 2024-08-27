Escopo.

No JavaScript podemos ter varios escopos.

O global, que é iniciado em toda a aplicação.

escopo basicamente é onde sua aplicação esta em relação ao documento principal.
ex:

var x = 1;

A variável x esta no escopo global.

function () {
    var z = 3;
}

A variável z esta no escopo da função.