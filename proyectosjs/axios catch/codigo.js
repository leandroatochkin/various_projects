const getName = async ()=>{
	let resultado = await axios("texto.txt");
	let div = document.createElement("DIV")
	div.classList.add("nombre");
	div.innerHTML= resultado.data.nombre;
	document.body.appendChild(div);
}

const getAge = async ()=>{
	let resultado = await axios("texto.txt");
	let div = document.createElement("DIV")
	div.classList.add("edad");
	div.innerHTML= resultado.data.edad;
	document.body.appendChild(div);
}

document.getElementById('getName').addEventListener("click", getName)
document.getElementById('getAge').addEventListener("click", getAge)