(function(win, doc) {
    'use strict';

    // Date: o objeto Date é usado para trabalhar com datas no js, vamos instancia-lo para poder utiliza-lo

    var date = new Date();

    // por padrão ele retorna uma string como esta 
    // "Fri Dec 28 2018 21:51:31 GMT-0200 (Horário de Verão de Brasília)"
    console.log(date);

    // Podemos criar um objeto date passando parametros para customiza-lo, os parametros são na ordem:
    // var date = new Date(year, month, day, hour, minutes, seconds, miliseconds);

    // O Date começa a contar os meses a partir do 0
    var year = 2018;
    var month = 5;
    var day = 23;
    var hour = 10;
    var min = 10;
    var sec = 0;
    var ms = 0;

    var dateExample = new Date(year, month, day, hour, min, sec, ms);
    console.log('data de exemplo: ' + dateExample);

    // Date.now() retorna o número de milisegundos decorridos desde 1 de janeiro de 1970 00:00:00 UTC. Pode ser util para calcular o tempo de execução de um código, por exemplo, quando tempo este for abaixo demorou para ser executado:
    var start = Date.now();
    for(var i =0; i < 100000000; i++) {};
    var end = Date.now();
    console.log('tempo de execução do for: ', end - start + 'ms');

    // date.getDate(): 0-31
    console.log('Data atual ', date.getDate());

    // date.getMonth(): 0-11
    console.log('Mês atual ', date.getMonth());

    // date.getHours(): 0-23
    console.log('Hora atual ', date.getHours());

    // date.getMinutes(): 0-59
    console.log('Minutos atuais ', date.getMinutes());

    // date.getSeconds(): 0-59
    console.log('Segundos atuais ', date.getSeconds());

    // date.getMilliseconds(): 0-999
    console.log('Milisegundos atuais ', date.getMilliseconds());

    // date.getDay(): 0-6
    console.log('Dia da semana atual ', date.getDay());

    // date.getFullYear(): 2018
    console.log('Ano ', date.getFullYear());


})(window, document);