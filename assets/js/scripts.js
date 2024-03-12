// Contenido del archivo scripts.js
$(document).ready(function() {
    // Manejo del clic en los enlaces del navbar
    $('a.nav-link').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        var hash = this.hash;
  
        // Desplazamiento suave a la posición del destino
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 200); // Duración de la animación en milisegundos
      }
    });
  
// ------------------------------------------------------------------------------


    // Manejo del clic en los botones con la clase 'btn-primary'
    $('.btn-primary').on('click', function() {
      // Encuentra el elemento padre (card-body) del botón actual
      var cardBody = $(this).closest('.card-body');
  
      // Encuentra el párrafo dentro del card-body
      var cardText = cardBody.find('.card-text');
  
      // Alterna la visibilidad del párrafo al hacer clic en el botón
      cardText.toggleClass('hidden');
    });
  });

//--------------------------------------------------------------------------------
  
  document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('miFormulario');
  
    formulario.addEventListener('submit', function (event) {
      // Obtén los valores de los campos del formulario
      var nombre = document.getElementById('nombre').value;
      var email = document.getElementById('email').value;
      var mensaje = document.getElementById('mensaje').value;
  
      // Realiza la validación (puedes agregar otras condiciones según tus requisitos)
      if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, complete todos los campos.');
        event.preventDefault(); // Evita que el formulario se envíe si la validación falla
      } else {
        // Simula el envío exitoso del formulario
        alert('Mensaje enviado correctamente.');
  
        // Limpia los campos del formulario
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
  
        event.preventDefault(); // Evita que el formulario se envíe
      }
    });
  });
  