// Validación básica con Bootstrap 5
(() => {
  'use strict'
  const form = document.querySelector('#formReserva')
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      alert('¡Reserva enviada correctamente!\nMuchas gracias por elegirnos.')
      form.reset()
    }
    form.classList.add('was-validated')
  }, false)
})()