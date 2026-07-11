# Relatório de Avaliação Heurística — Projeto 1

**Autor:** Anna Priscilla Moreira de Figueiredo  
**Disciplina:** Desenvolvimento Web – UEPB 2026.1  
**Data:** 21/06/2026

**Score Lighthouse (Acessibilidade):** ____ / 100

---

# Problema 1

- **Onde:** Cadastro de receitas
- **O que observei:** Ao cadastrar ou excluir uma receita não existe nenhuma mensagem informando que a operação está sendo processada ou foi concluída.
- **Heurística violada:** #1 – Visibilidade do status do sistema
- **Gravidade:** 3
- **Correção proposta:** Exibir mensagem "Salvando...", "Receita cadastrada com sucesso" e "Receita removida com sucesso", além de desabilitar o botão enquanto a requisição estiver em andamento.
- **Evidência:** Tela principal do cadastro de receitas.

---

# Problema 2

- **Onde:** Todos os formulários
- **O que observei:** Os campos permitem envio vazio e não apresentam validação visual antes da requisição.
- **Heurística violada:** #5 – Prevenção de erros
- **Gravidade:** 3
- **Correção proposta:** Utilizar validação HTML5 (`required`) e validações em JavaScript antes do envio dos dados, exibindo mensagens amigáveis ao usuário.
- **Evidência:** Formulários de cadastro.

---

# Problema 3

- **Onde:** Exclusão de registros
- **O que observei:** Ao clicar em "Excluir", o registro é removido imediatamente sem solicitar confirmação.
- **Heurística violada:** #3 – Controle e liberdade do usuário
- **Gravidade:** 3
- **Correção proposta:** Exibir uma caixa de confirmação antes da exclusão ("Tem certeza que deseja excluir esta receita?").
- **Evidência:** Botão Excluir da lista de receitas.

---

# Problema 4

- **Onde:** Lista dinâmica de receitas
- **O que observei:** A lista atualizada pelo JavaScript não possui `aria-live`, impossibilitando que leitores de tela sejam notificados das alterações.
- **Heurística violada:** #1 – Visibilidade do status do sistema (Acessibilidade SPA)
- **Gravidade:** 3
- **Correção proposta:** Adicionar `aria-live="polite"` ao elemento que recebe as atualizações da lista.
- **Evidência:** Elemento `<ul id="lista-receitas">`.

---

# Problema 5

- **Onde:** Navegação após exclusão de registros
- **O que observei:** Depois que um item é removido, o foco do teclado não é reposicionado para outro elemento, dificultando a navegação por teclado.
- **Heurística violada:** #7 – Flexibilidade e eficiência de uso
- **Gravidade:** 2
- **Correção proposta:** Após excluir um item, mover o foco para o próximo botão ou para o formulário utilizando `element.focus()`.
- **Evidência:** Navegação utilizando apenas a tecla TAB.

---

# Problema 6

- **Onde:** Tratamento de erros da API
- **O que observei:** Quando ocorre erro durante uma requisição, o usuário não recebe uma mensagem clara na interface.
- **Heurística violada:** #9 – Reconhecer, diagnosticar e recuperar erros
- **Gravidade:** 3
- **Correção proposta:** Exibir mensagens como "Não foi possível cadastrar a receita. Tente novamente." sem recarregar a página.
- **Evidência:** Teste desligando o backend ou enviando dados inválidos.

---

# Problema 7

- **Onde:** Interface principal
- **O que observei:** Não existe nenhuma ajuda explicando como utilizar o sistema ou o significado dos campos.
- **Heurística violada:** #10 – Ajuda e documentação
- **Gravidade:** 2
- **Correção proposta:** Inserir pequenos textos de ajuda, placeholders descritivos ou uma seção "Como utilizar".
- **Evidência:** Tela inicial.

---

# Problema 8

- **Onde:** Formulários
- **O que observei:** Alguns campos utilizam apenas placeholder para identificar seu conteúdo.
- **Heurística violada:** Acessibilidade – Inspeção visual
- **Gravidade:** 2
- **Correção proposta:** Associar todos os campos a elementos `<label>` corretamente vinculados pelo atributo `for`.
- **Evidência:** Campos dos formulários.

---

# Problema 9

- **Onde:** SPA
- **O que observei:** Durante operações de criação e exclusão a interface permanece sem qualquer indicação de processamento, fazendo o usuário acreditar que o sistema travou.
- **Heurística violada:** #1 – Visibilidade do status (Loading State)
- **Gravidade:** 3
- **Correção proposta:** Exibir spinner ou mensagem "Carregando..." durante as chamadas `fetch`.
- **Evidência:** Operações de CRUD.

---

# Problema 10

- **Onde:** Interface geral
- **O que observei:** Não existe botão para cancelar uma edição ou desfazer uma ação realizada.
- **Heurística violada:** #3 – Controle e liberdade do usuário
- **Gravidade:** 2
- **Correção proposta:** Disponibilizar botão "Cancelar" nos formulários e confirmação antes de alterações importantes.
- **Evidência:** Formulários de cadastro.

---

# Resumo

- **Total de problemas encontrados:** 10
- **Problemas de gravidade 3–4:** 6
- **Problemas de acessibilidade:** 3
- **Problemas específicos de SPA:** 3
- **Score Lighthouse:** ____ / 100

## Os três problemas prioritários para corrigir no E7

1. Adicionar feedback visual (loading e mensagens de sucesso/erro).
2. Implementar validação dos formulários antes do envio.
3. Adicionar `aria-live` e melhorar a acessibilidade da atualização dinâmica da lista.