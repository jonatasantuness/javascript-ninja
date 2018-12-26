(function(win, doc) {
    'use strict';

    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.
    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.
    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false
    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
    */

    // Função construtora
    function DOM(elements) {
        this.element = document.querySelectorAll(elements);
    }

    // Função que vai construir o addEventListener
    DOM.prototype.on = function on(eventType, callback) {
        // A function de callback ira passar por todos os elementos do primeiro argumento 'this.element'
        Array.prototype.forEach.call(this.element, function (element) {
            element.addEventListener(eventType, callback, false);
        })
    }

    DOM.prototype.off = function off(eventType, callback) {
         // A function de callback ira passar por todos os elementos do primeiro argumento 'this.element'
         Array.prototype.forEach.call(this.element, function (element) {
            element.removeEventListener(eventType, callback, false);
        })
    }

    DOM.prototype.get = function get() {
        return this.element;
    }

    DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
    }

    DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
    }

    DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.element, arguments);
    }

    DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments);
    }

    DOM.prototype.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.element, arguments);
    }

    DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments);
    }

    DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.element, arguments);
    }

    var $a = new DOM('[data-js="link"]');

    $a.forEach(function(item) {
        console.log(item);
    });

    var dataJs = $a.map(function(item) {
        return item.getAttribute('data-js');
    });
    console.log(dataJs);

    var arrReduce = $a.reduce(function(acc, item, index) {
        return acc + ' ' + item.getAttribute('data-js') + ' ' + index;
    });
    console.log(arrReduce);

    // isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    DOM.prototype.isArray = function isArray(param) {
        return Object.prototype.toString.call(param) === '[object Array]';
    }
    // Para executar a função abaixo precisamos instancia um objeto de DOM ou chama-la pelo prototype
    /* var dom = new DOM();
    console.log(dom.isArray([1, , 2, 3])); */
    console.log(DOM.prototype.isArray([1, , 2, 3]));

    DOM.prototype.isObject = function isObject(param) {
        return Object.prototype.toString.call(param) === '[object Object]';
    }
    console.log(DOM.prototype.isObject({a: 1, b: 2}));

    DOM.prototype.isFunction = function isFunction(param) {
        return Object.prototype.toString.call(param) === '[object Function]';
    }
    console.log(DOM.prototype.isFunction(function() {}));

    DOM.prototype.isNumber = function isNumber(param) {
        return Object.prototype.toString.call(param) === '[object Number]';
    }
    console.log(DOM.prototype.isNumber(23));

})(window, document);