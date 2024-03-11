fetch("https//reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify({
                "nombre": "nombre",
                "apellido": "apellido"
        }),
        headers: {"Content-type": "application/json"}
})
        .then(res=>res.text());///<=== SE PUEDE CONVERTR A JSON DIRECTAMENTE CON .JSON()
        .then(res=>JSON.parse(res));///<===DESERIALIZA