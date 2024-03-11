

const imagen = document.querySelector(".imagen")

fetch("llave.jpg")
        .then(res=>res.blob())///<=== SE PUEDE CONVERTR A JSON DIRECTAMENTE CON .JSON()
        .then(res=>console.log(res))///<===DESERIALIZA
