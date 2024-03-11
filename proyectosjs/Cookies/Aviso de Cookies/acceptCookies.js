"use strict";

const newFechaUTC = dias =>{//convierte tiempo unix en tiempo utc
	let fecha = new Date();
	fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
	return fecha.toUTCString();
}

const crearCookie = (name, dias)=>{
	let expires = newFechaUTC(dias)
	document.cookie = `${name};expires=${expires}`;
}

crearCookie("usuario=Leandro", "4");

const obtenerCookie = cookieName => {
	let cookies = document.cookie;
	cookies = cookies.split(";");
	for (let i=0; cookies.length > i; i++){
		let cookie = cookies[i].trim();
		if (cookie.startsWith(cookieName)) {
			return cookie.split("=")[1];
		} 
	}
	return "No hay cookies con ese nombre.";
}

if (obtenerCookie("acceptedCookies")!== "si"){
	setTimeout(()=>{
		document.querySelector(".bg-modal").style.zIndex="10";
		document.querySelector(".bg-modal").style.opacity="1";
		document.getElementById("accept").addEventListener("click", ()=>{
		crearCookie("acceptedCookies=si",30);
		document.querySelector(".bg-modal").style.opacity="0";
			setTimeout(()=>{
				document.querySelector(".bg-modal").style.zIndex="-1";
			},1000)
		})

		document.getElementById("deny").addEventListener("click", ()=>{
			crearCookie("acceptedCookies=no",30);
			document.querySelector(".bg-modal").style.opacity="0";
			setTimeout(()=>{
				document.querySelector(".bg-modal").style.zIndex="-1";
			},1000)
		})
	}, 200)
}