import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

// Schema -> define a estrutura(objeto com propriedades) que a coleção terá no BD. 
const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId}, // ObjectId -> tipo do mongodb para ids únicos
    titulo: {type: String, required: true}, // required -> define propriedade como obrigatória
    editora: {type: String},
    paginas: {type: Number},
    autor: autorSchema // usando referencing -> autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores'}
}, {versionKey: false}); // mongoose não cria a propriedade __v automaticamente, como é por padrão

// Interaje com o BD e define livroSchema como a estrutura da coleção livros.
const livro = mongoose.model("livros", livroSchema);

export default livro;