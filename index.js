document.addEventListener("DOMContentLoaded", () => {
  verificarTema();
  atualizarBotaoTema();
});

function verificarTema() {
  const temaArmazenado = localStorage.getItem("tema");
  if (temaArmazenado) {
    document.body.setAttribute("data-tema", temaArmazenado);
  }
}

function alterarTema() {
  const tema = document.body.getAttribute("data-tema");
  const novoTema = tema == "dark" ? "light" : "dark";
  document.body.setAttribute("data-tema", novoTema);
  localStorage.setItem("tema", novoTema);
  atualizarBotaoTema(novoTema);
}

function atualizarBotaoTema(novoTema) {
  const botaoTema = document.getElementById("theme-toggle");
  botaoTema.style.justifyContent =
    novoTema === "dark" ? "flex-end" : "flex-start";
}

document.getElementById("theme-toggle").addEventListener("click", alterarTema);
