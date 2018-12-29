(function(win, doc) {
    'use strict';

    // insertAdjacentHTML(pos, string): Funciona como o innertHTMl porém é possível passar a posição na qual o conteudo vai ficar, posições possíveis:

    /* 
    beforebegin: será posicionado antes da tag
    afterbegin: será posicionado logo depois da tag
    beforeend: será posicionado no final da tag, antes do fechamento
    afterend: será posicionado no final da tag, depois do fechamento
    */

    var $div = doc.querySelector('[data-js="main"]');
    $div.insertAdjacentHTML('beforebegin', '<p>Beforebegin</p>');
    $div.insertAdjacentHTML('afterbegin', '<p>Afterbegin</p>');
    $div.insertAdjacentHTML('beforeend', '<p>Beforeend</p>');
    $div.insertAdjacentHTML('afterend', '<p>Afterend</p>');


})(window, document);