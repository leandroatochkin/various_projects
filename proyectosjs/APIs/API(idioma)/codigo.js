"use strict";
const modal = document.querySelector(".modal-overlay")

const definirIdioma = ()=>{
	document.querySelector(".en").addEventListener("click", ()=>{
		localStorage.setItem("idioma", "en")//// setea el item "en" en el localstorge
        cerrarModal();///cierra el modal
	})
	document.querySelector(".es").addEventListener("click", ()=>{
		localStorage.setItem("idioma", "es")
        cerrarModal();
	})
}



const cerrarModal = ()=>{
	
	modal.style.animation = "desaparecer 1s forwards";
	setTimeout(()=>modal.style.display ="none", 1000);
}

const idioma = localStorage.getItem("idioma");

if (idioma === null) definirIdioma(); ////saca el modal en caso de ya haber selecionado un idioma, o sea no aparece si refresco la página
else {
	console.log(`Idioma. ${idioma}`);
    modal.style.display = "none";
}

if (idioma == "es") mostrarEnEspañol();
else mostrarEnIngles(); /// en caso de ya tener las funciones paralos idiomas de la página