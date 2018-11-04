(function(win, doc) {
    'use strict';

    // Os principais objetos do Javascript (number, string, regex, array, date...) possuem uma propriedade chamada 'prototype'

    // A propriedade 'prototype' é onde tem todos os métodos do objeto principal que serão herdado sempre quando é criado um novo objeto, por exemplo ao criar um objeto array 'var arr = [1, 2, 3]', é habilitado o uso do método de array 'slice()' que é herdado de 'Array.prototype'.

    // criando um construtor
    function Pessoa(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    // Extendendo a função adicionando um método fullName à 'Pessoa', se não colocar o prototype, os objetos que serão criados não receberão este método, o método ficaria restrito apenas à 'Pessoa'
    Pessoa.prototype.fullName = function() {
        return this.name + ' ' + this.lastName;
    }

    // Instancioando um objeto que vai herdar a propriedade/método 'fullName'
    var jonatas = new Pessoa('Jonatas', 'Antunes');

    // Mesmo depois de ter o objeto instanciado, podemos estende-lo ainda mais e acessa-lo. (se na função Person tivesse uma propriedade 'this.age = 30' por exemplo, ai no console aparecia 30 e não 20, pois as propriedades de objeto sobrepoem as propriedaes do prototype)
    Pessoa.prototype.age = 26;

    console.log(jonatas.fullName());
    console.log(jonatas.age);

})(window. document);