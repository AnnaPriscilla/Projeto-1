let ingredientes = [];

let nextId = 1;

export const ingredienteModel = {

    listarTodos() {
        return ingredientes;
    },

    buscarPorId(id) {
        return ingredientes.find(i => i.id === id) || null;
    },

    inserir({ nome, quantidade }) {

        const ingrediente = {
            id: nextId++,
            nome,
            quantidade
        };

        ingredientes.push(ingrediente);

        return ingrediente;
    },

    atualizar(id, dados) {

        const indice =
            ingredientes.findIndex(i => i.id === id);

        if (indice === -1) return null;

        ingredientes[indice] = {
            ...ingredientes[indice],
            ...dados,
            id
        };

        return ingredientes[indice];
    },

    remover(id) {

        const tamanho =
            ingredientes.length;

        ingredientes =
            ingredientes.filter(i => i.id !== id);

        return ingredientes.length < tamanho;
    }
};