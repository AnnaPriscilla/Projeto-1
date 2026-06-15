import { db } from '../db.js';

export const receitaModel = {

    listarTodas() {

        return db
            .prepare(
                'SELECT * FROM receitas'
            )
            .all();
    },

    buscarPorId(id) {

        return db
            .prepare(
                'SELECT * FROM receitas WHERE id = ?'
            )
            .get(id) || null;
    },

    inserir(dados) {

        const r =
            db.prepare(`
                INSERT INTO receitas
                (nome)
                VALUES (?)
            `)
            .run(dados.nome);

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
            UPDATE receitas
            SET nome = ?
            WHERE id = ?
        `)
        .run(
            novo.nome,
            id
        );

        return this.buscarPorId(id);
    },

    remover(id) {

        const r =
            db.prepare(`
                DELETE FROM receitas
                WHERE id = ?
            `)
            .run(id);

        return r.changes > 0;
    }
};