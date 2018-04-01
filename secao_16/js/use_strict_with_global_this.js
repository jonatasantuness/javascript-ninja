

(function() {
    // 'use strict';

    var obj = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop 3-1',
                    prop32: 'prop 3-2',
                    prop33: 'prop 3-3'
                }
            }
        }
    };

    console.log('Exibindo as propriedades sem o with: ', obj.prop1.prop2.prop3);

    //O 'with' é uma instrução que permite acessar todas as propriedades dentro de um escopo
    //Graças ao 'with' o console.log consegue acessar todas as propriedades dentro do escopo 'obj.prop1.prop2.prop3'
    with(obj.prop1.prop2.prop3) {
        console.log(prop31, prop32, prop33);
    }
})();