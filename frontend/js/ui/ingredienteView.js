const lista =
    document.querySelector(
        '#lista-ingredientes'
    );

function criarLinha(
    ingrediente,
    aoRemover
) {

    const li =
        document.createElement('li');

    li.className =
        'list-group-item d-flex justify-content-between';

    li.innerHTML = `
        <span>
            ${ingrediente.nome}
            (${ingrediente.quantidade})
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
            ingrediente.id
        );

    li.appendChild(btn);

    return li;
}

export const ingredienteView = {

    render(
        ingredientes,
        aoRemover
    ) {

        lista.innerHTML = '';

        ingredientes.forEach(
            ingrediente => {

                lista.appendChild(
                    criarLinha(
                        ingrediente,
                        aoRemover
                    )
                );
            }
        );
    }
};