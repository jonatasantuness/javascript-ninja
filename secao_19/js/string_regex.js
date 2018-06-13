(function () {
    'use strict';

    // Como podemos utlizar funções de String com regex?

    // match() - já conhecemos
    // replace() - já conhecemos

    // split() - Relembrando o método split pode separar uma string em várias partes e devolver em um array indicando um separador que pode ser um caracter ou uma regex.
    let cpf = '123.456.789-10';

    // Usando o split e indicando que seu separador é tudo que NÃO é número.
    console.log('CPF: ' + cpf.split(/\D/).join(''));

    // search() - O método search vai procurar o caracter ou regex passado por parâmetro e retornar o índice do primeiro caracter que encontrar, se não encontrar retorna '-1'
    console.log('Método search não encoutrou nada: ' + cpf.search(/naoexiste/));
    console.log('Índice localizado: ' + cpf.search(/\./));

})();