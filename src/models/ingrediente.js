import { db } from '../db.js';

export const ingredienteModel = {

    listarTodos() {
        return db.prepare(
            'SELECT * FROM ingredientes'
        ).all();
    },

    buscarPorId(id) {
        return db.prepare(
            'SELECT * FROM ingredientes WHERE id = ?'
        ).get(id) || null;
    },

    inserir({ nome, quantidade }) {

        const r =
            db.prepare(`
                INSERT INTO ingredientes
                (nome, quantidade)
                VALUES (?, ?)
            `)
            .run(
                nome,
                quantidade
            );

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
            UPDATE ingredientes
            SET nome = ?,
                quantidade = ?
            WHERE id = ?
        `)
        .run(
            novo.nome,
            novo.quantidade,
            id
        );

        return this.buscarPorId(id);
    },

    remover(id) {

        const r =
            db.prepare(
                'DELETE FROM ingredientes WHERE id = ?'
            )
            .run(id);

        return r.changes > 0;
    }
};