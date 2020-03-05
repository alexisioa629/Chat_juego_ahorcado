
module.exports = function (io) {
    io.on('connection', socket => {
        console.log('Nuevo Usuario conectado')
        var nombreUsuario;
        var nombreBoot = 'Boot';
        var varHola = 'Hola como estas';
        var laHora = new Date;

        /* var geoip = require('geoip-lite');
 
         var ip = "207.97.227.239";
         var geo = geoip.lookup(ip);
         */

        //obtener nombre
        socket.on('nombreUsuario', function (data) {
            console.log("nombre es :" + data);

            nombreUsuario = data;
        });
        //entra sms del usuario
        socket.on('mensaje desde cliente', function (data) {

            console.log('cliente dice: ', data);

            io.sockets.emit('mensaje desde servidor', nombreUsuario + ':' + data);
            if (data == 'hola') {
                io.sockets.emit('mensaje desde servidor', nombreBoot + " :" + varHola);
            }
            else if (data == 'dame la fecha') {
                io.sockets.emit('mensaje desde servidor', nombreBoot + " :" + laHora);
            }
            else if (data == 'quien eres') {
                io.sockets.emit('mensaje desde servidor', nombreBoot + " :" + 'Soy el Boot de ayuda');
            }
            else if (data == 'ayudame') {
                io.sockets.emit('mensaje desde servidor', nombreBoot + " :" + 'En que te puedo ayudar');
            }
            else if (data == 'cuantos años tengo') {
                io.sockets.emit('mensaje desde servidor', nombreBoot + " :" + 'En que año naciste');
            }
            /* else if(data!= null){
                 var edad= laHora.getFullYear()-data;
                 io.sockets.emit('mensaje desde servidor',nombreBoot+" :"+ 'Tu tienes : '+edad+' años');
             }*/
            else if (data == 'donde vivo') {
                io.sockets.emit('mensaje desde servidor', nombreBoot + " :" + 'Creo que vives en Loja');
            }
            else if (data == 'jugar') {
                io.sockets.emit('mensaje desde servidor', nombreBoot + " :" + 'Vamos a jugar el AHORCADO');


                var perro = ["p", "e", "r", "r", "o"]
                var gato = ["g", "a", "t", "o"]
                var caballo = ["c", "a", "b", "a", "l", "l", "o",]
                var abeja = ["a", "b", "e", "j", "a"]
                var burro = ["b", "u", "r", "r", "o"]
                var animales = [gato, perro, caballo, abeja, burro]

                var aleatoria = animales[Math.floor(Math.random() * animales.length)]// seleccionar una palabra de un array
                var totalChars = aleatoria.length;// contar el total de caracteres
                console.log(aleatoria);
                console.log(totalChars);
                io.sockets.emit('mensaje desde servidor', nombreBoot + " :" + 'Presiona ENTER');
                if (data == null) {
                    io.sockets.emit('mensaje desde servidor', nombreBoot + " :" + 'Adivina una palabra de ' + totalChars + ' letras');

                    if (aleatoria.indexOf(data) != -1) {
                        console.log("si")
                        io.sockets.emit('mensaje desde servidor', nombreBoot + " :" + 'La letra ' + data + " si esta");
                    } else {
                        io.sockets.emit('mensaje desde servidor', nombreBoot + " :" + 'La letra ' + data + " no esta en la palabra");
                    }
                }
            }
            //enviar mensajes a todos los usuarios      
            //io.sockets.emit('mensaje desde servidor',data);
            console.log('servidor dice: ', data);
        });
    });

}