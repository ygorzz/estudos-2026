import mongoose from "mongoose";

// Cria a estrutura da coleção
const autorSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, required: [true, "Nome do autor é obrigatório"]},
  nacionalidade: {type: String}
}, {versionKey: false});

// Cria o modelo
const autores = mongoose.model("autores", autorSchema);

export {autores, autorSchema};