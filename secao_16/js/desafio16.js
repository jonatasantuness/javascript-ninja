
(function () {
    'use strict';
    /*
    1. Envolva todo o código desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Declare uma variável chamada `name` que receba seu primeiro nome.
    Mostre no console todas as letras do seu nome separadas, com a frase:
    - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
    Ex: no caso do nome ser "Fernando", deve mostrar as frases:
    - "F é a 1ª letra do meu nome."
    - "e é a 2ª letra do meu nome."
    E assim por diante, até a última.
    */
    console.log( 'As letras do seu nome:' );
    var name = 'jonatas';
    for (var i = 0, tamanhoNome = name.length; i < tamanhoNome; i++) {
        console.log(name.charAt(i) + ' é a ' + (i + 1) + '° letra do meu nome');    
    }

    /*
    - Declare uma variável chamada `fullName`, que receba seu nome completo,
    escrito no formato de slug (caixa baixa e palavras separadas por um traço).
    Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
    - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
    por um espaço.
    - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
    nome, então fique à vontade para usar as artimanhas que já viu até agora no
    curso para fazer isso funcionar corretamente :)
    - Mostre no console o nome no formato slug, e o resultado final. Use um
    console.log para cada formato.
    */
    console.log( '\nNome convertido à partir de um slug:' );
    var fullName = 'jonatas-antunes-de-souza';
    var newFullName = fullName.split('-').map(function(item) {
        return item.charAt(0).toLocaleUpperCase() + item.slice(1);
    }).join(' ');

    console.log();
    console.log(newFullName);
    

    /*
    - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
    cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */
    console.log( '\nMeus amigos:' );
    var amigos= ['Johnny', 'Carlos', 'Ester', 'Fernando', 'Willian'];
    var frase = amigos.reduce(function(acumulado, atual, index) {
        /* Quando o ultimo indice do array for igual ao index do parametro da função do reduce menos 1, o separador vai receber ' e ' senão recebe ', ' */
        var separador = amigos.length -1 === index ? ' e ' : ', ';
        return acumulado + separador + atual;
    }).concat(' são meus amigos!');


    console.log(frase);

    /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */
    console.log( '\nEra "Roberto", agora é:' );
    console.log('Roberto'.replace('to', 'ta'));

    /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que
    faz a busca do final para o início da string.
    */
    console.log( '\nParte de uma string:' );
    console.log('Fernando'.substring(8, 3));

    /*
    Declare uma variável chamada `myName`, que receba o seu primeiro nome,
    escrito de forma natural.
    Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
    e minúsculas.
    - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
    de qualquer tamanho, escrito de qualquer forma.
    Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
    */
    console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
    var myName = 'jonatas';
    var myNameInt = '';
    
    for(var i = 0, len = myName.length; i < len; i++) {
        i % 2 === 0 ? myNameInt += myName.charAt(i).toUpperCase() : myNameInt += myName.charAt(i).toLowerCase();
    }
    console.log(myNameInt);

})(); //fim do iiee (função auto executavél)
