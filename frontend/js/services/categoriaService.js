import { api } from '../api.js';

export const categoriaService = {

    listar() {
        return api.getCategorias();
    },

    criar(nome) {

        return api.criarCategoria({
            nome
        });
    },

    remover(id) {

        return api.removerCategoria(id);
    }
};