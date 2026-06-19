import { api } from '../api.js';

export const comentarioService = {

    listar() {
        return api.getComentarios();
    },

    criar(texto, usuarioId, receitaId) {

        return api.criarComentario({
            texto,
            usuarioId,
            receitaId
        });
    },

    remover(id) {

        return api.removerComentario(id);
    }
};