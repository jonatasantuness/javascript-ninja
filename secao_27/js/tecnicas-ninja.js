(function(doc) {
    'use strict';

    /* 
    *   Copiando Arrays 
    */

    var arr = [1, 2, 3, 4, 5];

    // Desta forma as variáveis apontarão para o mesmo array e serão iguais
    var arr2 = arr;
    console.log(arr, arr2, arr === arr2);

    // Podemos criar um array diferente utilizando map
    var arrMap = arr.map(function(item) {
        return item;
    });
    console.log(arr, arrMap, arr === arrMap);

    // Com o slice podemos copiar arrays, sem passar nenhum parametro indicamos que queremos o array inteiro
    var arrSliced = arr.slice();
    console.log(arr, arrSliced, arr === arrSliced);

    // Se for um array-like podemos utilizar o slice com prototype do Array
    var $divs = doc.querySelectorAll('div');
    var $divsCopy = Array.prototype.slice.call($divs);
    console.log($divs, $divsCopy, arr === $divsCopy);

    /* 
    *   Obtendo o tipo de dado real 
    */

    /* O método typeof é útil para tipos primitivos mas não é recomendado para outros tipos como arrays, funções, etc...,neste caso o melhor método seria usar o Obejct.prototype.toString */
    var myfunc = function () {
        return Object.prototype.toString.call(arguments);
    }
    console.log(arr);
    console.log(Object.prototype.toString.call(arr));
    console.log(Object.prototype.toString.call(myfunc));
    console.log(myfunc());
})(document);