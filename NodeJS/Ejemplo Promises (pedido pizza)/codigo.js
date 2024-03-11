const estatusPedido = ()=>{
    return Math.random() < 0.8;;
};

const miPedidoDePizza = new Promise ((res,rej) =>{
    setTimeout(()=>{
    if (estatusPedido()){
        rej('Pedido exitoso')
    } else {
        res('Ocurrio un error')
    }
    }, 3000)
})

// const manejarPedido = (mensajeDeConfirmacion) =>{
//     console.log(mensajeDeConfirmacion)
// };

// const rechazarPedido = (mensajeDeError) =>{
//     console.log(mensajeDeError)
// };

// miPedidoDePizza.then(manejarPedido, rechazarPedido)

miPedidoDePizza//lo mismo de arriba con otra sintaxis
.then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
})
.then(null,(mensajeDeError)=>{// SE PUEDE USAR CATCH EN VEZ DE NULL EN CASO QUE SEA REJECT
    console.log(mensajeDeError);
})