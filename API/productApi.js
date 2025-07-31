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
    {id: 1, nome: 'Mouse', preco: 300}

]

//Rota Get - listar todos os produtos

//essa função registra uma rota do tipo GET no seu servidor express
app.get('/produtos', (req, res) => {
    res.json(produtos);
})



