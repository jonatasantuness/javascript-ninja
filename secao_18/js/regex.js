(function() {
    'use strict';

    var texto = 'Manuel Marques de Sousa, Conde de Porto Alegre \n(Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas",[nota 1] foi um militar, político, abolicionista e monarquista brasileiro. Ele nasceu em uma família rica e de tradição militar, entrando no exército em 1817 quando ainda era criança. \nSua iniciação militar ocorreu na Guerra contra Artigas, que teve seu território anexado e se tornou em 1821 a província brasileira da Cisplatina. Ele ficou envolvido durante boa parte da década de 1820 no esforço brasileiro para manter a Cisplatina como parte de seu território, primeiro durante a independência do Brasil e depois na Guerra da Cisplatina. No final a província conseguiu se separar e se tornou a nação independente do Uruguai.';

    console.log(texto);

    console.log('\n');

    //Match com todos os espaços em branco, ele também faz match com o '\t' que corresponde a tabulação
    console.log('Todos espaços em branco:');
    console.log(texto.match(/\s/g));

    //Match com todas as quebras de linha
    console.log('Todas as quebras de linha:');
    console.log(texto.match(/\n/g));
    
    //O '\.' casa com todos os caracteres que não sejam quebra de linha (casa com tabs também)
    console.log('Tudo que não é quebra de linha:');
    console.log(texto.match(/./g));
    
    /* ----- Caracteres de Negação ----- */
    
    //No '^' o match pode ser feito com qualquer item, menos com o paramêtro passado na lista(neste caso tiramos todas as vogais)
    console.log('Negação:');
    console.log(texto.match(/[^aeiou]/g));

    //O '\W' em maiusculo faz match com qualquer caractere MENOS os alfanúmericos
    console.log('Negação de caracteres alfanumericos:');
    console.log(texto.match(/\W/g));

    //O '\D' em maiusculo faz match com qualquer caractere MENOS os digitos
    console.log('Negação de digitos:');
    console.log(texto.match(/\D/g));

    /* ----- Repetidores ----- */

    //As chaves '{n,m}' fazem um intervalo onde 'n' significa o mínimo de vezes e 'm' o máximo de vezes que o caracter da match, por exemplo eu quero um casar um numero que tenha pelo menos dois digitos ou no maximo quatro.
    console.log('Intervalo:');
    console.log(texto.match(/\d{2,4}/g));

    //Usando o intervaldo aberto {n,} ele repete o item n ou mais vezes
    console.log('Intervalo Aberto:');
    console.log(texto.match(/\d{2,}/g));

    //Usando o intervaldo especifico{n}
    console.log('Intervalo especifico:');
    console.log(texto.match(/\d{4}/g));

    //Usando o Opcional '?', por exemplo, um numero seguido de outro numero, porem este ultimo é opcional
    console.log('Opcional:');
    console.log(texto.match(/\d\d?/g));

    //Usando o adicional o match será de uma ou mais vezes o elemento
    console.log('Adicional:');
    console.log(texto.match(/s+/g));

    //Para fazer match com palavras po exemplo podemos usar o caratere alfanumerico '\w' como adicional
    console.log('Todas as palavras');
    console.log(texto.match(/\w+/g));

    //O Asterisco '*' pega o item zero ou infinitas vezes, então tb pegará praticamente todas as palavras no exemplo abaixo
    console.log('Todas as palavras');
    console.log(texto.match(/\w*/g));
    
})()