function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}

//setTimeout(mostrarTema, 1000, 'Node.js'); //espera programada

//setImmediate(mostrarTema, 'node.js') //se ejecuta inmediatamente luego de ejecutar el codigo sincrono

setInterval(mostrarTema, 1500, 'node.js')//ejecuta el programa en intervalos