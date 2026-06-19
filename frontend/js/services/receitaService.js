import { api }
from '../api.js';

export const receitaService = {

    listar() {
        return api.getReceitas();
    },

    criar(nome) {

        return api.criarReceita({
            nome
        });
    },

    remover(id) {

        return api.removerReceita(id);
    }
};