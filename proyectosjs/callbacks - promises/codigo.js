class Persona{
	constructor(nombre, instagram){
		this.nombre = nombre;
		this.instagram = instagram
	}
};

const data = [["nombre1", "@instagram1"],
	          ["nombre2", "@instagram2"],
	          ["nombre3", "@instagram3"],
	          ["nombre4", "@instagram4"]];

const personas = [];

for (let i = 0; i < data.length; i++) {
	personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersonas = (id) => {
	return new Promise ((res,rej)=>{
		if (personas[id] == undefined) rej("no se ha encontrado la persona");
		else {res(personas[id])}
	})
}

const obtenerInstagram = (id) => {
	return new Promise ((res,rej)=>{
		if (personas[id].instagram == undefined) rej("no se ha encontrado el instagram");
		else {res(personas[id].instagram)}
	})
}

let id = 1;
obtenerPersonas(id).then((persona)=>{
	console.log(persona.nombre);
	return obtenerInstagram(id);})
.then((instagram)=>{
	console.log(instagram);}).catch((e)=>{
		console.log(e)
	})



