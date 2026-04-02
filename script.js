const statusOS = {
  "123": "Em analise",
  "456": "Em manutencao",
  "789": "Pronto para retirada"
};

const form = document.getElementById("os-form");
const input = document.getElementById("os");
const resultado = document.getElementById("resultado");

function mostrarResultado(mensagem, tipo) {
  resultado.textContent = mensagem;
  resultado.classList.remove("is-error", "is-success");

  if (tipo) {
    resultado.classList.add(tipo);
  }
}

function consultarOS(numeroOS) {
  const os = numeroOS.trim();

  if (!os) {
    mostrarResultado("Digite um numero de OS para consultar.", "is-error");
    return;
  }

  const mensagem = statusOS[os];

  if (mensagem) {
    mostrarResultado(`Status da OS ${os}: ${mensagem}.`, "is-success");
    return;
  }

  mostrarResultado("Ordem de servico nao encontrada. Confira o numero ou fale com a loja.", "is-error");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  consultarOS(input.value);
});
