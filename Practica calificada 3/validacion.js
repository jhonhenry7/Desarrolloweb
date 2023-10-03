function validar(numeroTarjeta, correo, cvv, fecha) {
  // Validacion número de tarjeta de crédito (16 dígitos)
  var numeroTarjeta = document.getElementById("cardNumber").value;
  var regexNumeroTarjeta = /^[0-9]{16}$/;
  // Validacion de CVV
  var cvv = document.getElementById('cvv').value;
  var pattern=/^\d{3}$/;
  // Validacion de fecha 
  var fecha = document.getElementById("fecha").value;
  var regexfecha = /^(0[1-9]|[12][0-9]|3[01])\/(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\/\d{4}$/;
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

  if (regexfecha.test(fecha)) {
    alert("Formato de fecha válido: " + fecha);
  } else {
    alert("Formato de fecha inválido. Por favor, ingrese la fecha en el formato 01/enero/2023.");
  }

  if (correo.endsWith(dominioPermitido)) {
    alert("Correo válido");
  } else {
    alert("El correo debe ser de la forma usuario@continental.edu.pe");
  }
}




