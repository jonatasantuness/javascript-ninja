(function (win, doc) {
    'use strict';

    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('button');

    // .addEventListener() vai adicionar um evento ao elemento selecionado, o primeiro argumento é o nome do evento, o segundo é uma função de callback, o terceiro parametro é um boolean onde 'FALSE' é o default, este parametro define a propagação de eventos (pesquisar por capture/bubbling )  

    //A função de callback pode receber um objeto da interface 'Event' que representa os eventos do DOM, este objeto pode por exemplo maninuplar ou modificar o comportamento padrão do elemento 'button' no exemplo abaixo (Existe também o evento 'submit', porém ele é acionado após o click, então usaremos o click como exemplo por didática.):
    $button.addEventListener('click', function(event) {
        // Para cancelar o comportamento padrão do button
        event.preventDefault();
        console.log('Novo comportamento do botão, não irá submeter o formulário');
    }, false);



})(window, document);