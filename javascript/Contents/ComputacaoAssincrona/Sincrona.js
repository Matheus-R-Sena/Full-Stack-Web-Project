function espera2segundos (){

    const inicio = Date.now();

    while (Date.now() - inicio < 10000){
        //travado por 2 segundos
    }

    console.log('esperei por 10 segundos');

}

console.log('inicio');
espera2segundos();
console.log('fim');