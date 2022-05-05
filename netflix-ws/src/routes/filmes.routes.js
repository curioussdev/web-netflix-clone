
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
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: ` ACTUALIZAR SOMENTE REGISTROS COM ID ${id}`})
});

//DELE TAR SOMENTE REGISTRO COM ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: ` DELETAR SOMENTE REGISTROS COM ID ${id}`})
});



module.exports = router;
