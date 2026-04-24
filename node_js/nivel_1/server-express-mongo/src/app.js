// Express oferece mais recursos para trabalhar com rotas e reqs HTTP
import express from 'express';
import conectaNoBD from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaNoBD();

// on -> espera por um evento todas as vezes que o mesmo ocorrer
conexao.on("error", (erro) => {
    console.error('Ocorreu um erro de conexão:', erro);
});

// once -> espera por um evento e, quando ocorrer pela primeira vez, para de esperar
conexao.once("open", () => {
    console.log('Conexão feita com sucesso!');
});

// Cria instancia do express
const app = express();   
// Inicia e Centraliza as rotas
routes(app); 

export default app;
