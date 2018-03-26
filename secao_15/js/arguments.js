(function() {
    //O 'arguments' é um objeto que representa todos os argumentos passados para a função, se não tiver argumentos retorna um tipo de 'array' vazio
    function myFunction() {
        return arguments;
    }
    console.log(myFunction());

    //Retornando os argumentos.
    function myFunctionArg(arg1, arg2) {
        return arguments;
    }
    console.log(myFunctionArg(1,2));

    //Retornando um argumento especifico (funciona como um indice de array)
    function myFunctionArgEsp(arg1, arg2) {
        return arguments[1];
    }
    console.log(myFunctionArgEsp(1,2));
})()