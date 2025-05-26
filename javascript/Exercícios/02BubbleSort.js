BubbleSort = (vetor) => {

for (i = 0; i < vetor.length; i++){
    for (j = 0; j < vetor.length; j++)
        if (vetor[i] > vetor[j + 1]){
            let prov = vetor[i];
            vetor[i] = vetor[j + 1];
            vetor[j + 1] = prov;
            
            console.log(`Troquei ${vetor[i]} na posição ${i} por ${vetor[j+1]} na posicção ${j + 1}`)
        }
    }   
}





// [  ,  ,  ,  ,  ,  ,  ,  ]
//0  1  2  3  4  5  6  7
const vetor = [4, 3, 2, 1];
//       0  1  2  3  4  5  6

console.log(vetor);

BubbleSort(vetor);

console.log(vetor);


































