import { comentarioModel } from '../models/comentario.js';

export const comentarioService = {

    listarTodos() {
        return comentarioModel.listarTodos();
    },

    buscarPorId(id) {

        const comentario =
            comentarioModel.buscarPorId(id);

        if (!comentario) {

            const err =
                new Error('Comentário não encontrado');

            err.status = 404;

            throw err;
        }

        return comentario;
    },

    criar({ texto, usuarioId, receitaId }) {

        if (!texto) {

            const err =
                new Error('Texto do comentário é obrigatório');

            err.status = 400;

            throw err;
        }

        return comentarioModel.inserir({
            texto,
            usuarioId,
            receitaId
        });
    },

    atualizar(id, dados) {

        const comentario =
            comentarioModel.atualizar(id, dados);

        if (!comentario) {

            const err =
                new Error('Comentário não encontrado');

            err.status = 404;

            throw err;
        }

        return comentario;
    },

    remover(id) {

        const removido =
            comentarioModel.remover(id);

        if (!removido) {

            const err =
                new Error('Comentário não encontrado');

            err.status = 404;

            throw err;
        }
    }
};