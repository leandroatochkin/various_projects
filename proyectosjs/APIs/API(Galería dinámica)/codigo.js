"use strict";

const archivo = document.getElementById("archivo");
archivo.addEventListener("change",(e)=>{
	leerArchivo(archivo.files)
})

const leerArchivo = ar=>{//ar de archivo(argumento o sea el archivo del input)

for (var i = 0; i < ar.length; i++) {
	const reader = new FileReader();
    reader.readAsDataURL(ar[i]);
    reader.addEventListener("load", (e)=>{
	let newImg =`<img src='${e.currentTarget.result}'>`;
	document.querySelector(".resultado").innerHTML += newImg;
})
}
}