(function() {
    //O 'this' em objetos faz uma referência para o proprio objeto principal.
    var myObject = {
        myProperty: 1,
        init: function init() {
            return this;
        }
    };
    console.log(myObject.init());

    //O 'this' pode então acessar as propriedades do objeto.
    var pessoa = {
        nome: 'Jonatas',
        mostrarNome: function mostrarNome() {
            return this.nome
        }
    };
    console.log(pessoa.mostrarNome());

    // O 'this' em funções fora de objetos pode ter dois valores, o primeiro faz referencia ao objeto global, no caso dos browsers é o objeto 'window' e no node.js o objeto 'global' do node.js.
    function myFunction () {
        return this;
    }
    console.log(myFunction());
    //prova disso:
    console.log(myFunction() === window);

    //O New cria uma referência de 'Object' na variavel 'newObject', neste caso vazia.
    var newObject = new Object();
    console.log(newObject);

    //O 'this' também pode fazer referência a um objeto instanciado, para entender vamos fazer um construtor!
    //Para criar nosso proprio construtor utilizamos por convenção uma função com letra maiúscula.
    function MyConstructor() {
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
    }

    //Utilizando a função para criar um objeto de MyConstructor e e passa-lo para a variavel.
    var construtor = new MyConstructor();
    console.log('myConstructor', construtor);

    //também é possivel crua-lo direto, sem coloca-lo numa variável.
    console.log('myConstructor', new MyConstructor());

    //Obs: se vc chamar a função MyConstrutor() sem o 'new', o 'this' vai referenciar o objeto 'window' e ai vc estará passando propriedades 'prop1' e 'prop2' para o 'window'.
    console.log('Cuidado para não modificar o objeto window ', MyConstructor());
    console.log('Propriedade do objeto window modificado: ' + window.prop1);
    
    //Ou seja ao criar um novo objeto com construtor, o 'this' irá construir propriedades pois sua referência é proprio objeto que esta sendo instanciado.
    console.log("Exibindo uma das propriedades do objeto 'construtor': " + construtor.prop2)


})();