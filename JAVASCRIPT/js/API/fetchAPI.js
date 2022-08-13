// Fetch API y Promises

const url = "https://jsonplaceholder.typicode.com/users"

const consultarAPI = url => {
    fetch(url).
    then( respuesta  => {
        // console.log("haciendo fetch")
        // console.log(respuesta)
        return respuesta.json()
    }).then ( resultado => {
        // console.log("resultado casi listo")
        // console.log(resultado)
        resultado.forEach(user => {
            console.log(user)
        });
    })
}

consultarAPI(url)