(function() {
    'use strict';

    // Sincrono significa que as acções ocorrerão uma após a outra em uma 'thread', porém quando adicionamos um evento no javascript o mesmo ficará numa thread separada em um 'loop' aguardando uma ação, e sua função callback só será executada quando for chamada.
    console.log('inicio');
    // este console só aparecerá quando clicarmos na pagina
    document.addEventListener('click', function() {
        console.log('clicou no documento');
    }, false);
    console.log('fim');
})();