(function(win, doc) {
    'use strict';

    var $a = document.querySelector('[data-js="link"]');
    var $div = document.querySelector('[data-js="div"]');
    var $span = document.querySelector('[data-js="span"]');

   /*  
    Parametros do evento:
    1) O tipo de evento
    2) a Função de Callback
    3) O comportamento do evento (fase de captura ou bubbling), o padrão é false(bubbling) onde os eventos vão propagando do filho para o pai, quando colocamos TRUE(captura) os eventos começam do pai para o filho
    */
    $a.addEventListener('click', function(event) {
        event.preventDefault();
        alert('clicou no A');
    }, false);

    $div.addEventListener('click', function(event) {
        event.preventDefault();
        alert('clicou na DIV');
    }, false);

    $span.addEventListener('click', function(event) {
        event.preventDefault();
        alert('clicou no span');
    }, false);

    // Os eventos são acumulativos, um elemento pode ter mais de um evento
    var $botao = document.querySelector('[data-js="botao"]');
    
    $botao.addEventListener('click', function() {
        alert('Primeiro alerta');
    }, false);
    $botao.addEventListener('click', function() {
        alert('Segundo alerta');
    }, false);

    // É possivel remover um evento de um elemento, no caso abaixo o alerta não vai funcinar porque será removido com o removeEventListener
    var $botao2 = document.querySelector('[data-js="botao2"]');

    function alerta() {
        alert('Clicou no botao');
    }
    $botao2.addEventListener('click', alerta, false);

    $botao2.removeEventListener('click', alerta);



    var $input = document.querySelector('[data-js="input"]');

    // O evento 'input' é acionado quando o valor de um elemento <input>, <select>, ou <textarea> é alterado
    $input.addEventListener('input', function(event) {
        console.log(this.value);
    }, false);
    
    

})(window, document);