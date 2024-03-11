const http = require('http');

const servidor = http.createServer((req, res)=>{
    res.end('Hola');//envia respuesta al cliente
});//crea el servidor

const PUERTO = 3000;

servidor.listen(PUERTO, ()=>{
    console.log(`El servidor está escuchando en http://localhost:${PUERTO}...`)
});//especificar el puerto