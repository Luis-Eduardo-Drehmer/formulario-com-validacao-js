const itensFormulario = document.querySelectorAll(".itens");
const mensagemFaltaPreenchimento = document.querySelectorAll(".mensagem-campo-obrigatorio");
const buttonSubmit = document.getElementById("button-submit");

buttonSubmit.addEventListener('click', () => {
    itensFormulario.forEach((item, index) => {
        if (item.value === "") {
            if (item.classList.contains("preenchido-correto")) {
                item.classList.remove("preenchido-correto");
            }
            item.classList.add("preenchido-errado");
            mensagemFaltaPreenchimento[index].classList.add("ativo");
        } else {
            if (item.classList.contains("preenchido-errado")) {
                item.classList.remove("preenchido-errado");
                mensagemFaltaPreenchimento[index].classList.remove("ativo");
            }
            item.classList.add("preenchido-correto");
        }

    });
})

