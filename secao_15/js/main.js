//A IIFE vai definir este arquivo script como escopo local, e impedir que suas variaveis e funções sejam acessados por outros arquivos js.

//O ideal é sempre trabalhar com IIFE e escopo local.

//Quando quisermos usar dados de outro arquivo devemos exporta-lo como global.

var nome = 'global';

(function(){
    console.log('JS no Browser, eu estou antes do fechamento do body! =D');
    var name = 'Jonatas';

    // se criarmos uma variavel sem o 'var', a variavel será local e alterarpa a variavel 'nome' em escopo global, modifique a variavel abaixo adicionando e retirando 'var' para ver a diferença.
    nome = 'local';
    console.log(nome);
})();

console.log(nome);