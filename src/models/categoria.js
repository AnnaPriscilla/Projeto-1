let categorias = [];

let nextId = 1;

export const categoriaModel = {

    listarTodas() {
        return categorias;
    },

    buscarPorId(id) {
        return categorias.find(c => c.id === id) || null;
    },

    inserir({ nome }) {

        const categoria = {
            id: nextId++,
            nome
        };

        categorias.push(categoria);

        return categoria;
    },

    atualizar(id, dados) {

        const indice =
            categorias.findIndex(c => c.id === id);

        if (indice === -1) return null;

        categorias[indice] = {
            ...categorias[indice],
            ...dados,
            id
        };

        return categorias[indice];
    },

    remover(id) {

        const tamanho = categorias.length;

        categorias =
            categorias.filter(c => c.id !== id);

        return categorias.length < tamanho;
    }
};