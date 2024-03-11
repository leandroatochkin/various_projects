const { resolve } = require("path");

const promesaCumplida = true;

const miPromesa = new Promise((res,rej)=>{
    setTimeout(()=>{
       if (promesaCumplida){
        res('promesa cumplida');
       } else {
        rej('promesa rechazada')
       }
    }, 3000)
});

const manejarPromesaCumplida = (valor) =>{//valor de resolve
    console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) =>{//valor de reject
    console.log(razonRechazo)
};


miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);