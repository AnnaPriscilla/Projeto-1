let comentarios = [];

let nextId = 1;

export const comentarioModel = {

    listarTodos() {
        return comentarios;
    },

    buscarPorId(id) {
        return comentarios.find(c => c.id === id) || null;
    },

    inserir({ texto, usuarioId, receitaId }) {

        const comentario = {
            id: nextId++,
            texto,
            usuarioId,
            receitaId
        };

        comentarios.push(comentario);

        return comentario;
    },

    atualizar(id, dados) {

        const indice =
            comentarios.findIndex(c => c.id === id);

        if (indice === -1) return null;

        comentarios[indice] = {
            ...comentarios[indice],
            ...dados,
            id
        };

        return comentarios[indice];
    },

    remover(id) {

        const tamanho =
            comentarios.length;

        comentarios =
            comentarios.filter(c => c.id !== id);

        return comentarios.length < tamanho;
    }
};