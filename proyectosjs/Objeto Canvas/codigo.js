const canvas = document.getElementById("canvas");

const dif = canvas.getBoundingClientRect();

const ctx = canvas.getContext("2d");

let painting, color, linewidth, difX, difY;

canvas.addEventListener("mousedown", e=>{
	difX = e.clientX - difX.left;//calcula la posición del mouse
	difY = e.clientY - difY.top;
	painting = true;
	color = document.getElementById("color").value;
	linewidth = document.getElementById("lw").value;
    ctx.beginPath();
})

canvas.addEventListener("mousemove", e=>{
	if (painting) {
		dibujar(difX,difY,e.clientX-dif.left,e.clientY-dif.top);
		difX = e.clientX - difX.left;//calcula la posición del mouse
		dify = e.clientY - difY.left;
	}
})
canvas.addEventListener("mouseup",()=>{
	ctx.closePath();
	painting = false;
})

const dibujar = (x1,y1,x2,y2) =>{
	ctx.strokeStyle = color;
	ctx.lineWidth = linewidth;
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
	
}

//ctx.lineWidth = "4";
//ctx.strokeStyle = "#48e";
//ctx.fillStyle = "#26a";
//ctx.strokeRect(30, 50, 400, 200);
//ctx.fillRect(10, 430, 400, 200);
//ctx.lineTo(100,300);///crea los puntos de la linea
//ctx.lineTo(100,350);
//ctx.lineTo(100,400);
//ctx.lineTo(120,450);
//ctx.stroke();//crea la line
//ctx.closePath();//termina la linea
//ctx.beginPath();//inicia una nueva linea
//ctx.arc(120,120,100,10,40); //crea un circulo
//ctx.stroke();
