const minhaPromise = Promise(
    ()=> {
        const aceito = true;
        if (aceito){
            resolve("Deu certio");
        } else {
            rejected("Deu errado");
        }
    }
)

console.log( minhaPromise.then(mensagem ))

//Código Gabarito:

const minhaPromisew = new Promise((resolve, reject) => {
  const sucesso = true;

  if (sucesso) {
    resolve("Tarefa concluída!");
  } else {
    reject("Algo deu errado...");
  }
});


minhaPromisew.then((mensagem) => {
  console.log(mensagem); // "Tarefa concluída!"
}).catch((erro) => {
  console.error(erro);
});