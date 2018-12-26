(function(win, doc) {
    'use strict';

    /* Ao alterar o document o browser renderiza todos os nodes novamente, o que pode ser muito ruim apra performance, para resolver este problema podemos criar fragmentos de documents separados, manipular ele e só depois inseri-los no document. */

    var fragment = document.createDocumentFragment();
    var childP = document.createElement('p');
    var textChildP = document.createTextNode('Texto da TAG P');

    childP.appendChild(textChildP);

    fragment.appendChild(childP);

    document.body.appendChild(fragment);
})(window, document);