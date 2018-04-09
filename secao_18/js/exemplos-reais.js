(function() {
    'use strict';

    /* ----- Testando URLS ----- */

    //criando 3 URL's sendo a 'url2' uma URL errada
    var url = 'http://www.google.com.br';
    var url2 = 'hpt://chinelo.';
    var url3 = 'https://google.com';
    var url4 = 'https://www.sampa.org';

    //Como precisamos usar o caratere '/' é preciso 'escapa-lo' para isso é só colocar o '\' na frente.
    //Para pegar o 's' do 'https' podemos utiliar o opcional '?'
    var matchUrl = /https?:\/\/\w+[.\w]+/;

    url.match(matchUrl) ? console.log('URL Valida!') : console.log('URL Invalida');
    url2.match(matchUrl) ? console.log('URL Valida!') : console.log('URL Invalida');
    url3.match(matchUrl) ? console.log('URL Valida!') : console.log('URL Invalida');
    url4.match(matchUrl) ? console.log('URL Valida!') : console.log('URL Invalida');

    /* ----- Validar e-mail ----- */
    var email1 = 'jonatas@email.com';
    var email2 = 'ester@hotmail.com';
    var email3 = 'carlos@corinthians.com.br';

    var matchEmail = /[\w+]+@\w+\.\w+.?([\w]{2})?/;

    email1.match(matchEmail) ? console.log('E-mail Valido!') : console.log('E-mail Invalido');
    email2.match(matchEmail) ? console.log('E-mail Valido!') : console.log('E-mail Invalido');
    email3.match(matchEmail) ? console.log('E-mail Valido!') : console.log('E-mail Invalido');
    
    /* ----- Manipulado URLs ----- */
    var urlPar = '?s=valor1&b=valor1&c=valor2'

    //Explicando:
    // [?&] : queremos ou um '&' ou um '?'
    // (\w+) : seguido de um caracter alfanumerico qualquer quantas vezes forem necessaria que será a chave
    // = : seguido de um sinal de igual '='
    // (\w+) : seguido de um caracter alfanumerico qualquer quantas vezes forem necessaria que será o valor
    var chaveValorRegex = /[?&](\w+)=(\w+)/g;
    
    //Este match vai fazer duas capturas, não tera retorno, somente para exemplificar que da para manipular parametros da URL.
    urlPar.replace(chaveValorRegex, function(regex, chave , valor) {
        if (chave === 's') {
            console.log('Resultado da busca para ' + valor + ' é: ');
            return;
        }
    });

})()