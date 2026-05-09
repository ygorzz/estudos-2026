import mongoose from "mongoose";

// Valida globalmente o valor de todos os campos String
mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor !== "",
  // path -> o campo que não passou na validação
  message: ({path}) => `O campo '${path}' foi fornecido em branco`
});

