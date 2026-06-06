const lista =
    document.querySelector(
        '#lista-categorias'
    );

function criarLinha(
    categoria,
    aoRemover
) {

    const li =
        document.createElement('li');

    li.className =
        'list-group-item d-flex justify-content-between';

    li.innerHTML =
        `<span>${categoria.nome}</span>`;

    const btn =
        document.createElement('button');

    btn.className =
        'btn btn-danger btn-sm';

    btn.textContent =
        'Excluir';

    btn.onclick =
        () => aoRemover(categoria.id);

    li.appendChild(btn);

    return li;
}

export const categoriaView = {

    render(categorias, aoRemover) {

        lista.innerHTML = '';

        categorias.forEach(categoria => {

            lista.appendChild(
                criarLinha(
                    categoria,
                    aoRemover
                )
            );
        });
    }
};