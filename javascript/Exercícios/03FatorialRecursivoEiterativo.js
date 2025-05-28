
function FatorialIterativo (numero) {
    // 5
    // 5 x 4 x 3 x 2 x 1;
    //   20 x 3
    //       60 x 2
    //            120 x 1
    let resultado = numero;

    // let i = numero - 1;
    // while (i != 1) {

    //     resultado = resultado * i;
        
    //     i--;
    // }

    if (numero == 0 || numero == 1) {

        return 1;
    }
    for (let i = numero - 1; i > 1; i--){

        resultado = resultado * i;
        

        }

    return resultado;
}

const fatorialRecursivo = (numero) => {


    if (numero == 1 || numero == 0) {

        return 1;

    }

    return numero * fatorialRecursivo(numero - 1)

}

console.log(FatorialIterativo(0));
console.log(fatorialRecursivo(0));



