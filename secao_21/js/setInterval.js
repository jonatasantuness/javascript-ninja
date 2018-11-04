(function(win, doc) {
    'use strict';

    // É mais recomendao usar o setTimeout recursivo do que o setInterval pois O setTimeout só coloca um evento na fila quando o anterior já foi executado enquanto o setInterval colocar a função callback na fila de eventos no tempo passado por parametro independente se tem outras funções concorrentes.

    // O setInterval normalmente é mis utlizado para quando queremos uitlizar uma função callback com um tempo maior (um minuto ou mais por exemplo)

    var counter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;
    function timer() {
        console.log('timer: ' + counter++);
    }
    // quando atribuimos o setInterval à uma variavel, ela recebe seu ID.
    temporizador = setInterval(timer, 1000);

    // Podemos parar o setInterval utilizando o seu ID
    $button.addEventListener('click', function() {
        clearInterval(temporizador);
    }, false);


})(window, document);