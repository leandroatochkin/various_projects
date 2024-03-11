const sendButton = document.getElementById('snd-nota');
sendButton.addEventListener("click", ()=>{
	let resultado, mensaje;
    try{
    	prevRes = parseInt(document.getElementById('nota-alumno').value);
    	if (isNaN(prevRes)){
    		throw "No es un número"
    	}
    	mensaje = definirMensaje(prevRes);
    	resultado = verificarAprobacion(8,5,prevRes)
    } catch(e){
    	resultado = "NO VALIDO";
    	mensaje = "Input no válido";
    }
	abrirModal(resultado, mensaje);
})

const definirMensaje = (pr)=>{
	let resultado;
	switch (pr){
	case 1: resultado = "Puntaje 1";
	break;
	case 2: resultado = "Puntaje 2";
	break;
	case 3: resultado = "Puntaje 3";
	break;
	case 4: resultado = "Puntaje 4";
	break;
	case 5: resultado = "Puntaje 5";
	break;
	case 6: resultado = "Puntaje 6";
	break;
	case 7: resultado = "Puntaje 7";
	break;
	case 8: resultado = "Puntaje 8";
	break;
	case 8: resultado = "Puntaje 9";
	break;
	case 10: resultado = "Puntaje 10";
	break;
    
default: resultado = null;

	}
	return resultado;
}

const verificarAprobacion = (nota1, nota2, prevRes)=> {
promedio = (nota1 + nota2 + prevRes) / 3;
if (promedio >= 7){
    return "<span class='green'>APROBADO</span>";
} else {
	return "<span class='red'>DESAPROBADO</span>";
}
}

const abrirModal = (res, msg) => {
	document.querySelector(".resultado").innerHTML = res;
	document.querySelector(".mensaje").innerHTML = msg;
	let modal = document.querySelector(".modal-background");
	modal.style.display = "flex";
	modal.style.animation = "aparecer 1s forwards"
}