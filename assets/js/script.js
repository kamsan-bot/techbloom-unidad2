function animarScroll() {
        const elementos = document.querySelectorAll(".animar");
        const ventanaAltura = window.innerHeight;
        elementos.forEach((elemento) => {
          const elementoTop = elemento.getBoundingClientRect().top;
          if (elementoTop < ventanaAltura - 100) {
            elemento.classList.add("visible");
          }
        });
      }
      window.addEventListener("scroll", animarScroll);
      window.addEventListener("load", animarScroll);

      // Validación formularioo
      const formulario = document.getElementById("formulario");
      formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!formulario.checkValidity()) {
          event.stopPropagation();
          formulario.classList.add("was-validated");
          document.getElementById("respuesta").innerHTML =
            '<div class="alert alert-danger">❌ Corrige los errores antes de enviar.</div>';
        } else {
          document.getElementById("respuesta").innerHTML =
            '<div class="alert alert-success">✅ ¡Formulario enviado correctamente!</div>';
          formulario.reset();
          formulario.classList.remove("was-validated");
        }
      });

      document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');
  const aparecer = () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', aparecer);
  aparecer();
});


