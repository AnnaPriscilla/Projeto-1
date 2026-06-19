import { receitaService }
from './services/receitaService.js';

import { categoriaService }
from './services/categoriaService.js';

import { ingredienteService }
from './services/ingredienteService.js';

import { comentarioService }
from './services/comentarioService.js';

import { receitaView }
from './ui/receitaView.js';

import { categoriaView }
from './ui/categoriaView.js';

import { ingredienteView }
from './ui/ingredienteView.js';

import { comentarioView }
from './ui/comentarioView.js';


// =======================
// RECEITAS
// =======================

async function carregarReceitas() {

    const receitas =
        await receitaService.listar();

    receitaView.render(
        receitas,
        removerReceita
    );
}

async function removerReceita(id) {

    await receitaService.remover(id);

    carregarReceitas();
}

receitaView.onSubmit(

    async dados => {

        await receitaService.criar(
            dados.nome
        );

        receitaView.limparFormulario();

        carregarReceitas();
    }
);


// =======================
// CATEGORIAS
// =======================

async function carregarCategorias() {

    const categorias =
        await categoriaService.listar();

    categoriaView.render(
        categorias,
        removerCategoria
    );
}

async function removerCategoria(id) {

    await categoriaService.remover(id);

    carregarCategorias();
}

document
    .querySelector('#form-categoria')
    .addEventListener(

        'submit',

        async e => {

            e.preventDefault();

            const nome =
                document.querySelector(
                    '#categoria-nome'
                ).value;

            await categoriaService.criar(
                nome
            );

            e.target.reset();

            carregarCategorias();
        }
    );


// =======================
// INGREDIENTES
// =======================

async function carregarIngredientes() {

    const ingredientes =
        await ingredienteService.listar();

    ingredienteView.render(
        ingredientes,
        removerIngrediente
    );
}

async function removerIngrediente(id) {

    await ingredienteService.remover(id);

    carregarIngredientes();
}

document
    .querySelector('#form-ingrediente')
    .addEventListener(

        'submit',

        async e => {

            e.preventDefault();

            const nome =
                document.querySelector(
                    '#ingrediente-nome'
                ).value;

            const quantidade =
                document.querySelector(
                    '#ingrediente-quantidade'
                ).value;

            await ingredienteService.criar(
                nome,
                quantidade
            );

            e.target.reset();

            carregarIngredientes();
        }
    );


// =======================
// COMENTÁRIOS
// =======================

async function carregarComentarios() {

    const comentarios =
        await comentarioService.listar();

    comentarioView.render(
        comentarios,
        removerComentario
    );
}

async function removerComentario(id) {

    await comentarioService.remover(id);

    carregarComentarios();
}

document
    .querySelector('#form-comentario')
    .addEventListener(

        'submit',

        async e => {

            e.preventDefault();

            const texto =
                document.querySelector(
                    '#comentario-texto'
                ).value;

            await comentarioService.criar(
                texto,
                1,
                1
            );

            e.target.reset();

            carregarComentarios();
        }
    );


// =======================
// INICIALIZAÇÃO
// =======================

carregarReceitas();

carregarCategorias();

carregarIngredientes();

carregarComentarios();