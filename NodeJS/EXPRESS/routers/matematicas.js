const express = require('express');


const {matematicas} = require('../datos/cursos.js').infoCursos;

const routerMatematicas = express.Router();

routerMatematicas.get('/', (req,res)=>{
    res.send(JSON.stringify(matematicas));
});



routerMatematicas.get('/:tema', (req,res)=>{//los parametros url se agregan con :
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema === tema);//filtra los cursos mientras el parametro sea igual a los cursos disponibles
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);//en cao de buscar algo que no existe
    }
    res.send(JSON.stringify(resultados));
});

module.exports = routerMatematicas;