function confirmarReserva() {
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();

  // Validación básica del email
  if (!email.includes('@') || !email.includes('.')) {
    alert("Por favor ingresa un mail válido");
    return;
  }

  // Validación del nombre (no debe estar vacío ni contener números)
  const contieneNumeros = /\d/.test(nombre); // expresión regular: busca si hay algún número

  if (!nombre || contieneNumeros) {
    alert("Por favor ingresa un nombre válido (sin números)");
    return;
  }

  // Mostrar mensaje de éxito
  alert(`¡Gracias ${nombre}! Tu reserva se ha confirmado.`);

  // Cerrar el modal
  bootstrap.Modal.getInstance(document.getElementById('reservaModal')).hide();

  // (Opcional) Limpiar el formulario
  document.getElementById('form-reserva').reset();
}

const nombre=document.getElementById('nombre').value.trim

function enviar(){
  alert ('¡Gracias  por tu mensaje! Te responderemos pronto')
}

// VER DE  VERIFICAR EL MAIL Y VER DE QUE ANDE RESERVA EN CADA DESTINO