const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { json } = require('express');
const routes = require('./src/routes/filmes.routes')

const app = express();
app.use(bodyParser.json()); // serve para ajudar o servidor a recuperar exactamente o que está mandando, no caso do insomnia
app.use(morgan('dev')); // morgan serve para visualizar as rotas acessadas
app.use('/', routes);






app.listen(3000, ()=>{
    console.log("Server Rodando")
});