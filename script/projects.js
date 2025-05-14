const tabButtons = document.querySelectorAll(".tab-button");
const projects = document.querySelectorAll(".project-card");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".tab-button.active")?.classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projects.forEach((proj) => {
      if (filter === "all" || proj.getAttribute("data-tech") === filter) {
        proj.style.display = "block";
      } else {
        proj.style.display = "none";
      }
    });
  });
});
