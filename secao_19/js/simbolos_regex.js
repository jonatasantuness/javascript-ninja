(function () {
    'use strict';

    //O meta caracter '^' fora de uma lista '[]' representa o início da string
    console.log('Esta frase começa com a letra E'.match(/^E/));

    //O meta caracter '$' representa o fim da string
    console.log('Esta frase termina com a letra E'.match(/E$/));

    //A flag 'm' representa multiplas linhas, a regex vai verificar o match linha por linha
    console.log('<h1>Título da página</h1>\n<p>Este é um parágrafo</p>\n<footer>Rodapé</footer>'.match(/(^<).+(>$)/gm));
    
    // O metacaracter '?'quando é usado após um metacaracter de repetiação (como no exemplo abaixo o '+') representa uma repetiação não gulosa, ou seja, vai caputar o mínimo de caracteres necessário para fazer o match
    console.log('<h1>Título da página</h1>\n<p>Este é um parágrafo</p>\n<footer>Rodapé</footer>'.match(/(<\w+>).+?(<\/\w+>)/g));

    // Quando usamos '?:' dentro de uma lista '()' significa que queremos realizar o match porém não queremos que a regex faça capturas
    console.log('junho e julho'.match(/ju(?:n|l)ho/g));

    //Assim como no método replace() podemos usar referências na regex usando '\1', '\2'...neste exemplo vamos usar a referência para ter certeza que o fechamento da tag é igual a sua abertura, exe: <h1> e </h1>
    console.log('<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>'.match(/<(\w+)>.+<\/(\1)>/g));

})();