"use strict";

const mq = matchMedia("(max-width: 500px)");//en caso de coincidir con este parametro
const caja = document.querySelector(".caja")

mq.addEventListener("change", ()=>{
	if (mq.matches) caja.classList.replace("caja", "responsive-caja")
		else if (caja.className == "responsive-caja") {caja.classList.replace("responsive-caja", "caja")}
})