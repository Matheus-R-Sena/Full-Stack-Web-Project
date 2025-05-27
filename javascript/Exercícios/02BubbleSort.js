// BubbleSort = (vetor) => {

// for (i = 0; i < vetor.length; i++){
//     for (j = 0; j < vetor.length; j++)
//         if (vetor[i] > vetor[j + 1])
//             {
//             let prov = vetor[i];
//             vetor[i] = vetor[j + 1];
//             vetor[j + 1] = prov;
//             console.log(`Troquei ${vetor[i]} na posição ${i} por ${vetor[j+1]} na posicção ${j + 1}`);
//             }
//     }   
// }
const bubbleSort = (vetor) => {
    let i = 0;
    while (i < vetor.length) {

        let j = 0;
        while(j < vetor.length){

            if(vetor[j] > vetor[j + 1]){

                let prov = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = prov;
            }
        j++;   
    }
    i++;
    }
}



const vetor = [4, 5, 2, 1];
const numeros = [23, 5, 12, 88, 3, 34, 90, 17, 8, 45, 76, 29, 1, 99, 21, 65, 38, 7, 19, 54, 11, 6, 40, 84, 31, 70, 92, 25, 36, 15, 47, 73, 13, 2, 68, 59, 80, 9, 27, 58];


console.log(vetor);

bubbleSort(numeros);

console.log(numeros);


































