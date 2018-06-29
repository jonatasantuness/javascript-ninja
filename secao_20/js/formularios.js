(function (win, doc) {
    'use strict';

    // .value - É um método (propriedade dos inputs de formulário) que retornam seu valor, o .value também serve como 'getter' ou 'setter' 
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    console.log($inputUsername.value, $inputPassword.value);

    // Utilizando o .value como um setter
    $inputPassword.value = "novasenha";
    console.log($inputPassword.value);

    /** GET **/

    // O método get vai enviar os dados dos parametros dos inputs através da URL em formato 'Query String'

    // Exemplo: ?username=jonatas&password=novasenha

    // A query string começa com '?', depois o 'name' do input que recebe seu 'value', se houver mais de um input serão separados por '&'


})(window, document);