import { API_URL } from './config.js';

async function request(
    caminho,
    opcoes = {}
) {

    const resposta =
        await fetch(
            `${API_URL}${caminho}`,
            {
                headers: {
                    'Content-Type':
                        'application/json'
                },

                ...opcoes
            }
        );

    if (!resposta.ok) {

        throw new Error(
            `Erro ${resposta.status}`
        );
    }

    if (resposta.status === 204)
        return null;

    return resposta.json();
}

export const api = {

    // RECEITAS

    getReceitas() {
        return request('/receitas');
    },

    criarReceita(dados) {

        return request('/receitas', {
            method: 'POST',
            body: JSON.stringify(dados)
        });
    },

    removerReceita(id) {

        return request(`/receitas/${id}`, {
            method: 'DELETE'
        });
    },

    // CATEGORIAS

    getCategorias() {
        return request('/categorias');
    },

    criarCategoria(dados) {

        return request('/categorias', {
            method: 'POST',
            body: JSON.stringify(dados)
        });
    },

    removerCategoria(id) {

        return request(`/categorias/${id}`, {
            method: 'DELETE'
        });
    },

    // INGREDIENTES

    getIngredientes() {
        return request('/ingredientes');
    },

    criarIngrediente(dados) {

        return request('/ingredientes', {
            method: 'POST',
            body: JSON.stringify(dados)
        });
    },

    removerIngrediente(id) {

        return request(`/ingredientes/${id}`, {
            method: 'DELETE'
        });
    },

    // COMENTÁRIOS

    getComentarios() {
        return request('/comentarios');
    },

    criarComentario(dados) {

        return request('/comentarios', {
            method: 'POST',
            body: JSON.stringify(dados)
        });
    },

    removerComentario(id) {

        return request(`/comentarios/${id}`, {
            method: 'DELETE'
        });
    }
};