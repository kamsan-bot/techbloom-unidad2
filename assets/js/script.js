let name = "techbloom";

console.log("añadimos una condicionn");

if (name.length > 7) {

    console.log("ingresaste un nombre valido");
}

console.log("despues de la condicionn");

// Añadimos un comentario para ver si funciona el git
function showMessages() {
    console.log("la funcion a sido llamada");
    console.log("inicio de los mensajes");
    console.log("bienvenida");
    console.log("fin de los mensages");
}

let palabra = "hola mundo";  {

console.log(palabra[0]); // h
console.log(palabra[1]); // o
console.log(palabra[2]); // l
console.log(palabra[3]); // a
console.log(palabra[4]); // " "
console.log(palabra[5]); // m  
console.log(palabra[6]); // u
console.log(palabra[7]); // n
console.log(palabra[8]); // d
console.log(palabra[9]); // o

}
console.log(palabra.length); // 10

// Accedemos al último carácter
console.log(palabra[palabra.length - 5]); // m

let saludo = "holaaa";

console.assert(saludo === "holaaa"); // No hay error
console.assert(saludo === "holaaa"); // sin error
console.log("despues de la asersion");
console.log("fin del script");

let form1 = document.forms[0]; // primer formulario
if (form1) {
  form1.addEventListener("submit", function(event) {
    validarRegistro(event);
  });
  function validarRegistro(){
  return false; 
}
console.log("decimos que la validacion es correcta");
}

function validarRegistro(){
  let usuario = document.formRegistro.usuario.value;
  let pass = document.formRegistro.pass.value;
  let valido = true;

  if(usuario.length < 3){
    document.getElementById("msgUsuario").textContent = "mínimo 3 caracteres";
    valido = false;
  } else {
    document.getElementById("msgUsuario").textContent = "correcto";
  }

  if(pass.length < 6){
    document.getElementById("msgPass").textContent = "mínimo 6 caracteres";
    valido = false;
  } else {
    document.getElementById("msgPass").textContent = "correcto";
  }

  if(valido === true){
    alert("Registro exitoso");
  }

  return false;
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

      // Validación formulario
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

