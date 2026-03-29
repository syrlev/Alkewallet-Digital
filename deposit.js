$(document).ready(function() {
  var saldo = localStorage.getItem('saldo');

  if (saldo === null) {
      saldo = 60000;
  }
  $('#saldo-actual').text(saldo);

  $('#btn-depositar').click(function() {
    var monto = $('#depositAmount').val();

    if(monto !== "") {
      var nuevoSaldo = parseInt(saldo) + parseInt(monto);
      localStorage.setItem('saldo', nuevoSaldo);

      $('#leyenda-deposito').text('Monto depositado: $' + monto);
      $('#alert-container').html('<div class="alert alert-success">Depósito realizado con éxito.</div>');

      setTimeout(function() {
        window.location.href = "menu.html";
      }, 2000);

    } else {
      $('#alert-container').html('<div class="alert alert-danger">Ingrese un monto válido</div>');
    }
  });
});