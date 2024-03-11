"use strict";

const archivo = document.getElementById("archivo");
archivo.addEventListener("change",(e)=>{
	leerArchivo(archivo.files)
})

const leerArchivo = ar=>{//ar de archivo(argumento o sea el archivo del input)

for (var i = 0; i < ar.length; i++) {
	const reader = new FileReader();
    reader.readAsText(ar[i]);
    reader.addEventListener("load", (e)=>{
	console.log(JSON.parse(e.currentTarget.result))
})
}
}

