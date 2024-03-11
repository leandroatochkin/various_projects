"use strict";
const addZeroes = n =>{
	if (n.toString().length < 2) return "0".concat(n);///n.string convierte el numero a string para averiguar length
	return n; ////agrega cero a las horas/min/seg menores a 10 para rellenar el reloj
}

const actualizarHora = () =>{
	const time = new Date();
	let hora = addZeroes(time.getHours());
	let min = addZeroes(time.getMinutes());
	let seg = addZeroes(time.getSeconds());
	document.querySelector(".hora").textContent = hora;
	document.querySelector(".min").textContent = min;
	document.querySelector(".seg").textContent = seg;
}

actualizarHora();

setInterval(actualizarHora, 1000)