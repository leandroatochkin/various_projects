const { REFUSED } = require('dns');
const http = require('http');
const { type } = require('os');
const cursos = require('./cursos');

const servidor = http.createServer((req,res)=>{
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501;
            res.end(`El método usado no puede ser manejado por el servidor: ${method}`);
            break;
    }
});

function manejarSolicitudGET(req,res){
    const path = req.url;

    console.log(req.statusCode); /// 200 ok

    if (path === '/'){   
        return res.end('Bienvenido al servidor y API creado con Node.js')
    } else if (path === '/cursos') {      
        return res.end(JSON.stringify(cursos.infoCursos))
    } else if (path === '/cursos/programacion') {        
        return res.end(JSON.stringify(cursos.infoCursos.programacion))
    }

    res.statusCode = 404;
    res.end('Elrecurso solicitado no existe.')
}

function manejarSolicitudPOST(req,res){
    const path = req.url;
    if (path === '/cursos/programacion'){  
        
        let cuerpo ='';
        req.on('data', contenido => {
            cuerpo += contenido.toString();//asigna el contenido a cuerpo y lo convierte a string
        } );//data es un event predeterminado para recibir informacion
        req.on('end', ()=> {//end es el evento de finalización
            console.log(cuerpo);
            console.log(typeof cuerpo);
            //Convierte a un obj de JS
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo)
            res.end('El servidor recibió una solicitud POST para /cursos/programacion')
        })


        //return res.end('El servidor recibió una solicitud POST para /cursos/programacion')
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO, ()=> {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`)
})