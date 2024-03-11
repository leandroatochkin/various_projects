"use strict";

const zona = document.querySelector(".zona-de-arrastre");
zona.addEventListener("dragover", (e)=>{
	e.preventDefault();///previene el comportamiento x defecto
	changeStyle(e.srcElement, "#444")
});
zona.addEventListener("dragleave", (e)=>{
	e.preventDefault();
	changeStyle(e.srcElement, "#888") ///srcElement selecciona el elemento zona de arrstre
});



//zona.addEventListener("drop", (e)=>{
//	e.preventDefault();
//	changeStyle(e.srcElement, "#888") ///srcElement selecciona el elemento zona de arrstre
//	cargarArchivo(e.dataTransfer.files[0]);
//});


//zona.addEventListener("drop", (e)=>{
//	e.preventDefault();
//	changeStyle(e.srcElement, "#888") ///srcElement selecciona el elemento zona de arrstre
//	cargarImagen(e.dataTransfer.files[0]);
//});



zona.addEventListener("drop", (e)=>{
	e.preventDefault();
	changeStyle(e.srcElement, "#888") ///srcElement selecciona el elemento zona de arrstre
	cargarVideo(e.dataTransfer.files[0]);
	zona.style.border = "4px solid #888";
});

const changeStyle = (obj, color)=>{//toma de argumento el obj(zona de arrastre) y el color
	obj.style.color = color;
	obj.style.border = `4px dashed ${color}`
};

const cargarArchivo = ar => {
	const reader = new FileReader();
	reader.readAsText(ar);
	reader.addEventListener("load", e=>{//load es el evento de carga de archivo
    	document.querySelector(".resultado").textContent = e.currentTarget.result; //currentTarget es el archivo
	})
}

const cargarImagen = ar => {
	const reader = new FileReader();
	reader.readAsDataURL(ar);
	reader.addEventListener("load", e=>{//load es el evento de carga de archivo
		let url = URL.createObjectURL(ar);
		let img = document.createElement("IMG");
		img.setAttribute("src", url);
    	document.querySelector(".resultado").appendChild(img); //currentTarget es el archivo
	})
}

const cargarVideo = ar => {
	const reader = new FileReader();
	reader.readAsArrayBuffer(ar);
	reader.addEventListener("progress", e=>{//muestra el progreso de carga en la consola
		//console.log(ar.size)//muestra el tamaño del archivo
		//console.log(e.loaded)//muestra lo que se va cargando
		let carga = Math.round(e.loaded/ar.size*100);
		//console.log(carga)
		zona.textContent = `${carga}%`; //muestra el progreso
		document.querySelector(".barra-de-carga").style.padding = "75px 20px";
		document.querySelector(".barra-de-carga").style.width = `${carga/3.6}%`;
	})
	reader.addEventListener("loadend", e=>{
		changeStyle(zona,"#4f9");
		zona.style.borderStyle = "solid";
		document.querySelector(".barra-de-carga").style.background = "#4f8";
		setTimeout(()=>{//despues de 0.5s modifica la apariencia
			zona.style.color="#fff";
			zona.style.animation="aparecer 1s forwards";
			zona.textContent="Carga Completa"
		},500)
	})
	reader.addEventListener("load", e=>{//load es el evento de carga de archivo
		let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'})
		let url = URL.createObjectURL(video);
		let img = document.createElement("IMG");
		img.setAttribute("src", url);
    	document.querySelector(".resultado").appendChild(img); //currentTarget es el archivo
    	
	})
}

