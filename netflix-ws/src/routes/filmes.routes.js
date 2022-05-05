
const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');



//RECUPERAR TODOS OS REGISTROS
router.get('/', (req, res) => {
    //Recuperar todos os registros
    res.json({ mensagem: "PEGAR TODOS OS REGISTROS"})
});


// PEGAR SOMENTE REGISTROS OCM ID
router.get('/:id', (req, res) => {
    const id = req.params.id; // pegar o id da rota
    res.json({mensagem: ` PEGAR SOMENTE REGISTROS COM ID ${id}`})
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
