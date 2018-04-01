(function() {
    'use strict';

    var obj = {
        prop1: 'prop1',
        prop2: 'prop2',
        prop3: 'prop3'
    }

    //O 'delete' é uma instrução que irá deletar uma propriedade e retornar true/false.
    console.log(delete obj.prop1);
    console.log(obj);

    //Porém o 'delete' não consegue deletar objetos ou variaveis por exemplo
    var myVar = 2;

    //Com o 'use strict' será laçado um SyntaxError caso o delete não possa deletar algo.
    // console.log(delete myVar);
    console.log(myVar);

    //No modo 'use strict' é obrigatório o uso de propriedades com nomes diferentes, senão ele vai pegar o ultimo valor e atribuir a propriedade 
    var obj2 = {
        prop1: 'prop1',
        prop1: 'prop2',
        prop3: 'prop3'
    }

    console.log(obj2);

    //As funções tb devem ter argumentos com nomes diferentes senão irá retornar SyntaxError acusando argumento duplicado
    /*function myFunction(a, a ,c) {
        return a + a + c;
    }*/

    // console.log(myFunction());
})();