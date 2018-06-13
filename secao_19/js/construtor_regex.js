(function () {
    'use strict';

    // Com o método construtor RegExp() podemos criar novos objetos regex, porém como o a expressão tem que ser passada como uma string, é nessário 'escapar' o próprio caracter de escape, como no exemplo abaixo onde normalmente só usariamos '\d'. O objeto RegExp() pode receber um segundo parâmetro, que são as flags:
    let regexNumber = new RegExp('\\d');

    // test() - Como o RegExp também é um tipo primitivo, ele também tem métodos, como por exemplo o 'test' que funciona como o 'search()' porém retorna true ou false se der match ou não
    let user = 'jonatas123';
    console.log(regexNumber.test(user));

    // exec() - O método exec vai trazer sempre a próxima referência sempre que for execultado, depois que terminar ele retorna 'null' e então volta a repetir a primeira referência.
    let regNum = /\d/g;
    console.log('Repetindo o método exec() :'); 
    console.log(regNum.exec(user)); 
    console.log(regNum.exec(user)); 
    console.log(regNum.exec(user)); 
    console.log(regNum.exec(user)); 

    // lastIndex() - Esta propriedade retornar o índice do ultimo item localizado, como o ultimo exec retornou null, o lastIndex retornará '0'.
    console.log(regNum.lastIndex);

    // Fazendo um loop com exec()
    let name = 'jonatas1992';
    let result = 0;

    while (result = regNum.exec(name) !== null) {
        console.log(result);
    }



})();