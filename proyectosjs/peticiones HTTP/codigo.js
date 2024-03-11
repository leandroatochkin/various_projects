let peticion;
if(window.XMLHttpRequest) peticion = new ZMLHttpRequest();
else peticion = new ActiveXobject("Microsoft.XMLHTTP");

peticion.addEventListener("load", ()=>{
	let respuesta;
	if (peticion.status == 200) respuesta = peticion.response;
	else respuesta = "Lo siento, no se ha encontrado el recurso"
	console.log(JSON.parse(respuesta).nombre)
})

peticion.open("GET", "informacion.txt");

peticion.send()