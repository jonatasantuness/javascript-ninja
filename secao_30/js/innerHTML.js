(function(win, doc) {
    'use strict';

    // innerHTML: É uma propriedade getter/setter, quando utilizado como um getter retorna uma string com o conteudo html e como setter substitui o conteudo html.
    
    var $div = doc.querySelector('[data-js="main"]');
    // getter
    console.log($div);
    // setter (para manter o conteudo atual, atribuimos com '+=' para concatenar);
    $div.innerHTML += '<p>Parágrafo inserido por um innerHTML</p>';


})(window, document);