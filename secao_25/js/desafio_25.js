(function(win, doc) {
    'use strict';
    /*
    Essa semana você terá dois desafios:
    1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
    tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
    ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
    o que não ficou tão claro das aulas anteriores.
    É essencial que você entenda todo o conteúdo que foi passado até aqui,
    para que possamos prosseguir para a parte mais avançada do curso :D
    2) Estudar eventos!
    Acesse a página do MDN:
    https://developer.mozilla.org/en-US/docs/Web/Events#Categories
    Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
    desafio os experimentos legais que você conseguir desenvolver :D
    */

    // Network Events
    win.addEventListener('load', function() {
        navigator.onLine ? console.log('Você está online!') : console.log('Você está offline!') ;
    });

    // Focus Events
    var $input = doc.querySelector('[data-js="input"]');

    $input.addEventListener('focus', function() {
        this.style = 'border: 1px solid red;outline: none;';
    });

    $input.addEventListener('blur', function() {
        this.style = '';
    });

    // Form Events
    var $submit = doc.querySelector('[data-js="submit"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var $form = doc.querySelector('[data-js="form"]');

    $form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulário enviado');
    });

    $submit.addEventListener('click', function(e) {
        if($input.value == '') {
            alert('Preencha algo');
            e.preventDefault();
        }
    });

    $reset.addEventListener('reset', function() {
        $input.value = '';
    });
        

})(window, document);