//desestruturação

const {name : Nome, age: idade} = obj;
//ou const {name, age} = obj;

console.log(Nome);

const array = [1, 2, 3];

// Desestruturando o array

const [a, b, c] = array;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
