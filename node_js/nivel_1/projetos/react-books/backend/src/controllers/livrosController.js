import { getLivroPorId, getTodosLivros, addLivros, patchLivros, deleteLivros } from "../services/livro.js";

class livrosController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await getTodosLivros();
            if (!listaLivros) {
                res.status(200).send("Não há dados registrados");
            }
            res.status(200).json({ livros: listaLivros })
        } catch (error) {
            res.status(500).send("Erro interno do servidor");
        }
    }

    static async listarLivrosPorId(req, res) {
        const id = req.params.id;
        try {
            const livroDesejado = await getLivroPorId(id);
            console.log(livroDesejado);
            res.status(200).json({ livro: livroDesejado });
        } catch (error) {
            res.status(500).send("Erro interno do servidor");
        }
    }

    static async adicionarLivro(req, res) {
        try {
            await addLivros(req.body);
            res.status(200).send("sucesso");
        } catch (error) {
            res.status(500).send("Erro interno do servidor");
        }
    }

    static async atualizaLivros(req, res) {
        const id = req.params.id;
        const atualizacao = req.body
        try {
            await patchLivros(id, atualizacao);
            res.status(200).send("Livro atualizado com sucesso!");
        } catch (error) {
            res.status(500).send("Erro interno do servidor");
        }
    }

    static async removerLivro(req, res){
        const id = req.params.id;
        try {
            await deleteLivros(id);
            res.status(200).send("Livro removido com sucesso!")
        } catch (error) {
            res.status(500).send("Erro interno do servidor");
        }
    }

}

export default livrosController;