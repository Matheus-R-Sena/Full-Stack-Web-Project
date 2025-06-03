const vetor =  [Array(9).fill(0)];

console.log(vetor)


for (i = 0 ; i < vetor.length; i++){
    for(j = 0; j < vetor[i].length; j++)
            {
                vetor[i][j] = j;
                console.log(`vemos o elemento de índice ${j} do vetor ${i} sendo atribuido`);
            }
    
}

//console.log(vetor);

const vetor2 = [vetor, 2];

console.log(vetor2);
