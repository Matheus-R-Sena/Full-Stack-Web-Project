function BuscaLinear (varray, target){
    
    for (i = 0; i < varray.length; i++){
        if (varray[i] == target){
            console.log(`O item ${varray[i]} foi encontrado`);
        }
    }
    
}

lista = new Array (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(lista[1]);

BuscaLinear(lista, 9)