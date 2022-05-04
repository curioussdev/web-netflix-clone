const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { json } = require('express');


const app = express();
app.use(bodyParser.json()); // serve para ajudar o servidor a recuperar exactamente o que está mandando, no caso do insomnia
app.use(morgan('dev')); // morgan serve para visualizar as rotas acessadas


//RECUPERAR TODOS OS REGISTROS
app.get('/', (req, res) => {
    //Recuperar todos os registros
    res.json({ mensagem: "PEGAR TODOS OS REGISTROS"})
});


// PEGAR SOMENTE REGISTROS OCM ID
app.get('/:id', (req, res) => {
    const id = req.params.id; // pegar o id da rota
    res.json({mensagem: ` PEGAR SOMENTE REGISTROS COM ID ${id}`})
});

// CRIAR UM REGISTRO
app.post('/', (req, res) => {
    const body = req.body;
    res.json(body)
});

//ACTUALIZAR REGISTRO PELO ID
app.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: ` ACTUALIZAR SOMENTE REGISTROS COM ID ${id}`})
});

//DELE TAR SOMENTE REGISTRO COM ID
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: ` DELETAR SOMENTE REGISTROS COM ID ${id}`})
});

app.listen(3000, ()=>{
    console.log("Server Rodando")
});