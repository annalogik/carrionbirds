// Aviso antes de ir al área privada (Google Classroom).
// Cualquier enlace a classroom.google.com abre esta ventana; la persona decide
// si va a Classroom (en una pestaña nueva) o se queda. Se cierra con la X,
// con "Quedarme aquí", tocando fuera o con Esc.
// Si JavaScript falla, el enlace lleva a Classroom como siempre.
(function () {
  var aviso = document.createElement("dialog");
  if (!aviso.showModal) return;   // navegador muy antiguo: el enlace funciona sin aviso
  aviso.className = "aviso";
  aviso.setAttribute("aria-labelledby", "aviso-titulo");
  aviso.innerHTML =
    '<div class="aviso__caja">' +
      '<button class="aviso__cerrar" type="button" aria-label="Cerrar y quedarme en la página">×</button>' +
      '<img class="aviso__logo" src="img/favicon.png" alt="" width="56" height="56">' +
      '<h2 id="aviso-titulo">Área privada</h2>' +
      "<p>El contenido del área privada es solo para el alumnado inscrito en Carrion Birds.</p>" +
      '<div class="aviso__botones">' +
        '<a class="boton boton--oro aviso__ir" href="#" target="_blank" rel="noopener">Ir a Classroom</a>' +
        '<button class="boton boton--borde aviso__quedarme" type="button">Quedarme aquí</button>' +
      "</div>" +
    "</div>";
  document.body.appendChild(aviso);

  var ir = aviso.querySelector(".aviso__ir");
  function cerrar() { if (aviso.open) aviso.close(); }
  ir.addEventListener("click", cerrar);   // se abre Classroom en otra pestaña y el aviso se cierra
  aviso.querySelector(".aviso__cerrar").addEventListener("click", cerrar);
  aviso.querySelector(".aviso__quedarme").addEventListener("click", cerrar);
  aviso.addEventListener("click", function (e) { if (e.target === aviso) cerrar(); });   // toque fuera de la caja

  document.addEventListener("click", function (e) {
    var enlace = e.target.closest('a[href*="classroom.google.com"]');
    if (!enlace || aviso.contains(enlace)) return;
    e.preventDefault();
    ir.href = enlace.href;
    aviso.showModal();
  });
})();
