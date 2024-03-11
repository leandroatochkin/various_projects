"use strict";

const IDBRequest = indexedDB.open("database", 1); //solicita abrir una base de datos en el navegador
IDBRequest.addEventListener("upgradeneeded", ()=>{///"upgrade needed" se utiliza para crear una base de datos
	const db = IDBRequest.result; /// result es la base de datos creada
db.createObjectStore("nombres", {
		autoIncrement: true //define una key ùnica para cada entrada
	})
}) 

IDBRequest.addEventListener("success", ()=>{//en caso de éxito
	console.log("Se ha creado la base de datos")
});

IDBRequest.addEventListener("error", ()=>{//en caso de error
	console.log("Ha ocurrido un error")
});

document.getElementById('add').addEventListener("click", ()=>{
	let nombre = document.getElementById("nombre");
	if (nombre.value.length > 0) {
		if(document.querySelector(".posible") != undefined) {
			if (confirm("Hay elementos sin guardar. ¿Quiere continuar?")) {
				addObjeto({nombre: nombre.value});
				nombre.value = "";
				leerObjetos()
			}
		} else {
			    addObjeto({nombre: nombre.value});
			    nombre.value = "";
				leerObjetos()
		}

	}

})
	

const addObjeto = objeto =>{ //función para agregar objetos a la base de datos
	//const db = IDBRequest.result;
	//const IDBtransaction = db.transaction("nombres", "readwrite")//los parámetros son el nombre de la bd y la propiedad (puede ser readonly tmb)
    //const objectStore = IDBtransaction.objectStore("nombres")//crea el almacén
    const IDBData = getIDBData("readwrite", "objeto agregado correctamente");
    IDBData.add(objeto);}///se reemplaza todo lo de arriba por una única funcion y se repite en todos los métodos
    //IDBData[1].addEventListener("complete", ()=>{///se reemplaza el transaction por idbdata[1], lo mismo ocurre con el object store
    	//console.log("objeto agregado correctamente");
    //})


const leerObjetos = objeto =>{ //función para leer objetos de la base de datos
	//const db = IDBRequest.result;
	//const IDBtransaction = db.transaction("nombres", "readonly")//los parámetros son el nombre de la bd y la propiedad (puede ser readonly tmb)
    //const objectStore = IDBtransaction.objectStore("nombres")//crea el almacén
    //const cursor = objectStore.openCursor();/// El cursor lee los datos
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = "";
    cursor.addEventListener("success", ()=>{
    	if (cursor.result){
    		let elemento = nombresHTML(cursor.result.key,cursor.result.value);
    		fragment.appendChild(elemento);
    		cursor.result.continue();///para que continue leyendo, sino lee solo el primer key
    	} else document.querySelector(".nombres").appendChild(fragment);// siempre la última vez que lee los datos es null así que siempre se va a ejectura esta linea a lo último
    })
    
}

const modificarObjeto = (key, objeto) =>{ //función para agregar modificar la base de datos. Se agrga el parámetro key
	//const db = IDBRequest.result;
	//const IDBtransaction = db.transaction("nombres", "readwrite")//los parámetros son el nombre de la bd y la propiedad (puede ser readonly tmb)
    //const objectStore = IDBtransaction.objectStore("nombres")//crea el almacén
    const IDBData = getIDBData("readwrite", "objeto modificado correctamente");
    IDBData.put(objeto, key);}///se reemplaza todo lo de arriba por una única funcion y se repite en todos los métodos
    //IDBData[1].addEventListener("complete", ()=>{///se reemplaza el transaction por idbdata[1], lo mismo ocurre con el object store
    //objectStore.put(objeto, key)/// se agrega key
    //IDBtransaction.addEventListener("complete", ()=>{
    	//console.log("objeto modificado correctamente");
    //})


const eliminarObjeto = (key) =>{ //función para eliminar objeto en la base de datos. Solo va el parámetro key
	//const db = IDBRequest.result;
	//const IDBtransaction = db.transaction("nombres", "readwrite")//los parámetros son el nombre de la bd y la propiedad (puede ser readonly tmb)
    //const objectStore = IDBtransaction.objectStore("nombres")//crea el almacén
    const IDBData = getIDBData("readwrite", "objeto eliminado correctamente");
    IDBData.delete(key);}///se reemplaza todo lo de arriba por una única funcion y se repite en todos los métodos
    //IDBData[1].addEventListener("complete", ()=>{///se reemplaza el transaction por idbdata[1], lo mismo ocurre con el object store
    //objectStore.delete(key)/// se agrega key
    //IDBtransaction.addEventListener("complete", ()=>{
    	//console.log("objeto eliminado correctamente");
    //})



const getIDBData = (mode, msg) =>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres", mode);//los parámetros son el nombre de la bd y la propiedad (puede ser readonly tmb)
    const objectStore = IDBtransaction.objectStore("nombres");//crea el almacén
    IDBtransaction.addEventListener("complete", ()=>{
    	console.log(msg);
    })

    return objectStore;
};

const nombresHTML = (id, name) => {
	const container = document.createElement("DIV");
	const h2 = document.createElement("h2");
	const options = document.createElement("DIV");
	const saveButton = document.createElement("button");
	const deleteButton = document.createElement("button");
	container.classList.add("nombre");
	options.classList.add("options");
	saveButton.classList.add("imposible");
	deleteButton.classList.add("delete");

	saveButton.textContent = "Guardar";
	deleteButton.textContent = "Eliminar";

	h2.textContent = name.nombre;
	h2.setAttribute("contenteditable", "true");
	h2.setAttribute("spellcheck", "false");


	options.appendChild(saveButton);
	options.appendChild(deleteButton);

	container.appendChild(h2);
	container.appendChild(options);

	h2.addEventListener("keyup", ()=> {//para modificar los nombres y guardarlos
		saveButton.classList.replace("imposible", "posible")
	})

	saveButton.addEventListener("click", ()=>{
		if (saveButton.className == "posible") {
			modificarObjeto(id,{nombre: h2.textContent})
			saveButton.classList.replace("posible","imposible")
		}
	})

	deleteButton.addEventListener("click", ()=>{
		eliminarObjeto(id);
		document.querySelector(".nombres").removeChild(container)
	})

	return container;
}