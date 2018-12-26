(function(doc) {
    'use strict';

    // Para realizarmos o AJAX precisamos de uma instância do objeto do window 'XMLHttpRequest'
    var ajax = new XMLHttpRequest();

    // open(method, url): abre uma requisição
    ajax.open('GET', '/data/data.json');

    // send(data): envia os dados, em caso de GET pode-se usar null
    ajax.send(null);

    // onreadystatechange: É um evento que verifica o estado da requisição quando o mesmo é alterado.
    /* readyState: verifica o estado atual da requisição e possui alguns códigos para identifica-las:
    0: Não enviado
    1: Conexão aberta
    2: Após o send, os Headers foram recebidos
    3: Carregando corpo(conteúdo) da requisição
    4: Requisição concluída 
    */

    /* ajax.status: Ao terminar a requisição obtemos o status, os mais comuns são:
    200
    403
    404
    500 
    */

    function isRequestOK() {
        return ajax.readyState === 4 && ajax.status === 200;
    }

    // ajax.onreadystatechange = function () {}
    var response = '';
    ajax.addEventListener('readystatechange', function () {
        if(isRequestOK()) {
           try {
                // ajax.responseText: Obtem a resposta da requisição
                // transformando a resposta em JSON (parseando), se o arquivo recebido for um XML pode-se usar ajax.responseXML
                response = JSON.parse(ajax.responseText);
                console.log('Requisição realizada com sucesso!', response.mensagem)
           } catch(e) {
               response = ajax.responseText;
           }
           console.log(response);
        }
    }, false);
    
})(document);