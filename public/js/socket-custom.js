let socket = io()

socket.on('connect', () => {
    console.log('Conectado al servidor');
})

socket.on('disconnect', () => {
    console.log('Perdimos conexión con el servidor');
})

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Anderson',
    message: 'Hola mundo'
}, (resp) => {
    console.log('Respuesta del server: ', resp);
})

// Recibir información
socket.on('enviarMensaje', (message) => {
    console.log('Servidor:', message);
})