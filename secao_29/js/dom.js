(function() {
    'use strict';

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

    // isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    DOM.prototype.isArray = function isArray(param) {
        return Object.prototype.toString.call(param) === '[object Array]';
    }

    DOM.prototype.isObject = function isObject(param) {
        return Object.prototype.toString.call(param) === '[object Object]';
    }

    DOM.prototype.isFunction = function isFunction(param) {
        return Object.prototype.toString.call(param) === '[object Function]';
    }

    DOM.prototype.isNumber = function isNumber(param) {
        return Object.prototype.toString.call(param) === '[object Number]';
    }

    window.DOM = DOM;
})();