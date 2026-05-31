let usuarios = [];
let nextId = 1;

export const usuarioModel = {

    listarTodos() {
        return usuarios;
    },

    buscarPorId(id) {
        return usuarios.find(u => u.id === id) || null;
    },

    inserir({ nome, email, senha }) {

        const novo = {
            id: nextId++,
            nome,
            email,
            senha
        };

        usuarios.push(novo);

        return novo;
    },

    atualizar(id, dados) {

        const indice =
            usuarios.findIndex(u => u.id === id);

        if (indice === -1) return null;

        usuarios[indice] = {
            ...usuarios[indice],
            ...dados,
            id
        };

        return usuarios[indice];
    },

    remover(id) {

        const tamanho =
            usuarios.length;

        usuarios =
            usuarios.filter(u => u.id !== id);

        return usuarios.length < tamanho;
    }
};