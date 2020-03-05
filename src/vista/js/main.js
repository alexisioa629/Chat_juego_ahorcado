//ejecutar jquery
$(function () {
    console.log('jquery funcionando');
    const socket = io();

    //obtener los elementos del html
    const htmlMensajeForm = $('#mensaje-form');
    const htmlMensajeCuadro = $('#mensaje');
    const htmlChat = $('#chat');
    const htmlTxtNombre = $('#txtNombre');



    //Eventos de html
    htmlMensajeForm.submit(e => {
        e.preventDefault(); // evitar que se recargue la pagina

        //evento para enviar al servidor sms::::nombre del evento+ de donde lo obtengo
       // socket.emit('mensaje desde cliente', `${htmlTxtNombre.val()}:<br>"${htmlMensajeCuadro.val()}"`);
       socket.emit('mensaje desde cliente', htmlMensajeCuadro.val());
       socket.emit('nombreUsuario', htmlTxtNombre.val());
       
        htmlMensajeCuadro.val('');
    });
    

    //mostrar los datos a los usuarios
    socket.on('mensaje desde servidor', function (data) {
        //obtener hora
        var fecha = new Date();
        var hora = fecha.getHours();
        var minutos = fecha.getMinutes();
        htmlChat.append(`<br>${data}<br>${hora}:${minutos}<br>`);
    })

});
//alexis

