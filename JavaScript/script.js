const formulario = document.getElementById("form-calculadora");

const anoInicial = document.getElementById("ano-inicial");
const anoFinal = document.getElementById("ano-final");

const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    try {
        if (anoInicial.value === "" || anoFinal.value === "") {
            throw new Error("Preencha os dois campos.");
        }
        const inicio = Number(anoInicial.value);
        const fim = Number(anoFinal.value);
        if (!Number.isInteger(inicio) || !Number.isInteger(fim)) {
            throw new Error("Digite apenas números inteiros.");
        }
        if (inicio < 1 || inicio > 356 || fim < 1 || fim > 356) {
            throw new Error("Digite anos entre 1 e 356 a.C.");
        }
        if (inicio < fim) {
            throw new Error("O ano inicial deve ser anterior ao ano final.");
        }
        const diferenca = inicio - fim;
        resultado.textContent =
            "Passaram-se " + diferenca +
            (diferenca === 1 ? " ano." : " anos.");

        resultado.className = "sucesso";

    } catch (erro) {
        resultado.textContent = erro.message;

        resultado.className = "erro";

    }

});

formulario.addEventListener("reset", function() {

    resultado.textContent = "";
    resultado.className = "";

});