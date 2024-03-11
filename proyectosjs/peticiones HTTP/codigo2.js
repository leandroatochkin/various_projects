let peticion;
if(window.XMLHttpRequest) peticion = new ZMLHttpRequest();//<===nueva peticiòn
else peticion = new ActiveXobject("Microsoft.XMLHTTP");//<==en caso de que el navegador sea windows

peticion.addEventListener("load", ()=>{
	let respuesta;
	if (peticion.status == 200|| peticion.status == 201) respuesta = peticion.response; //<===valida que el status sea correcto
	else respuesta = "Lo siento, no se ha encontrado el recurso"//<===caso contrario es es error
	console.log(JSON.parse(respuesta)) //<====recibe jason serializado y lo deserializa
})

peticion.open("POST", "https//reqres.in/api/users");
peticion.setRequestHeader("Content-type", "application/json;charset=UTF8")//convierte a carácter

peticion.send(JSON.stringify({ ///<=== serializa para enviar al servidor
	"nombre": "dalto",
	"trabajo": "edutuber"
}));