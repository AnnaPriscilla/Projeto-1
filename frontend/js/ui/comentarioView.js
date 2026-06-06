const lista =
    document.querySelector(
        '#lista-comentarios'
    );

function criarLinha(
    comentario,
    aoRemover
) {

    const li =
        document.createElement('li');

    li.className =
        'list-group-item d-flex justify-content-between';

    li.innerHTML = `
        <span>
            ${comentario.texto}
        </span>
    `;

    const btn =
        document.createElement('button');

    btn.className =
        'btn btn-danger btn-sm';

    btn.textContent =
        'Excluir';

    btn.onclick =
        () => aoRemover(
            comentario.id
        );

    li.appendChild(btn);

    return li;
}

export const comentarioView = {

    render(
        comentarios,
        aoRemover
    ) {

        lista.innerHTML = '';

        comentarios.forEach(
            comentario => {

                lista.appendChild(
                    criarLinha(
                        comentario,
                        aoRemover
                    )
                );
            }
        );
    }
};