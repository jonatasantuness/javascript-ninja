//Ativando o 'use strict' será exibido um Syntax Error ao usar o 'with' 

(function() {
    'use strict';
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

    //O 'with' é uma instrução que permite acessar todas as propriedades dentro de um escopo, facilita pois reduz a digitação para chamar as propriedades, mas pode gerar um problema pois os parametros dentro do 'with' podem se confudir com variaveis de fora dele, por isso ele não é permitido no modo 'use strict'.
    //Graças ao 'with' o console.log consegue acessar todas as propriedades dentro do escopo 'obj.prop1.prop2.prop3'
    /*with(obj.prop1.prop2.prop3) {
        console.log(prop31, prop32, prop33);
    }*/

    //Dentro do modo 'use strict', no escopo global dentro das funções o 'this' é igual à 'undefined' ao invés do objeto global 'window'ou node.
    function Person(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    //Primeiro vamos provar que no 'use strict' o 'this' é igual a 'undefined'
    console.log(this === undefined);

    //Se chamar o objeto sem o 'new' ele estará sendo pedurado no 'window' o que no modo 'use strict' não é permitido e vai gerar um TypeError, pois o 'this' estará apontando 'undefined'.
    // console.log(Person('Jonatas', 'Souza', 25));

    //No 'use strict' devemos usar o 'new' para os parametros serem apontados para o 'this' do objeto instanciado e não retornar 'undefined'
    console.log(new Person('Jonatas', 'Souza', 25));

})();