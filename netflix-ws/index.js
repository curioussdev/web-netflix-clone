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



app.listen(3000, ()=>{
    console.log("Server Rodando")
});