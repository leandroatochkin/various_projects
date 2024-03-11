function ordenarProducto(producto){
    return new Promise((res, rej)=>{
        console.log(`Ordenando: ${producto} de Tienda On-Line`)
        setTimeout(()=>{
            if (producto === 'taza') {
                res('Ordenando taza con logo');
            } else {
                rej('Este producto no está disponible actualmente...')
            }
        },2000)
    });
}

function procesarPedido(respuesta){
    return new Promise(res =>{//se pasa un solo parametro x que se usa solo resolve
        console.log('Procesando Respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(()=>{
            res('Gracias por su compra. Disfrute su pedido.')
        }, 4000)
    })
}

// ordenarProducto('taza')
//     .then(respuesta => {
//         console.log('Respuesta recibida');
//         console.log(respuesta);
//         return procesarPedido(respuesta);
//     })
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada)
//     })
//     .catch(error => {
//         console.log(error);
//     });

async function realizarPedido(producto){
    try {
    const respuesta = await ordenarProducto(producto); // await va antes de los procesos asincronos
    console.log('Respuesta recibida');
    console.log(respuesta)
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada)
    } catch (err){
        console.log(err);
    }

}

realizarPedido('taza');
