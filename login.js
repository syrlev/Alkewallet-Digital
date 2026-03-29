$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault(); 
    
    const email = $('#email').val();
    const password = $('#password').val();
    
    if (email === "prueba@wallet.com" && password === "123456") {
      $('#mensaje').html('<div class="alert alert-success">Login correcto. Redirigiendo...</div>');
      window.location.href = "menu.html"; 
    } else {
      $('#mensaje').html('<div class="alert alert-danger">Usuario o contraseña incorrectos</div>');
    } 
  });
});