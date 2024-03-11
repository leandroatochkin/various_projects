let alumnos = [{
	nombre: "Leandro A.",
	email:"leandroa@gmail.com",
	materia:"Física 1",
},
{
	nombre: "Guillermo B.",
	email:"guillermob@gmail.com",
	materia:"Química 1",
},
{
	nombre: "Gustavo C.",
	email:"gustavoc@gmail.com",
	materia:"Matemática",
},
{
	nombre: "Sonia D.",
	email:"soniad@gmail.com",
	materia:"Cálculo",
},
{
	nombre: "Facundo E.",
	email:"facundoe@gmail.com",
	materia:"Programación",
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

let htmlCode = "";

for (alumno in alumnos) {
let datos = alumnos[alumno];
let nombre = datos["nombre"];
let email = datos["email"];
let materia = datos["materia"];
let htmlCode += `
<div class= "grid-item nombre">${nombre}</div>
		<div class= "grid-item email">${email}</div>
		<div class= "grid-item materia">${materia}</div>
		<div class= "grid-item semana">
			<select class = "semana-elegida">
				<option value ="Semana 1">Semana 1</option>
				<option value ="Semana 2">Semana 2</option>
			</select>
		</div>`
}

contenedor.innerHTML = htmlCode;

boton.addEventListener("click", ()=>{
	let confirmar = confirm("¿Realmente quiere confirmar?");
	if (confirmar){
		document.body.removeChild(boton)
		let elementos = document.querySelectorAll(".semana");
	let semanasElegidas = document.querySelectorAll(".semana-elegida");
	for (elemento in elementos){
		semana = elementos[elemento];
		semana.innerHTML = semanasElegidas[elemento].value;
	}
	}
})