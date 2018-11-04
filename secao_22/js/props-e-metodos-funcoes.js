(function(win, doc) {
    'use strict';

    // length: esta propriedade de função retorna a quantidade de argumentos
    // name: esta propriedade retorna o nome da função
    function myFunction(a, b, c) {
        return 'ola!';
    }
    console.log('A função ' + myFunction.name + ' tem ' + myFunction.length + ' parametros.');

    // toString(): para cada tipo de elemento em js o método toString() age de forma diferente, para funções ele retorna a função literalmente em string.
    console.log(myFunction.toString());

    // call(): este método faz a chamada da função, ou seja é mesma cois de fazer isso 'myFunction()', porém com o método call() voce pode definir quem será o 'this' pelo parametro
    console.log(myFunction);
    console.log(myFunction.call()); 

    // Exemplo de uso do call(this)
    var pessoa = {
        firstName: 'Jonatas',
        lastName: 'Antunes'
    }

    // lembrando que quando utlizamos a diretiva 'use strict', o 'this' será definido como objeto global, no caso dos browsers o 'window', então na função abaixo o 'this' será o objeto global
    function showLastName() {
        return this.lastName;
    }

    // se executarmos a função abaixo sem o 'this', dará erro pois não foi definida nenhuma propriedade com nome 'lastName' para o 'this' que neste caso é o window.
    // console.log(showLastName.call());

    // Porém se definirmos um this como objeto 'pessoa' a função retornará a propriedade 'lastName'.
    console.log(showLastName.call(pessoa));

    // o call() também permite passar os parametros da função, sendo que o primeiro parametro é o 'this', (caso não queira passar o this, o primeiro parametro pode ser null, {} ou a propria função.)
    function saudacao(firstName, lastName) {
        return 'Ola ' + this.firstName + ' ' + this.lastName; 
    }

    console.log(saudacao.call(pessoa, pessoa.firstName, pessoa.lastName));

    // aply(): funciona como método call() porém com ele conseguimos passar um 'array like' e quebar seus valores representando os parametros da função.
    function exibePerfil(a, b, c, d) {
        console.log(this.firstName, a, b, c, d);
    }

    var perfil = ['estudante', 'brasileiro', 'paulista', 'solteiro'];

    exibePerfil.apply(pessoa, perfil);



})(window, document);