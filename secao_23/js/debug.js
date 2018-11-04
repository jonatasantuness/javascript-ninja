(function(win, doc) {
    'use strict';

    // Para debugar o código abaixo podemos por exemplo criar um breakpoint na linha 5 (pois significa que a linha acima já foi executada), para isto abra o chrome na aba 'sources', clique na linha e atualize a página.
    function sum() {
        return Array.prototype.reduce.call(arguments, function(acumulado, item) {
            return acumulado + item;
        });
    }
    // O proprio console é um objeto do browser que possui métodos úteis para debug
    console.log(sum(1,21,32,4));

    // neste exemplo abaixo temos um código imperativo (que bloqueia a thread, ou seja, impede a navegação), com o 'console.time' e 'console.timEnd' podemos verificar quanto tempo levou a execução deste for.
    console.time('calculando tempo do for');
    for (var i = 0; i < 10000; i++) {
        console.log('calculando...');
    }
    console.timeEnd('calculando tempo do for');

    // o console.table permite um visualização melhor para arrays
    var listaCompras = [
        {item: 'arroz', price: 'R$5', peso: '1kg'},
        {item: 'feijão', price: 'R$4'},
        {item: 'miojo', price: 'R$2'},
        {item: 'carne', price: 'R$10'}
    ];
    console.table(listaCompras);

})(window, document);