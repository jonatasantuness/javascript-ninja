(function(win, doc) {
    'use strict';

    // Math: objeto usado para realizar calculos em js, este objeto não é um 'function object', ou seja, não é um objeto que precisa ser instanciado pois quase todos os seus métodos são estáticos.

    // Math.PI: retorna o PI
    console.log(Math.PI);

    // Math.abs(x) Retorna o valor absoluto de um numero (valor numérico desconsiderando seu sinal)
    console.log('valor absoluto: ', Math.abs(-23));

    // Math.ceil(x): Arredonda o valor para cima
    console.log('valor arredondado para cima: ', Math.ceil(27.325));

    // Math.floor(x): Arredonda o valor para baixo
    console.log('valor arredondado para baixo: ', Math.floor(15.78));

    // Math.round(x): Arredonda de acordo com padrão (até 4.9 para o menor, de 5 para cima pro maior)
    console.log('valor arredondado padrão: ', Math.round(7.49));
    console.log('valor arredondado padrão: ', Math.round(7.5));

    // Math.sqrt(x): Retorna a raiz quadrada
    console.log('Raiz quadrada: ', Math.sqrt(81));

    // Math.cbrt(x): Retorna a raiz cubica
    console.log('Raiz cubica: ', Math.cbrt(27));

    // Math.max(x1, x2, x3...): Retorna o maior numero passado no parametro
    console.log('Maior numero do parametro: ', Math.max(20, 3, -12, 54, 13.3));

    // Math.min(x1, x2, x3...): Retorna o menor numero passado no parametro
    console.log('Menor numero do parametro: ', Math.min(20, 3, -12, 54, 13.3));

    // Math.random(): Retorna um numero aleatório entre 0 e 1
    console.log('Numero random: ', Math.random());

    // caso queira um random de 0 a 5 por exemplo
    console.log('Numero random de 0 a 5: ', Math.ceil(Math.random() * 5));

})(window, document);