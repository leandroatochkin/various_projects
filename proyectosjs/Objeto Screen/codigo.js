AnchoTotal = screen.width; //ancho total de pantalla
AlturaTotal = screen.height;//Alto total de pantalla

AnchoDisponible = screen.availWidth;//ancho disponible de pantalla
AlturaDisponible = screen.availHeight;//alto disponible de pantalla

Resolucion = screen.pixelDepth;//resolucion de color
Profundidad = screen.colorDepth;// profundidad de los bits de la paleta de los colores



console.log(`Width: ${AnchoTotal}`)
console.log(`Height: ${AlturaTotal}`)
console.log(`Available Width: ${AnchoDisponible}`)
console.log(`Available Height: ${AlturaDisponible}`)
console.log(`pixelDepth: ${Resolucion}`)
console.log(`colorDepth: ${Profundidad}`)

