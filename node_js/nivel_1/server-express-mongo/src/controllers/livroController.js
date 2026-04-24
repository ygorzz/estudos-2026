// Gerenciar as ações possíveis desse model 
// Necessário a importação do model

import livro from '../models/Livro.js';
import { autor } from '../models/Autor.js'

// Classes sempre começam com maiúsculas
class LivroController {

    // !!! Sempre que estiver retornando dados, usamos .json
    // !!! Se estiver retornando um texto/html/arquivo usamos .send

    // static -> permite usar o método sem precisar instanciar a classe (new Classe)
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({}); // find -> metodo assíncrono que busca na coleção dados, nesse caso ({}), busca todos dados.
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - FALHA AO LISTAR OS LIVROS` });
        }
    };

    static async buscarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroBuscado = await livro.findById(id);
            res.status(200).json({ message: 'Livro encontrado!', livro: livroBuscado });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - FALHA AO BUSCAR LIVRO` });
        }
    };

    static async adicionarLivro(req, res) {
        // Vem com o id do autor na prop 'autor' e os outros dados do livro
        const novoLivro = req.body;
        try {
            // Busca o objeto interiio do autor pelo id
            const autorEncontrado = await autor.findById(novoLivro.autor);
            // Usa o spread operator para copiar os dados do livro e alterar a prop 'autor' para o objeto autor completo
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};
            const livroAdicionado = await livro.create(livroCompleto);
            // 201 -. server criou um novo recurso
            res.status(201).json({ message: "Livro cadastrado com sucesso", livro: livroCompleto });
        } catch (error) {
            // 500 -> algum erro interno no servidor
            res.status(500).json({ message: `${error.message} - FALHA AO CADASTRAR LIVRO` });
        }
    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            // findByIdAndUpdate -> por padrão retorna o objeto antigo encontrado por id e não os dados atualizados.
            // {new: true} -> faz com que o metodo retorne os dados atualizados.
            const livroAtualizado = await livro.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json({ message: 'Livro atualizado', livro: livroAtualizado })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - FALHA AO ATUALIZAR LIVRO` })
        }
    };

    static async removerLivro(req, res) {
        try {
            const id = req.params.id;
            // Retorna o objeto livro deletado
            const livroDeletado = await livro.findByIdAndDelete(id);
            res.status(200).json({ message: 'Livro removido', livro: livroDeletado });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - FALHA AO REMOVER O LIVRO` });
        }
    };

    static async buscarLivroPorEditora (req, res){
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({editora}) // comop chave e valor tem o mesmo nome podemos escrever apenas uma vez
            res.status(200).json({message: 'Busca concluída com sucesso', livros: livrosPorEditora});
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO BUSCAR LIVROS`});
        }
    }
}

export default LivroController;