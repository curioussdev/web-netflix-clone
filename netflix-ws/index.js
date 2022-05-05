const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { json } = require('express');
const routes = require('./src/routes/filmes.routes')
const mongoose = require('mongoose'); // é uma ferramenta/camada js para trabalhar com o mongoDB

mongoose.connect('mongodb://localhost:27017/netflix', {
    useNewUrlParser: true,
    useUnifiedTipology: true,
});


const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));



const app = express();
app.use(bodyParser.json()); // serve para ajudar o servidor a recuperar exactamente o que está mandando, no caso do insomnia
app.use(morgan('dev')); // morgan serve para visualizar as rotas acessadas
app.use('/', routes);






app.listen(3000, ()=>{
    console.log("Server Rodando")
});