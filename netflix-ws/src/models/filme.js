const mongoose = require('mongoose');


const Filme = mongoose.model('Filme', {
    titulo: {
        type: String,
        required: true, // impede que se insere o campo  título vazio na BD
    },
    atores: Array,
    ano: Number,
    detalhes: Object,
    premiacoes: [Object],
});

module.exports = Filme;