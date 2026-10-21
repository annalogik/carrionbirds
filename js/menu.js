// Menú desplegable del móvil: se abre con el botón y se cierra al elegir
// una sección, al pulsar Esc o al tocar fuera.
(function () {
  var cabecera = document.querySelector(".cabecera");
  var boton = cabecera && cabecera.querySelector(".menu-boton");
  if (!boton) return;
  function abrir(si) {
    cabecera.classList.toggle("cabecera--menu-abierto", si);
    boton.setAttribute("aria-expanded", si);
    boton.setAttribute("aria-label", si ? "Cerrar el menú" : "Abrir el menú");
  }
  boton.addEventListener("click", function () { abrir(boton.getAttribute("aria-expanded") !== "true"); });
  cabecera.querySelectorAll(".menu a").forEach(function (a) { a.addEventListener("click", function () { abrir(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") abrir(false); });
  document.addEventListener("click", function (e) { if (!cabecera.contains(e.target)) abrir(false); });
})();
