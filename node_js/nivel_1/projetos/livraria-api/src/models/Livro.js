import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const MIN_PAGINAS = 1;
const MAX_PAGINAS = 5000;

// Schema -> define a estrutura(objeto com propriedades) que a coleção terá no BD. 
const livroSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId}, // ObjectId -> tipo do mongodb para ids únicos
  titulo: {type: String, required: [true, "Título do livro é obrigatório"]}, // required[true, ""] -> define prop como obrigatoria e uma msg de erro caso a prop não seja enviada pelo usuário
  editora: {type: String,
    // Defini valores permitidos e a mensgaem de erro relacionada
    enum: {
      values: ["Harper Collins", "Vozes"],
      message: "A editora {VALUE} não é uma editora permitida"
    }
  },
  paginas: {type: Number,
    // Defini range de permitido e as mensagens de erros relacionadas
    // Validação personalizada:
    validate: {
      // retorna true/false
      validator: (valor) => {
        return valor >= MIN_PAGINAS && valor <= MAX_PAGINAS;
      },
      // se validator retornar false:
      message: "O número de páginas deve estar entre 1 e 5000. Valor fornecido {VALUE}"
    }
    // Validação nativa:
    // min: [1, "O número de páginas deve estar entre 1 e 5000. Valor fornecido {VALUE}"],
    // max: [5000, "O número de páginas deve estar entre 1 e 5000. Valor fornecido {VALUE}"]
    
  },
  autor: autorSchema // usando referencing -> autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores'}
}, {versionKey: false}); // mongoose não cria a propriedade __v automaticamente, como é por padrão

// Interaje com o BD e define livroSchema como a estrutura da coleção livros.
const livros = mongoose.model("livros", livroSchema);

export default livros;