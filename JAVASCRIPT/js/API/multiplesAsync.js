// Fetch API -> Async Await (multples llamados)


const url = "https://jsonplaceholder.typicode.com/users"
const url2 = "https://jsonplaceholder.typicode.com/photos"

const consultarAPI  =  async  () => {

    const inicio = performance.now() 

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

    console.log("iniciando segunda consulta")

    const respuesta2 = await fetch(url)
    const resultado2 = await respuesta2.json()

    const fin = performance.now()

    console.log(`Ejecución primer async: ${fin - inicio } ms`)
}

consultarAPI()


const consultarAPI2  =  async ()  => {
    const inicio = performance.now() 

    const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)])

    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()

    console.log(resultado)
    console.log(resultado2)

    const fin = performance.now()

    console.log(`Ejecución segundo async: ${fin - inicio } ms`)
}


consultarAPI2()