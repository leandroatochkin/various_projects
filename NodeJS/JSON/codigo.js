// const curso = require('./codigo.json');

// console.log(curso);

let infoCurso = {
    "titulo": "Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": ["javascript", "nodejs"],
    "esPublico": true
};

let infoCursoJSON = JSON.stringify(infoCurso); //convierte a JSON
let inforCursoObjeto = JSON.parse(infoCursoJSON)//convierte a objeto

