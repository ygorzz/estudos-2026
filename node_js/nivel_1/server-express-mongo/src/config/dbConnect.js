// lib que faz a conexão entre o mongodb e a nossa API
import mongoose from 'mongoose';

export default async function conectaNoBD(){
    mongoose.connect(process.env.DB_CONNECTION_STRING); // Conecta usando a variável de ambiente definida 
    // Retorna um objeto com todas as infos da conexão
    return mongoose.connection;
}