// Menu mobile
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  toggle.setAttribute("aria-expanded", aberto);
});

menu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
