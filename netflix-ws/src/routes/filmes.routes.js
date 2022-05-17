const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');
const Temporada = require('../models/temporada');
const _ = require('underscore'); // para misturar aleatoriamente os resultados


//RECUPERAR TELA HOME
router.get('/home', async (req, res) => {
    try {   

        // Recuperar filmes
        let filmes = await Filme.find({}); // pega todos os filmes na BD
        let finalFilmes = [];

        //Recuperar temporadas
        for(let filme of filmes) {
            const temporadas = await Temporada.find({
                filme_id: filme._id
            });

            const newFilme = { ...filme._doc, temporadas}; // pegar todos os filmes e temporadas como doc
            finalFilmes.push(newFilme); 
        };

        //misturar resultados aleatóriamente com a lib underscore
        finalFilmes = _.shuffle(finalFilmes); // mistura aleatoriamente os objecto do finalFilmes

        //Filme principal da capa
        const principal = finalFilmes[0]; 

        // separar linha de filmes (sessões)
        const sessoes = _.chunk(finalFilmes, 5); // o chunck serve para limitar a quantidade de elementos no array, e cria outro array para colocar o restante dos elementos definidos

        res.json({ error: false, principal, sessoes});

    } catch(err) {
        res.json({error: true, message: err.message});
    }
});




//RECUPERAR TODOS OS REGISTROS
router.get('/', async (req, res) => {
    try {
        const filmes = await Filme.find({}) // filtrando todos so filmes do banco
        res.json({ error: false, filmes })
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
    
});


// PEGAR SOMENTE REGISTROS OCM ID
router.get('/:id', async (req, res) => {
    try{

        const id = req.params.id; // pegar o id na/da rota
        const filme = await Filme.findById(id);
        res.json({ error: false, filme})

    } catch (err) {
        
        res.json({ error: true, message: err. message });

    };
    
});

// CRIAR UM REGISTRO
router.post('/', async (req, res) => {
    try {
        const filme = req.body;
        const response = await new Filme(filme).save() // salva a colection na BD
        res.json({ error: false, filme: response})
    } catch (err) {
        res.json({ error: true, message: err.message});
    };
    
});

//ACTUALIZAR REGISTRO PELO ID
router.put('/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const filme = req.body; // pegando o filme para poder actualizar
        const filmeActualizado = await Filme.findByIdAndUpdate( id, filme);
        res.json({ error: false, filmeActualizado});

    } catch (err) {
        res.json({ error: true, message: err.message })
    }
    
    
});

//DELE TAR SOMENTE REGISTRO COM ID
router.delete('/:id', (req, res) => {
    try {

        const id = req.params.id;
        const deleted = Filme.findByIdAndDelete (id);
        res.json({ error: false });

    } catch (err) {
        res.json({ error: true, mensagem: err.message })
    }
    
    
});



module.exports = router;
