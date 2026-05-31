import { categoriaModel } from '../models/categoria.js';

export const categoriaService = {

    listarTodas() {
        return categoriaModel.listarTodas();
    },

    buscarPorId(id) {

        const categoria =
            categoriaModel.buscarPorId(id);

        if (!categoria) {

            const err =
                new Error('Categoria não encontrada');

            err.status = 404;

            throw err;
        }

        return categoria;
    },

    criar({ nome }) {

        if (!nome) {

            const err =
                new Error('Nome da categoria é obrigatório');

            err.status = 400;

            throw err;
        }

        return categoriaModel.inserir({ nome });
    },

    atualizar(id, dados) {

        const categoria =
            categoriaModel.atualizar(id, dados);

        if (!categoria) {

            const err =
                new Error('Categoria não encontrada');

            err.status = 404;

            throw err;
        }

        return categoria;
    },

    remover(id) {

        const removida =
            categoriaModel.remover(id);

        if (!removida) {

            const err =
                new Error('Categoria não encontrada');

            err.status = 404;

            throw err;
        }
    }
};