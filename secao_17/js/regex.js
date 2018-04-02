(function() {
    'use strict';

    //criando uma expressão regular e atribuindo em uma variavel
    var myRegex = /m/;
    console.log(myRegex);

    //Verificando se a variavel é de fato um tipo primitivo regex
    console.log(typeof(myRegex) === typeof(/ /));

    var texto = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas",[nota 1] foi um militar, político, abolicionista e monarquista brasileiro. Ele nasceu em uma família rica e de tradição militar, entrando no exército em 1817 quando ainda era criança. Sua iniciação militar ocorreu na Guerra contra Artigas, que teve seu território anexado e se tornou em 1821 a província brasileira da Cisplatina. Ele ficou envolvido durante boa parte da década de 1820 no esforço brasileiro para manter a Cisplatina como parte de seu território, primeiro durante a independência do Brasil e depois na Guerra da Cisplatina. No final a província conseguiu se separar e se tornou a nação independente do Uruguai.';

    //O 'match' é um método/propriedade do objeto String que vai fazer o match do texto com um a regex.
    console.log(texto.match(/de/g));

    //Se o match não conseguir achar o termo ele vai retornar 'null'
    console.log(texto.match(/jonatas/));

    //O termo '\w' representa caracteres alfanumericos, então se colcarmos somente este termo como global, iremos retornar todos os caracteres do texto
    console.log(texto.match(/\w/g));

    //O termo '\w' representa caracteres númericos(digitos), então se colcarmos somente este termo como global, iremos retornar todos os numeros do texto
    console.log(texto.match(/\d/g));

    //Se quiser trazer sempre dois numeros é só repetir o termo '\d'
    console.log(texto.match(/\d\d/g));

    //O pipe '|' representa um 'ou'
    console.log(texto.match(/\de|da/g));
    
    //O colchete '[]' representa classe de caracteres, que na pratica é como se todos os caracteres dentro do colchete tivessem um '|'.
    console.log(texto.match(/[123]/g));

    //Os parenteses representam um agrupamento de caracteres, neste caso quero trazer o '1875' ou '1817'
    console.log(texto.match(/(1875)|(1817)/g));

    //O traço '-' faz separa um range, neste caso quero todos os numeros de 0 à 9 ou todos os caracteres de 'a' à 'z'
    console.log(texto.match(/[0-9]/g));
    console.log(texto.match(/[a-z]/g));

    //Para trazer todos os caracteres maiusculos, todos os minusculos e todos os numeros
    console.log(texto.match(/[A-Za-z0-9]/g));

    //Podemos usar o método replace() e junto com regex, no caso abaixo o replace normalmente só subtituiria o primeiro 'de', porém como temos a flag global 'g', o replace vai substituir todos os 'de' por 'DE'.
    console.log(texto.replace(/de/g, 'DE'));

    //O agrupamento funciona como um 'grupo de captura' onde no replace podemos usa-lo no segundo parametro usando o termo '$1', ou seja estamos pegando a 'primeira captura' do termo passado na regex.
    console.log('\nUtilizando o item de captura:')
    console.log(texto.replace(/(de)/g, '--$1--'));
    //No caso abaixo estou pedindo para o segundo '$1' repetir a primeira captura que é 'd', então vai ficar 'dd'
    console.log('\nRepetindo o item de captura:')
    console.log(texto.replace(/(d)(e)/g, '--$1$1--'));
    //O termo '&' vai pegar todos os itens de captura
    console.log('\nPegando todos os itens de captura:')
    console.log(texto.replace(/(d)(e)/g, '~$&~'));

    //O segundo parametro do replace() pode ser um parametro, se utilizarmos o Arguments para verificar os argumentos passados nesta função vc verá que irá retornar um array onde o primeiro item, ou seja o primeiro argumento é a captura total que deu match ('de'), o segundo argumento é a primeira captura 'd', o terceiro argumento é a segunda captura 'e' e o ultimo argumento é a quantidade de itens encontrados. 
    /*console.log(texto.replace(/(d)(e)/g, function() {
        console.log('ARGUMENTS', arguments);
    }));*/
    console.log('\nUsando uma função com parametro no replace():')
    console.log(texto.replace(/(d)(e)/g, function(capturaTotal, d, e) {
        return (d + e).toUpperCase();
    }));

    //Com regex podemos converter uma string para letras maiusculas
    var nome = 'Jonatas';
    console.log(
        nome.replace(/(\w)/g, function(capturaTotal, item) {
            return item.toUpperCase();
        })
    );
    //Intercalando letras maiusculas e minusculas
    console.log(
        nome.replace(/(\w)(\w)/g, function(capturaTotal, item1, item2) {
            return item1.toUpperCase() + item2.toLowerCase();
        })
    );


})();