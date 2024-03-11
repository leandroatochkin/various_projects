"use strict";

const zona = document.querySelector(".zona");
zona.addEventListener("dragover", (e)=>{//no te olvdes de establecer a (e) como parametro en las func flecha o no funciona nada 
	e.preventDefault();//previente el comportamiento por defecto que es el del simbolo prohibido
})

zona.addEventListener("drop", (e)=>{
	let n = e.dataTransfer.getData("textura")
	zona.style.background = `url("textura${n}.jpg")`

})

for (let i = 1; i < document.querySelector(".texturas").children.length + 1; i++) {
	document.querySelector(`.textura${i}`).addEventListener("dragstart", (e)=>cambiarTextura(i,e))
}

const cambiarTextura = (n,e) => {
e.dataTransfer.setData("textura", n)
}


