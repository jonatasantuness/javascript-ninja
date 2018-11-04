(function(win, doc) {
    'use strict';

    function myFunction() {
        // o objeto 'arguments' é um array like, ou seja ele tem propriedades como length porem não permite usar forEach por exemplo, pois não é um array de fato e não herda métodos de 'Array.prototype'
        console.log('Argumentos: ', arguments);
        console.log('Quantidade de argumentos: ' + arguments.length);
        // Uma das maneiras de fazer a iteração do 'arguments' como se fosse um array é utilizando o call() com prototype
        Array.prototype.forEach.call(arguments, function(item, index) {
            console.log(item);
        });
        // utilizando outros metodos do array como reduce()
        var result = Array.prototype.reduce.call(arguments, function(acumulado, atual, index) {
            return acumulado + atual;
        });
        console.log('Valor de arguments com reduce(): ' + result);
    }

    console.log(myFunction(1, 2, 3, 4, 5, 6));
})(window, document);