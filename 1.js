document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formRegistro');
  const alerta = document.getElementById('alerta-formulario');

  form.addEventListener('submit', (e) => {
   e.preventDefault(); // Detener el envío automático

   // Captura de valores de los inputs
   const nombre = document.getElementById('nombre').value.trim();
   const email = document.getElementById('email').value.trim();
   const telefono = document.getElementById('telefono').value.trim();
   const programa = document.getElementById('programa').value;
   const terminos = document.getElementById('terminos').checked;

   // Expresión Regular para Email
   const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   // Expresión Regular para Teléfono (9 dígitos peruanos)
   const regexTelefono = /^9\d{8}$/;

   // Lista de Errores
   let errores = [];

   // Validaciones
   if (nombre.length < 3) {
     errores.push('Por favor, ingresa un nombre válido (mínimo 3 caracteres).');
   }

   if (!regexEmail.test(email)) {
     errores.push('Ingresa un correo electrónico válido.');
   }

   if (!regexTelefono.test(telefono)) {
     errores.push('El teléfono debe tener 9 dígitos y comenzar con 9.');
   }

   if (programa === '') {
     errores.push('Debes seleccionar un programa académico.');
   }

   if (!terminos) {
     errores.push('Debes aceptar los términos y condiciones.');
   }

   // Renderizado de Alerta mediante Manipulación del DOM
   if (errores.length > 0) {
     alerta.className = 'alert alert-danger';
     alerta.innerHTML = `<strong>⚠️ Por favor corrige los siguientes errores:</strong><br>• ${errores.join('<br>• ')}`;
     alerta.classList.remove('d-none');
   } else {
     // Envío Exitoso Simulado (Método POST)
     alerta.className = 'alert alert-success';
     alerta.innerHTML = '<strong>¡Registro exitoso! 🎉</strong> Gracias por registrarte. Un asesor te contactará pronto.';
     alerta.classList.remove('d-none');

     // Limpiar formulario y deshabilitar reenvíos
     form.reset();
     console.log('Simulación POST exitosa:', {
       metodo: 'POST',
       datos: { nombre, email, telefono, programa }
     });
   }
  });
});