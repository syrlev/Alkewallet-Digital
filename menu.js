$(document).ready(function() {
    var saldoGuardado = localStorage.getItem('saldo');
    
    if (saldoGuardado === null) {
        saldoGuardado = 60000;
    }
    
    $('#saldo-cuenta').text('$' + saldoGuardado);

    $('#btn-depositar').click(function() {
        alert("Redirigiendo a depositar");
        window.location.href = "deposit.html";
    });

    $('#btn-enviar').click(function() {
        alert("Redirigiendo a enviar dinero");
        window.location.href = "sendmoney.html";
    });

    $('#btn-movimientos').click(function() {
        alert("Redirigiendo a últimos movimientos");
        window.location.href = "transactions.html";
    });
});