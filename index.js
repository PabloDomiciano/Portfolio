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

function atualizarBotaoTema() {
  const tema = document.body.getAttribute("data-tema");
  const botaoTema = document.getElementById("theme-toggle");
  if (tema === "dark") {
    botaoTema.style.justifyContent = "flex-end";
  } else {
    botaoTema.style.justifyContent = "flex-start";
  }
}

document.getElementById("theme-toggle").addEventListener("click", alterarTema);

document.addEventListener("DOMContentLoaded", function () {
  const githubUsername = "PabloDomiciano";
  const githubReposContainer = document.getElementById("github-repos");

  fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((repo) => {
        const repoElement = document.createElement("div");
        repoElement.classList.add("repo");

        repoElement.innerHTML = `
                  <h3><a href="${repo.html_url}" target="_blank">${
          repo.name
        }</a></h3>
                  <p>${
                    repo.description ? repo.description : "Sem descrição"
                  }</p>
              `;

        githubReposContainer.appendChild(repoElement);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar os repositórios:", error);
      githubReposContainer.innerHTML =
        "<p>Não foi possível carregar os repositórios do GitHub.</p>";
    });
});
