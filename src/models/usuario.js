import { db } from '../db.js';

export const usuarioModel = {

    listarTodos() {
        return db
            .prepare(
                'SELECT * FROM usuarios'
            )
            .all();
    },

    buscarPorId(id) {

        return db
            .prepare(
                'SELECT * FROM usuarios WHERE id = ?'
            )
            .get(id) || null;
    },

    inserir({ nome, email, senha }) {

        const r =
            db.prepare(`
                INSERT INTO usuarios
                (nome, email, senha)
                VALUES (?, ?, ?)
            `)
            .run(nome, email, senha);

        return this.buscarPorId(
            r.lastInsertRowid
        );
    },

    atualizar(id, dados) {

        const atual =
            this.buscarPorId(id);

        if (!atual)
            return null;

        const novo = {
            ...atual,
            ...dados
        };

        db.prepare(`
            UPDATE usuarios
            SET nome = ?,
                email = ?,
                senha = ?
            WHERE id = ?
        `)
        .run(
            novo.nome,
            novo.email,
            novo.senha,
            id
        );

        return this.buscarPorId(id);
    },

    remover(id) {

        const r =
            db.prepare(`
                DELETE FROM usuarios
                WHERE id = ?
            `)
            .run(id);

        return r.changes > 0;
    }
};