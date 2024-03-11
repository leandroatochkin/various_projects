const fs = require('fs')//hay qu importar

//En caso de requerir versiones sincronas añadir Sync al final de la 
//funcion por ej fs.readFileSync, asi se van a ejecuta en el orden establecido
//En caso de ser sincrona no es necesario manejar el error
//tambien se pueden asignar a una constante


// fs.readFile('index.html', 'utf-8',(err, contenido)=>{
// if (err) {
//     console.log(err)//THROW(ERR) DETIENE LA EJECUCION
// } else {
//     console.log(contenido)
// }
// console.log()
// })//leer archivo

// fs.rename('index.html', 'main.html', (err)=>{//cambiar nombre de archivos
//     if (err) {
//         throw err;
//     }
//     console.log('nombre cambiado exitosamente')
// })

// fs.appendFile('index.html', '<p>Hola</p>', (err) =>{//añadir componentes al final de un archivo
//     if (err){
//         throw err;
//     }
//     console.log('Archivo Actualizado')
// })

// fs.writeFile('index.html', 'Contenido Nuevo', (err)=>{//reemplazar contenido
//     if (err){
//         throw err;
//     }
//     console.log('Contenido reemplazado')
// })

fs.unlink('index.html', (err) =>{//eliminar archivo
    if (err){
        throw err;
    }
    console.log('Archivo Eliminado')
})