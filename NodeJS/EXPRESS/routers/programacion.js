const express = require('express');


const {programacion} = require('../datos/cursos.js').infoCursos;


const routerProgramacion = express.Router();

routerProgramacion.use(express.json())

routerProgramacion.get('/', (req,res)=>{
    res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req,res)=>{//los parametros url se agregan con :
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);//filtra los cursos mientras el parametro sea igual a los cursos disponibles
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);//en cao de buscar algo que no existe
    }//tambien se puede usar el metodo .end()para enviar una respuesta vacia
    if (req.query.ordenar === 'vistas'){
            return res.send(JSON.stringify(resultados.sort((a,b)=>b.vistas - a.vistas)))
    } 
    
    res.send(JSON.stringify(resultados));
});

routerProgramacion.get('/:lenguaje/:nivel', (req,res)=>{//los parametros url se agregan con :
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje &&  curso.nivel === nivel);//filtra los cursos mientras el parametro sea igual a los cursos disponibles
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);//en cao de buscar algo que no existe
    }
    res.send(JSON.stringify(resultados));
});

routerProgramacion.post('/',(req,res)=>{
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
})

routerProgramacion.put('/:id', (req,res)=>{//toma un parametro url para identificar el item a modificar
    let cursoActualizado = req.body; //se crea el cuerpo de la solicitud
    const id = req.params.id;//se obtiene el id a partir del parametro url
    const indice = programacion.findIndex(curso => curso.id == id);//busca el indice que corresponde al curso
    if (indice >= 0) {//si el indice es valido
        programacion[indice] = cursoActualizado; //reemplaza el curso
    }
    res.send(JSON.stringify(programacion))//manda el json
})

routerProgramacion.patch('/:id', (req,res)=>{//toma un parametro url para identificar el item a modificar
    let infoActualizada = req.body; //se crea el cuerpo de la solicitud
    const id = req.params.id;//se obtiene el id a partir del parametro url
    const indice = programacion.findIndex(curso => curso.id == id);//busca el indice que corresponde al curso
    if (indice >= 0) {//si el indice es valido
       const cursoAmodificar = programacion[indice]; //reemplaza el curso
       Object.assign(cursoAmodificar, infoActualizada);
    } else {
        res.status(404);///envia codigo 404 en caso de que el indice sea menor a 0
    }
    res.send(JSON.stringify(programacion))//manda el json
})

routerProgramacion.delete('/:id', (req,res)=>{
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);
    if (indice >= 0) {//si el indice es valido
        programacion.splice(indice, 1)
     }
     res.json(programacion);//automaticamente envia json

})



module.exports = routerProgramacion;