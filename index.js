document.addEventListener("DOMContentLoaded", () => {
  verificarTema();
});

function verificarTema() {
  const temaArmazenado = localStorage.getItem("tema");
  if (temaArmazenado) {
    document.body.setAttribute("data-tema", temaArmazenado);
  }
}

function alterarCorTitulo(tema) {
    const titulo = document.getElementById("page-title");
    if (tema === "dark") {
      titulo.style.color = "white";
    } else {
      titulo.style.color = "black";
    }
  }

function alterarTema() {
  const tema = document.body.getAttribute("data-tema");
  const novoTema = tema == "dark" ? "light" : "dark";
  document.body.setAttribute("data-tema", novoTema);
  localStorage.setItem("tema", novoTema);
}
