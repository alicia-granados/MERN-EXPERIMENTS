// Fetch API -> Async Await


const url = "https://jsonplaceholder.typicode.com/users"

const consultarAPI  =  async url => {
    const respuesta = await fetch(url)
    console.log("después de respuesta")

    const resultado = await respuesta.json()
    console.log("después de resultado")
    console.log(resultado)
    
    resultado.forEach(user => {
        console.log(user)
    });
}

consultarAPI(url)