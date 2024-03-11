"use strict";

const newFechaUTC = dias =>{//convierte tiempo unix en tiempo utc
	let fecha = new Date();
	fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
	return fecha.toUTCString();
}

const crearCookie = (name, dias)=>{
	expires = newFechaUTC(dias)
	document.cookie = `${name};expires=${expires}`;
}

crearCookie("usuario=Leandro", "4");

const obtenerCookie = cookieName => {
	let cookies = document.cookie;
	cookies = cookies.split(";");
	for (i=0; cookies.length > i; i++){
		cookie = cookies[i].trim();
		if (cookie.startsWith(cookieName)) {
			return cookie.split("=")[1];
		} 
	}
	return "No hay cookies con ese nombre.";
}