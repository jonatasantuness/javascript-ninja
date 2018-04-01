(function() {
    'use strict';

    //A propriedade 'length' irá contar a quantidade de caracteres.
    console.log('jonatas'.length);

    //O método 'charAt()' irá retornar o caracter no indice que for passado como parametro
    var name = "Jonatas";
    console.log('Caracter na posição 0: ' + name.charAt(0));
    //Usando a notação de array tb funcionar pq a String tb é um 'array like'
    console.log(name[0]);

    //O metodo 'concat()' funcionar como nos arrays, concatenando os argumentos (ele não modifica a variavel).
    console.log(name.concat(' ' + 'Antunes' + ' de ' + 'Souza'));
    console.log(name);

    //O método 'indexOf()' verificar se o caracter passado pelo parametro existe na string e retorna seu indice, pode ter um segundo argumento que a posição que ele começa a rastrear.
    //quero saber se no 'name' existe um 'a' a partir do indice 4
    console.log(name.indexOf('a', 4));

    //E se não tiver, retornra '-1'
    console.log(
        name.indexOf('m') > -1 ? 'Este caracter existe na String' : 'Este caracter não existe na String' 
    );

    //Da para passar strings por parametros
    console.log(
        name.indexOf('tas') > -1 ? 'Este caracter existe na String' : 'Este caracter não existe na String' 
    );

    //O método 'lasIndexOf()' faz a mesma coisa porém buscando de tras para frente
    console.log(
        name.lastIndexOf('n', 4) > -1 ? 'Caracter encontrado!' : 'Caracter não encontrado!' 
    );
    console.log(
        name.lastIndexOf('s', 4) > -1 ? 'Caracter encontrado!' : 'Caracter não encontrado!' 
    );


    //O método 'replace()' faz troca do caracter (somente do primeiro que encontrar), ele não modifica a variavel
    var nome = 'Fernando';
    console.log(nome.replace('o', 'a')); 
    console.log(nome);

    //O método 'slice()' tem dois parametros (sendo o segundo opcional) que são os indices para 'cortar' a string
    console.log(nome.slice(3));

    //O método 'split()' vai quebrar a string e transformar num array, o argumento passado é removido e depois é criado um array com as partes separadas
    console.log(nome.split('n'));

    //Aproveitando que o split cria uma nova array, pode se usar o método de array 'join()' que pode ter um argumento que é caracter que irá 'juntar' as partes quebradas.
    console.log(nome.split('n').join('n'));

    //Então quisermos fazer um replace de varios caracteres repetido podemos quebra-lo num array com split e depois juntar com join com o caracter novo.
    console.log(
        'Lala'.split('a').join('i')
    );

    //O método 'substring()' faz a mesma coisa que o 'slice' porém se colocarmos um numero maior no primeiro argumento, ele faz a invesão automaticamente
    console.log(nome.substring(8, 3)); 

    //O metodo 'toLowerCase()' e toUppercase() retornam a string em caixa baixa e alta respectivamente. (não modifica a string principal).
    console.log(name.toLowerCase());
    console.log(name.toLocaleUpperCase());

    //Podemos combinar com o charAt() e com slice() para retornar a primeira letra maiuscula e juntar com o nome sem a primeira letra.
    var nome2 = 'ester';
    console.log(nome2.charAt(0).toLocaleUpperCase() + nome2.slice(1));

})();