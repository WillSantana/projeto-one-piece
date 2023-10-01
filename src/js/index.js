// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado.
// Passo 1 - pegar os botões no JS para poder verificar quando o usuário clica neles.
const botoes = document.querySelectorAll('.botao'); // Correção: Use "querySelectorAll" para obter uma lista de botões.

// OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem.
// Passo 1 - pegar os personagens no JS para poder mostrar ou esconder eles.
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => { // Correção: Use "forEach" em vez de "array.forEach".
    botao.addEventListener("click", () => {
        // Passo 3 obj1 - Verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele.
        desselecionarBotao();

        // Passo 2 obj1 - adicionar a classe "selecionado" no botão que o usuário clicou.
        botao.classList.add("selecionado");

        // Passo 3 obj2 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
        desselecionarPersonagem();

        // Passo 2 obj2 - adicionar a classe "selecionado" no personagem que o usuário selecionou.
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
    }
}

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove("selecionado");
    }
}

// Use querySelectorAll para selecionar todos os botões e todos os personagens.

// Use forEach para iterar pelos botões.

// Adicione verificação para garantir que você só remova a classe "selecionado" se já houver um elemento selecionado.

// Corrija o nome da função newFunction para desselecionarPersonagem e faça a mesma verificação.

// Com essas correções, o código deve funcionar como esperado. Certifique-se de que as classes e elementos HTML correspondam ao seu código CSS e HTML.






