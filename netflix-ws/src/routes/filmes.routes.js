
const express = require('express');
const router = express.Router();



// PEGAR SOMENTE REGISTROS OCM ID
router.get('/:id', (req, res) => {
    const id = req.params.id; // pegar o id da rota
    res.json({mensagem: ` PEGAR SOMENTE REGISTROS COM ID ${id}`})
});

// CRIAR UM REGISTRO
router.post('/', (req, res) => {
    const body = req.body;
    res.json(body)
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
