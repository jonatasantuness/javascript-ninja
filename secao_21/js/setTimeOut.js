(function(win, doc) {
    'use strict';

    // o método setTimeout() é global, ou seja, pertence ao 'window'
    // O setTimeOut adiciona uma função callback ao loop de eventos depois de um tempo determinado por parametro (não significa necessariamente que é neste tempo que a função será executada, pois depende da fila de eventos)

    console.log('inicio');

    // Recebe dois parametros, uma função callback e o tempo em milisegundos, como é um evento assincrono, ele só será executado após o tempo passado como parametro.
    win.setTimeout(function() {
        console.log('executou o setTimeOut');
    }, 1000);

    console.log('fim');

    // No exemplo abaixo usaremos uma função recursiva (que chama a ela propria) para executar o setTimeout varias vezes, como a função é assincrona voce consegue selecionar o paragrafo no HTML pois o navegador não é bloqueado.
    var counter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;
    function timer() {
        console.log('timer: ' + counter++);
        // Assim que counter atingir '20' a função dará retorno e não acionará o setTimeout
        if(counter > 20)
            return
        // quando atribuimos o setTimeOut à uma variavel, ela recebe seu ID.
        temporizador = setTimeout(timer, 1000);
    }
    timer();

    // Podemos parar o setTimeout utilizando o seu ID
    $button.addEventListener('click', function() {
        clearTimeout(temporizador);
    }, false);

})(window, document);