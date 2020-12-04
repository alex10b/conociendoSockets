const {io} = require('../server')

io.on('connection', (client)=>{
    console.log('usuario conectado');
 
    client.emit('enviarMensaje',{
      usuario: 'admin',
      mensaje: 'bienvenido a la app'
    });
    client.on('disconnect',()=>{
        console.log('usuario desconectado');
    });
 
    client.on('enviarMensaje',(mensaje,callback)=>{
        console.log(mensaje);

    client.broadcast.emit('enviarMensaje',mensaje);

     /*if(mensaje.usuario){
         callback({
             resp:'Todo salio Bien'
         });
 
     }
     else{
         callback({
             resp:'Todo salio Mal!!!!!'
         });
     }
 
 */
    });
 
 
 });