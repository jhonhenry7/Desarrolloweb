function validar(numeroTarjeta, correo, cvv, fecha) {
  // Validacion número de tarjeta de crédito (16 dígitos)
  var numeroTarjeta = document.getElementById("cardNumber").value;
  var regexNumeroTarjeta = /^[0-9]{16}$/;
  // Validacion de CVV
  var cvv = document.getElementById('cvv').value;
  var pattern=/^\d{3}$/;
  // Validacion de fecha 
  var fecha = document.getElementById('fecha').value;
  var regex = /^\d{2}\/\d{2}\/\d{4}$/;
  // Validacion correo @continental.edu.pe
  var correo = document.getElementById('correo').value;
  var dominioPermitido = "@continental.edu.pe";
  
  
  if (!regexNumeroTarjeta.test(numeroTarjeta)) {
      alert("Número de tarjeta inválido. Debe contener 16 dígitos.");
  } else {
      alert("Número de tarjeta válido.");
  }

  if (pattern.test(cvv)) {
    alert("Codigo de seguridad válido");
  } else {
    alert("El Codigo de seguridad debe contener 3 dígitos");
  }

  if (regex.test(fecha)) {
    alert('Fecha válida');
  } else {
   alert('Fecha inválida. El formato debe ser dd/mm/yyyy');
  }

  if (correo.endsWith(dominioPermitido)) {
    alert("Correo válido");
  } else {
    alert("El correo debe ser de la forma usuario@continental.edu.pe");
  }
}





