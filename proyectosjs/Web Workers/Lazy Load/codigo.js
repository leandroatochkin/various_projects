"use strict";

const publicaciones = document.querySelector(".publicaciones");
let contador = 0;
const createPublicationCode = (name,content) =>{
	const container = document.createElement("DIV");
	const comentarios = document.createElement("DIV");
	const nombre = document.createElement("H3");
	const contenido = document.createElement("p");
	const btnComentario = document.createElement("INPUT");
	const btnEnviar = document.createElement("INPUT");

	container.classList.add("publicacion");
	comentarios.classList.add("comentarios");
	btnEnviar.classList.add("enviar");
	btnComentario.classList.add("comentario")

	btnComentario.placeholder ="Introduce un comentario...";


	nombre.textContent = name;
	contenido.textContent = content;

	btnEnviar.type = "submit";

	comentarios.appendChild(btnComentario);
	comentarios.appendChild(btnEnviar);

	container.appendChild(nombre);
	container.appendChild(contenido);
	container.appendChild(comentarios);

	return container;

}
const loadMore = entry =>{
	if (entry[0].isIntersecting) loadPublications(4);

}


const observer = new IntersectionObserver(loadMore);


const loadPublications = async num => {
const request = await fetch("info.txt");
const content = await request.json();
const arr = content.content;
const documentFragment = document.createDocumentFragment();
for (let i =0; i < num; i++) {
	 if (arr[contador] != undefined) {
	 const newPublication = createPublicationCode(arr[contador].nombre,arr[contador].contenido);
	 documentFragment.appendChild(newPublication);
	 contador++;
	 if (i == num-1) observer.observe(newPublication)
	 } else {
	 	let noMore = document.createElement("H3");
	 	noMore.textContent = "No hay mas publicaciones";
	 	documentFragment.appendChild(noMore);
	 	publicaciones.appendChild(documentFragment);
	 	break;
	 }
}
publicaciones.appendChild(documentFragment);
}

loadPublications(10);