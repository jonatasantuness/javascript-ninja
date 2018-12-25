(function(win, doc) {
    'use strict';

    // a API do DOM possui propriedades para manipularmos elemento do document

    var $main = document.querySelector('.main');

    // parentNode: essa propriedade retorna o nó que é pai do elemento
    console.log($main.parentNode);

    // childNodes: retorna uma 'NodeList' com todos os nós que são filhos do elemento (inclusive os espaços em branco que são tratados como um 'text' com nodeValue 'enter' )
    console.log($main.childNodes);

    // firstChild: retorna o primeiro filho
    console.log($main.firstChild);

    // firstChild: retorna o ultimo filho
    console.log($main.lastChild);

    // nextSibling: retorna o próximo irmão
    console.log($main.nextSibling);

    // previousSibling: retorna o irmão anterior
    console.log($main.previousSibling);

    // A propriedade nodeType retorna um numero que corresponde à um tipo de node, para saber quais numeros correspondem a qual tipo confira a tabela em (https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType), dificilmente são utilizado desta forma, sendo mais viável armazenlos numa variável como um nome melhor.
    // 1 - (Node.ELEMENT_NODE) Um node tipo "Element" como <p>, <div>, etc ...
    // 3 - (Node.TEXT_NODE) O texto do elemento ou atributo
    // 8 - (Node.COMMENT_NODE) Node do tipo de comentário
    // 9 - (Node.DOCUMENT_NODE) O próprio Document
    // 10 - (Node.DOCUMENT_TYPE_NODE) Node do tipo DocumentType, como <!DOCTYPE html> para HTML5 documents.

    console.log($main.nodeType);

    // nodeValue: retorna o conteudo do nó
    var $maincontent = document.querySelector('.main-content');
    console.log($maincontent.firstChild.nodeValue);

    // nodeName: retorna o nome do nó
    console.log($main.nodeName);

    /* 
    **  Proprieades que trazem somente nós de Elementos 
    */

    // children: Ao contrário da childNodes, a propriedade children só retorna nodes do tipo HTML em uma 'HTMLCollection' ao invés de uma NodeList
    console.log($main.children);

    // firstElementChild: retorna o primeiro filho que é node Element
    console.log($main.firstElementChild);

    // lastElementChild: retorna o ultimo filho que é node Element
    console.log($main.lastElementChild);

    // nextElementSibling: retorna o próximo irmão que é node Element
    console.log($main.nextElementSibling);

    // previousElementSibling: retorna o irmão anterior que é node Element
    console.log($main.previousElementSibling);

    // childElementCount: Quantidade de filhos deste elemento, funciona exatamento como o children.length
    console.log($main.childElementCount);
    console.log($main.children.length);

    /* 
    **  Métodos para manipulação do DOM 
    */

    // hasAttribute(): Verifica se o elemento possui o atributo especifico e retorna TRUE ou False
    console.log($main.hasAttribute('data-js'));

    // hasAttribute(): Verifica se o elemento possui algum atributo e retorna TRUE ou False
    console.log($maincontent.firstElementChild.firstElementChild.hasAttributes());

    // appendChild(): Insere um elemento especificado no parametro no final de outro elemento, quando você seleciona um elemento que já existe, ele é removido do lugar e colocado no local indicado.
    var $mainHeader = document.querySelector('.main-header');
    console.log($maincontent.appendChild($mainHeader));

    // insertBefore(node, beforeWhom): Funciona como o appendChild() porém insere no começo, O primeiro parametro é o node que vai ser inserido e o segundo é em qual elemento será inserido, vamos pegar o header e jogar antes do texto (que é node Text) do $maincontent
    var $firstText = $maincontent.firstChild;
    $maincontent.insertBefore($mainHeader, $firstText);

    // cloneNode(boolean): Clona um elemento node, o argumento booleano é para especificar se queremos clonar também o seu conteúdo, caso sim, é TRUE, para clona-lo de fato é preciso inserir o elemento clonado em algum lugar.
    $maincontent.appendChild($mainHeader.cloneNode(true));
    $maincontent.appendChild($mainHeader.cloneNode(false));

    // hasChildNodes(): Verificar se o elemento possui algum filho, no caso abaixo retorná TRUE porque o elemento possui conteudo de texto, que também é considerado um filho por ser Text Node.
    var $title = document.querySelector('.main-header__title')
    console.log($maincontent.hasChildNodes($title));

    // removeChild(): Remove um elemento filho especificado no parametro
    $maincontent.removeChild(document.querySelector('.main-header:nth-child(4)'));

    // replaceChild(new, old): substitui um filho especificado no primeiro argumento por um outro elemento no segundo argumento
    var $mainFooter = document.querySelector('.main-footer');
    var newChild = document.createElement('small');
    // createTextNode(text): é um método do Document que cria um node do tipo Text
    var newChildText = document.createTextNode('2018 &copy; Desenvolvido por: Jonatas Antunes');
    newChild.appendChild(newChildText);
    newChild.classList.add('main-footer__copyright');
    $mainFooter.replaceChild(newChild, $mainFooter.firstElementChild);

    // createElement(tagName): é um método do Document que cria um node do tipo Element
    var $paragrafo = document.createElement('p');
    var textoParagrafo = document.createTextNode('Opa!');
    $paragrafo.appendChild(textoParagrafo);
    $main.appendChild($paragrafo);

    /* 
    **  Manipulando por Atributos
    */

    // Os atributos são getters e setters, ou seja, além de retornaram o seu valor em uma string, eles podem ser modificados

    // .id: retorna o ID do elemento
    console.log($main.id);

    // utilizando o .id como setter
    $main.id = 'newMain';

    // .className: retorna a classe do elemento
    console.log($main.className);

    // .getAttribute(): pega qualquer tipo de atributo, incluindo aqueles que não são naturais do HTML5
    console.log($main.getAttribute('data-js'));

    
    // .setAttribute(attr, value): adiciona atributos ou modifica o valor de um atributo existente
    $main.setAttribute('data-js', 'main-datajs');
    $main.setAttribute('data-js2', 'main-datajs2');

})(window, document);