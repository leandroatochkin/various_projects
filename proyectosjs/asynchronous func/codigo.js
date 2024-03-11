const objeto ={
     propiedad1 : "valor1",
     propiedad2 : "valor2",
     propiedad3 : "valor3"
};

const obentenerInformacion = ()=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{resolve(objeto)}, 3000)
	})
}

const mostrarResultado = async ()=>{
	resultado = await obentenerInformacion();
	console.log(resultado);
}

mostrarResultado();