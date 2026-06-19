import { api } from '../api.js';

export const ingredienteService = {

    listar() {
        return api.getIngredientes();
    },

    criar(nome, quantidade) {

        return api.criarIngrediente({
            nome,
            quantidade
        });
    },

    remover(id) {

        return api.removerIngrediente(id);
    }
};