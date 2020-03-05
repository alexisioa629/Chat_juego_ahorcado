const http= require('http');
const express =require('express');
const socketoi= require('socket.io');
const path= require('path');

const app = express();


//creacion de servidor y asignarle app
const servidor =http.createServer(app);

//enviar y recivir sms desde el servidor con socket
const io = socketoi.listen(servidor);
// configuracion de puerto
app.set('port',process.env.PORT || 3000);

//importar archivo de sockets
require('./sockets')(io);


//ejecutar la el index.html
app.use(express.static(path.join(__dirname,'vista')));


//NUMERO DE PUERTO
servidor.listen(app.get('port'),()=>{
    console.log('sevidor Iniciado');
});
