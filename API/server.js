//This line imports express into your project.
const express = require('express');

//This line will create an Express instance and its reference will be stored by app
const app = express();


app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});