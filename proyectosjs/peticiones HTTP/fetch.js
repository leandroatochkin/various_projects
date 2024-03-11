fetch("https//reqres.in/api/users");
        .then(res=>res.text());///<=== SE PUEDE CONVERTR A JSON DIRECTAMENTE CON .JSON()
        .then(res=>JSON.parse(res));///<===DESERIALIZA

console.log(peticion)