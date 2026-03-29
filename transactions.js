var listaTransacciones = [
  { tipo: 'Compra', monto: '$50.00', detalle: 'Compra en línea' },
  { tipo: 'Depósito', monto: '$100.00', detalle: 'Depósito en efectivo' },
  { tipo: 'Transferencia', monto: '$75.00', detalle: 'Transferencia recibida' },
  { tipo: 'Compra', monto: '$5550.00', detalle: 'Compra en línea' },
  { tipo: 'Depósito', monto: '$10500.00', detalle: 'Depósito misma cuenta' },
  { tipo: 'Transferencia', monto: '$7575.00', detalle: 'Transferencia recibida' }
];

function mostrarUltimosMovimientos() {
  for (var i = 0; i < listaTransacciones.length; i++) {
    var transaccion = listaTransacciones[i];
      
    var htmlItem = '<li class="list-group-item">' + 
                   '<strong>' + transaccion.tipo + ':</strong> ' + 
                   transaccion.detalle + ' - ' + transaccion.monto + 
                   '</li>';

    $('#lista-movimientos').append(htmlItem);
  }
}

$(document).ready(function() {
  mostrarUltimosMovimientos();
});