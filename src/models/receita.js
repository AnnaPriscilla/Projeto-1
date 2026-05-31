let receitas = [];
let nextId = 1;

export const receitaModel = {

    listarTodas() {
        return receitas;
    },

    buscarPorId(id) {
        return receitas.find(r => r.id === id) || null;
    },

    inserir(dados) {

        const receita = {
            id: nextId++,
            ...dados
        };

        receitas.push(receita);

        return receita;
    },

    atualizar(id, dados) {

        const indice =
            receitas.findIndex(r => r.id === id);

        if (indice === -1) return null;

        receitas[indice] = {
            ...receitas[indice],
            ...dados,
            id
        };

        return receitas[indice];
    },

    remover(id) {

        const tamanho =
            receitas.length;

        receitas =
            receitas.filter(r => r.id !== id);

        return receitas.length < tamanho;
    }
};