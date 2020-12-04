
var socket = io();
socket.on('connect',function(){
    console.log('conectado al servidor');
});

socket.on('disconnect',function(){

    console.log('perdimos conexion con el servidor');
});

socket.emit('enviarMensaje',{
    usuario: "ALex",
    mensaje: 'Hola mundo'
},function(resp){
    console.log(resp);
});

socket.on('enviarMensaje',function(mensaje){
    console.log(mensaje);
})
