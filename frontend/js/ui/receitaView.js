const form =
    document.querySelector(
        '#form-receita'
    );

const lista =
    document.querySelector(
        '#lista-receitas'
    );

function criarLinha(
    receita,
    aoRemover
) {

    const li =
        document.createElement('li');

    li.className =
        'list-group-item d-flex justify-content-between';

    li.innerHTML = `
        <span>
            ${receita.nome}
        </span>
    `;

    const btn =
        document.createElement(
            'button'
        );

    btn.className =
        'btn btn-danger btn-sm';

    btn.textContent =
        'Excluir';

    btn.onclick =
        () => aoRemover(
            receita.id
        );

    li.appendChild(btn);

    return li;
}

export const receitaView = {

    render(listaReceitas,
           aoRemover) {

        lista.innerHTML = '';

        listaReceitas.forEach(
            receita => {

                lista.appendChild(
                    criarLinha(
                        receita,
                        aoRemover
                    )
                );
            }
        );
    },

    limparFormulario() {

        form.reset();
    },

    onSubmit(callback) {

        form.addEventListener(
            'submit',
            e => {

                e.preventDefault();

                callback({
                    nome:
                    document.querySelector(
                        '#receita-nome'
                    ).value
                });
            }
        );
    }
};