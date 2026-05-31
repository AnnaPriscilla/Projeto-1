import { usuarioModel } from '../models/usuario.js';

export const usuarioService = {

    listarTodos() {
        return usuarioModel.listarTodos();
    },

    buscarPorId(id) {

        const usuario =
            usuarioModel.buscarPorId(id);

        if (!usuario) {
            const err =
                new Error('Usuário não encontrado');

            err.status = 404;

            throw err;
        }

        return usuario;
    },

    criar({ nome, email, senha }) {

        if (!nome || !email || !senha) {

            const err =
                new Error('Nome, email e senha são obrigatórios');

            err.status = 400;

            throw err;
        }

        return usuarioModel.inserir({
            nome,
            email,
            senha
        });
    },

    atualizar(id, dados) {

        const usuario =
            usuarioModel.atualizar(id, dados);

        if (!usuario) {

            const err =
                new Error('Usuário não encontrado');

            err.status = 404;

            throw err;
        }

        return usuario;
    },

    remover(id) {

        const removido =
            usuarioModel.remover(id);

        if (!removido) {

            const err =
                new Error('Usuário não encontrado');

            err.status = 404;

            throw err;
        }
    }
};