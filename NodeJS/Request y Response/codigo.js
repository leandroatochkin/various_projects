const http = require ('http');

// const servidor = http.createServer((req, res)=>{
//     console.log('===> req (solicitud)');
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.headers);
// });

const servidor = http.createServer((req, res)=>{
    console.log('===> res (respuesta)');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
});

const puerto = 3000;

servidor.listen(puerto, ()=>{
    console.log(`El servidor está escuchando en el puerto ${puerto}...`)
})