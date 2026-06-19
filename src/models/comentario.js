import { db } from '../db.js';

export const comentarioModel = {

    listarTodos() {
        return db.prepare(
            'SELECT * FROM comentarios'
        ).all();
    },

    buscarPorId(id) {
        return db.prepare(
            'SELECT * FROM comentarios WHERE id = ?'
        ).get(id) || null;
    },

    inserir({
        texto,
        usuarioId,
        receitaId
    }) {

        const r =
            db.prepare(`
                INSERT INTO comentarios
                (
                    texto,
                    usuarioId,
                    receitaId
                )
                VALUES (?, ?, ?)
            `)
            .run(
                texto,
                usuarioId,
                receitaId
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
            UPDATE comentarios
            SET texto = ?,
                usuarioId = ?,
                receitaId = ?
            WHERE id = ?
        `)
        .run(
            novo.texto,
            novo.usuarioId,
            novo.receitaId,
            id
        );

        return this.buscarPorId(id);
    },

    remover(id) {

        const r =
            db.prepare(
                'DELETE FROM comentarios WHERE id = ?'
            )
            .run(id);

        return r.changes > 0;
    }
};