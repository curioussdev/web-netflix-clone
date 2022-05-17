const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./src/services/database');
const cors = require('cors');
const app = express();

const filmeRoutes = require('./src/routes/filmes.routes');
const usuarioRoutes = require('./src/routes/usuarios.routes');

//MIDDLEWARES
app.use(bodyParser.json()); // serve para ajudar o servidor a recuperar exactamente o que está mandando, no caso do insomnia
app.use(cors()); // para control de acesso no front
app.use(morgan('dev')); // morgan serve para visualizar as rotas acessadas


// ROUTES
app.use('/', filmeRoutes);
app.use('/usuario', usuarioRoutes);


app.listen(3000, ()=>{
    console.log("Server Rodando")
});