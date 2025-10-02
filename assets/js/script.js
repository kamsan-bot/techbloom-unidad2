// Array para feedback de contacto.html
const feedbacks = [];
const formFeedback = document.getElementById("form-feedback");
const listaFeedback = document.getElementById("lista-feedback");
if (formFeedback) {
  formFeedback.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!formFeedback.checkValidity()) {
      event.stopPropagation();
      formFeedback.classList.add("was-validated");
      document.getElementById("respuesta-feedback").innerHTML =
        '<div class="alert alert-danger">❌ Corrige los errores antes de enviar.</div>';
    } else {
      const nombre = formFeedback.nombreFeedback.value.trim();
      const comentario = formFeedback.comentario.value.trim();
      feedbacks.push({ nombre, comentario });
      mostrarFeedbacks();
      document.getElementById("respuesta-feedback").innerHTML =
        '<div class="alert alert-success">✅ ¡Feedback enviado correctamente!</div>';
      formFeedback.reset();
      formFeedback.classList.remove("was-validated");
    }
  });
}

function mostrarFeedbacks() {
  if (!listaFeedback) return;
  listaFeedback.innerHTML = "";
  feedbacks.forEach((fb, i) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${i + 1}. ${fb.nombre}: ${fb.comentario}`;
    listaFeedback.appendChild(li);
  });
}
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


// Arrays para almacenar los datos
const registros = [];
const sugerencias = [];

// Formulario de registro
const formulario = document.getElementById("formulario");
const listaRegistros = document.getElementById("lista-registros");
if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!formulario.checkValidity()) {
      event.stopPropagation();
      formulario.classList.add("was-validated");
      document.getElementById("respuesta").innerHTML =
        '<div class="alert alert-danger">❌ Corrige los errores antes de enviar.</div>';
    } else {
      const nombre = formulario.nombre.value.trim();
      const email = formulario.email.value.trim();
      const mensaje = formulario.mensaje.value.trim();
      registros.push({ nombre, email, mensaje });
      mostrarRegistros();
      document.getElementById("respuesta").innerHTML =
        '<div class="alert alert-success">✅ ¡Formulario enviado correctamente!</div>';
      formulario.reset();
      formulario.classList.remove("was-validated");
    }
  });
}

function mostrarRegistros() {
  if (!listaRegistros) return;
  listaRegistros.innerHTML = "";
  registros.forEach((reg, i) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${i + 1}. ${reg.nombre} - ${reg.email} - ${reg.mensaje}`;
    listaRegistros.appendChild(li);
  });
}

// Formulario de sugerencias
const formSugerencia = document.getElementById("form-sugerencia");
const listaSugerencias = document.getElementById("lista-sugerencias");
if (formSugerencia) {
  formSugerencia.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!formSugerencia.checkValidity()) {
      event.stopPropagation();
      formSugerencia.classList.add("was-validated");
      document.getElementById("respuesta-sugerencia").innerHTML =
        '<div class="alert alert-danger">❌ Corrige los errores antes de enviar.</div>';
    } else {
      const sugerencia = formSugerencia.sugerencia.value.trim();
      sugerencias.push(sugerencia);
      mostrarSugerencias();
      document.getElementById("respuesta-sugerencia").innerHTML =
        '<div class="alert alert-success">✅ ¡Sugerencia enviada correctamente!</div>';
      formSugerencia.reset();
      formSugerencia.classList.remove("was-validated");
    }
  });
}

function mostrarSugerencias() {
  if (!listaSugerencias) return;
  listaSugerencias.innerHTML = "";
  sugerencias.forEach((sug, i) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${i + 1}. ${sug}`;
    listaSugerencias.appendChild(li);
  });
}

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


