// Nós podemos passar parâmetros para a IIFE que não fazem parte do escopo local, como por exemplo o objeto 'window' e o document.

// Sempre que você tiver objetos globais, e precisar usar dentro da IIFE, não use diretamente o objeto global. Passe-o por parâmetro, e use-o como uma referência local:
(function (win, doc) {
    'use strict';

    //Confirmado se o parametro 'win' está recebendo de fato o objeto 'window'
    console.log(win === window);

    // Podemos simplificar o 'IF', o ideal é que o mesmo nunca tenha um 'ELSE', o bloco de códio pode ser usado sem as chaves, pois somente a primeira linha sera considerada, ('while' e 'for' de uma linha tb não precisam de chaves), exe:
    if(win !== window )
        console.log('Eu não serei exibido, pois estou no \'if\'');
        console.log('Eu estou fora do \'if\' acima');

    /** Métodos do Window **/

    // alert() - Emite um alerta, métodos do objeto global windowm não precisam do seu nome para ser chamado, conforme os dois exemplos abaixo:
    win.alert('Alerta chamando o objeto global');
    alert('Alerta sem chamar o objeto global');

    // prompt() - Exibe uma mensagem com input do usuário, no exemplo abaixo verificaremos se o usuário digitou qualquer coisa.
    if(win.prompt('Você esta bem?'))
        console.log('Que bom =D!');
    else
        console.log('Sem resposta');

    // outro exemplo de prompt()
    var name = prompt('Qual seu nome?');
    if(name)
        console.log('Ola ' + name)
    else 
        console.log('Não inseriu nome.');

    // confirm() - Método para o u suário confirmar uma ação e retorna TRUE ou FALSE, exe:
    var quest = confirm('Vamos fazer alguma coisa?');
    if(quest) 
        console.log(quest, 'ok, Vamos la!');
    else 
        console.log('Ação cancelada');

    /** Métodos do DOM **/    

    // document() - Representa o documento (DOM - Document Object Model).

    //getElementById() - retorna um elemento do DOM com o respectivo ID
    console.log(doc.getElementById('my-link'));

    // Repare que o elemento é um objeto da interface 'HTMLAnchorElement' que representa os hyperlinks
    console.log(typeof(doc.getElementById('my-link')));

    // getElementByClassName() - Retorna um 'HTMLCollection' do elemento com a respectiva classe
    console.log(doc.getElementsByClassName('my-text'));

    // getElementByTagName() - Retorna um 'HTMLCollection' do elemento com as respectivas tags
    console.log(doc.getElementsByTagName('span'));

    //getElementByName() - Retorna um elemento pelo seu atributo 'name'
    console.log(doc.getElementsByName('nome'));

    /** Query Selector **/

    // Os métodos acima podem ser armzenados em uma váriavel porém são dinâmicos (Se um elemento for adicionado ou exlcuido a variável muda também), se quiser ter uma váriavel estática o ideal são os métodos query selectors.

    // querySelector() - Seleciona somente o primeiro elemento correspondente ao argumento e retorna uma 'NodeList'
    var $div = doc.querySelector('div');
    console.log($div);

    // outro exeemplo mostrando que o argumento tem a mesma sintaxe usada no CSS
    var input = doc.querySelector('[type="text"]');
    console.log(input);

    // querySelectorAll() - Seleciona todos os elementos correspondentes ao argumento e retorna uma 'NodeList'
    var $divs = doc.querySelectorAll('div');
    console.log($divs);
    
})(window, document);