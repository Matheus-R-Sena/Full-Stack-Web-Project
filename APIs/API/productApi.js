// Importat o express

const express = require('express');

//Aqui estamos importando o framework Express.

//O Express ajuda a criar servidores HTTP com rotas de forma fácil e rápida.

const app = express();
//Esse app vai ser usado para configurar as rotas, middlewares e iniciar o servidor.

app.use(express.json());
//Essa linha ativa um "middleware" que faz o Express entender dados em formato JSON no corpo das requisições.
//Por exemplo, quando enviamos dados com POST, essa linha faz o req.body funcionar.

//Simula um banco de dados
let produtos = [

    {id: 1, nome: 'Notebook', preco: 3000},
    {id: 2, nome: 'Mouse', preco: 300},
    {id: 3, nome: 'Teclado', preco: 400},
    {id: 4, nome: 'Fone', preco: 500},

]

//Rota Get - listar todos os produtos

//essa função registra uma rota do tipo GET no seu servidor express 
app.get('/produtos', (req, res) => {
    res.json(produtos);
    //PERGUNTA:: imagino que o objeto produtos que é um array de objetos seja formatado para json.
});


//Get para retornar um produto específico
app.get('/produtos/:id', (req, res) => {

    const idDesejado = req.params.id;
    
    for (let i; i < produtos.length; i++){
        if (idDesejado == produtos[i].id){
            res.json(produtos[i]);
            
        }
    }

});


//Essa função registra uma rota para criar um novo produto
app.post('/produtos', (req, res) => {
    const novoProduto = req.body;
    novoProduto.id = produtos.length + 1;
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.listen(3000, ()=>{
    console.log('A API está rodando em http://localhost:3000')
});




