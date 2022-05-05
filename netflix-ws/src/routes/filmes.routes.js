
const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');



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
