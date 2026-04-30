import mongoose from 'mongoose';

// Cria a estrutura da coleção
const autorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    nacionalidade: {type: String}
}, {versionKey: false});

// Cria o modelo
const autor = mongoose.model("autores", autorSchema);

export {autor, autorSchema};