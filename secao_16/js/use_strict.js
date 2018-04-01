//O 'use strict' é uma diretiva que irá indicar ao browser que neste escopo de função, serão corrigidos problemas que tinham no EcmaScript 3 (como por exemplo o uso de variaveis sem 'var' que o JS considerava como global), ele deve ser a primeira linha dentro do escopo da função, como na IIFE abaixo.

(function() {
    'use strict';
    //se criarmos uma variavel sem o 'var', devido ao 'use strict' será exibido uma mensagem de 'reference error' logo nessa linha.
    myName = "jonatas";
})();