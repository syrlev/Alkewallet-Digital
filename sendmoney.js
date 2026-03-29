$(document).ready(function() {

  $('#btn-guardar').click(function() {
    var nombre = $('#nuevo-nombre').val();
    var cbu = $('#nuevo-cbu').val();
    var alias = $('#nuevo-alias').val();
    var banco = $('#nuevo-banco').val();

    if (nombre !== "" && cbu !== "" && alias !== "" && banco !== "") {
        
        var nuevatarjeta = '<li class="list-group-item">' +
                        '<div class="contact-info">' +
                        '<input type="radio" name="contacto" value="' + nombre + '"> ' +
                        '<strong>' + nombre + '</strong><br>' +
                        '<span class="text-muted small">CBU: ' + cbu + ' | Alias: ' + alias + ' | Banco: ' + banco + '</span>' +
                        '</div>' +
                        '</li>';

        $('#contactList').append(nuevatarjeta);
        
        $('#nuevo-nombre').val('');
        $('#nuevo-cbu').val('');
        $('#nuevo-alias').val('');
        $('#nuevo-banco').val('');
        
        $('#alerta-container').html('<div class="alert alert-success">Contacto agregado correctamente</div>');

    } else {
        $('#alerta-container').html('<div class="alert alert-danger">Por favor completa todos los campos del contacto</div>');
    }
  });

  $('#buscador').on('keyup', function() {
    var valorBusqueda = $(this).val().toLowerCase();
    
    $('#contactList li').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(valorBusqueda) > -1)
    });
  });

  $('#btn-enviar').click(function() {
    var seleccionado = $('input[name="contacto"]:checked').val();
    var monto = $('#monto-transferencia').val();
    
    var saldoActual = parseInt(localStorage.getItem('saldo')) || 60000;

    if (seleccionado && monto) {
        
        if (parseInt(monto) > saldoActual) {
             $('#alerta-container').html('<div class="alert alert-danger">Fondos insuficientes</div>');
             return;
        }

        var nuevoSaldo = saldoActual - parseInt(monto);
        localStorage.setItem('saldo', nuevoSaldo);

        $('#alerta-container').html('<div class="alert alert-success">Enviado $' + monto + ' a ' + seleccionado + '</div>');
        
        setTimeout(function() {
            window.location.href = "menu.html";
        }, 2000);
        
    } else {
        $('#alerta-container').html('<div class="alert alert-warning">Debes seleccionar un contacto e ingresar un monto</div>');
    }
  });

});