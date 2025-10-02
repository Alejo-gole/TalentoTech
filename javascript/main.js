const body = document.body;
const btn = document.getElementById("toggleBtn");

const modes = ["light", "dark", "kawaii"];
let current = 0;

btn.addEventListener("click", () => {
  // quitar clase actual
  body.classList.remove(modes[current]);

  // calcular siguiente modo
  current = (current + 1) % modes.length;

  // añadir la siguiente clase
  body.classList.add(modes[current]);
});
