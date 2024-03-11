const getInfo = async () =>{
	let aprobados = document.querySelector(".num-aprobados");
	let desaprobados = document.querySelector(".num-desaprobados");
	try {
	resultado = await axios("informacion.txt");
	document.querySelector(".num-aprobados").innerHTML = resultado.data.aprobados;
	document.querySelector(".num-desaprobados").innerHTML = resultado.data.desaprobados;
	} catch(e){
	aprobados.innerHTML = "La API falló.";
	desaprobados.innerHTML = "La API falló.";
	}
}

document.getElementById("getInfo").addEventListener("click", getInfo)