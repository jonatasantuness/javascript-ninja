(function(doc) {
    'use strict';

    /* 
    *   Dicas 
    */

    /* A posição das tags 'script' são importantes, se um script for colocado no HEAD por exemplo, ele será carregado antes do BODY, podendo gerar erros devido à elementos que ainda não foram criados */


    /* O evento 'DOMContentLoaded' espera todo o documento exsitir para assim executar uma função, desta forma mesmo que a tag script esteja no HEAD, as funções só serão ativadas após o carregamento do documento, porém se ja existir imagens na página por exemplo, o 'DOMContentLoaded' não espera elas carregarem por completo e excuta antes disso.  */
    function afterDOMContentLoaded() {
        alert('Carreguei antes da imagem');
        var fragment = doc.createDocumentFragment();
        var childP = doc.createElement('p');
        var textChildP = doc.createTextNode('Texto da TAG P');
    
        childP.appendChild(textChildP);
    
        fragment.appendChild(childP);
    
        doc.body.appendChild(fragment);
    }

    /* O 'load' é um evento do 'window' que espera o carremento por completo dos elementos (desde que não seja assincrono) */
    function afterWindowLoaded() {
        alert('Alerta depois do Load');
    }

    doc.addEventListener('DOMContentLoaded', afterDOMContentLoaded, false);
    window.addEventListener('load', afterWindowLoaded, false);

})(document);