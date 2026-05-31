import { ingredienteModel } from '../models/ingrediente.js';

export const ingredienteService = {

    listarTodos() {
        return ingredienteModel.listarTodos();
    },

    buscarPorId(id) {

        const ingrediente =
            ingredienteModel.buscarPorId(id);

        if (!ingrediente) {

            const err =
                new Error('Ingrediente não encontrado');

            err.status = 404;

            throw err;
        }

        return ingrediente;
    },

    criar({ nome, quantidade }) {

        if (!nome) {

            const err =
                new Error('Nome do ingrediente é obrigatório');

            err.status = 400;

            throw err;
        }

        return ingredienteModel.inserir({
            nome,
            quantidade
        });
    },

    atualizar(id, dados) {

        const ingrediente =
            ingredienteModel.atualizar(id, dados);

        if (!ingrediente) {

            const err =
                new Error('Ingrediente não encontrado');

            err.status = 404;

            throw err;
        }

        return ingrediente;
    },

    remover(id) {

        const removido =
            ingredienteModel.remover(id);

        if (!removido) {

            const err =
                new Error('Ingrediente não encontrado');

            err.status = 404;

            throw err;
        }
    }
};