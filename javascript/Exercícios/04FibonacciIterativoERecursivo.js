//numero é quantos números da sequencia fibonacci quer que gere.
function FibonacciIterativo(numero) {

    let num1 = 0;
    let num2 = 1;

    for (let i = 0; i < numero; i++){

        let num3;
        if (i == 0) {
            console.log(`${num1}, `);
        }
            else if (i == 1){
                console.log(`${num2}, `);
            }   
                else{
                      num3 = num1 + num2;
                      console.log(`${num3}, `);
                      num1 = num2;
                      num2 = num3;
                }
    }   

}

FibonacciIterativo(10);

