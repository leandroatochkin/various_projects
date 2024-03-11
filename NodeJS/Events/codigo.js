const EventEmitter = require ('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos)=>{//.on asocia un evento a una funciòn
    console.log(`Se realizó una compra por $${total}.`)
    console.log(`Número de productos: ${numProductos}`)
});

emisorProductos.emit('compra', 500, 5);//emite una acciòn
