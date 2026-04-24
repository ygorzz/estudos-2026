import { autor } from '../models/Autor.js';

class AutorController {

    static async listarAutores (req, res){
        try {
            const listaAutores = await autor.find({});
            res.status(200).json({autores: listaAutores});
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO LISTAR AUTORES`});
        }

    };

    static async buscarAutorPorId (req, res){
        try {
            const id = req.params.id;
            const autorBuscado = await autor.findById(id);
            res.status(200).json({message: 'Autor encontrado', autor: autorBuscado});
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO BUSCAR AUTOR`})
        }
    };

    static async adicionarAutor (req, res){
        try {
            const autorAdicionado = await autor.create(req.body);
            res.status(201).json({message: 'Autor adicionado', autor: autorAdicionado });
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO ADICIONAR AUTOR`});
        }
    };

    static async atualizarAutor (req, res){
        try {
            const id = req.params.id;
            // {new: true} -> faz com que findByIdAndUpdate retorne os dados atualizados e não os antigos
            const autorAtualizado = await autor.findByIdAndUpdate(id, req.body, {new: true});
            res.status(200).json({message: 'Autor atualizado', autor: autorAtualizado});
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO ATUALIZAR AUTOR`})        
        }
    };

    static async removerAutor (req, res){
        try {
            const id = req.params.id;
            const autorRemovido = await autor.findByIdAndDelete(id);
            res.status(200).json({message: 'Autor removido', autor: autorRemovido});
        } catch (error) {
            res.status(500).json({message: `${error.message} - FALHA AO REMOVER AUTOR`})
        }
    };

}

export default AutorController;