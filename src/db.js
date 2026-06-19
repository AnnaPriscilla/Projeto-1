import { DatabaseSync } from 'node:sqlite';

export const db =
    new DatabaseSync('receitas.db');

db.exec(`
    PRAGMA foreign_keys = ON;
`);

db.exec(`

CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS receitas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS ingredientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    quantidade TEXT
);

CREATE TABLE IF NOT EXISTS comentarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    texto TEXT NOT NULL,
    usuarioId INTEGER,
    receitaId INTEGER,

    FOREIGN KEY (usuarioId)
        REFERENCES usuarios(id),

    FOREIGN KEY (receitaId)
        REFERENCES receitas(id)
);

`);