// Eventos del DOM -> Inputs

const inputNombre = document.querySelector('.nombre')
inputNombre.placeholder = 'placeholder desde JS'

inputNombre.addEventListener("input", () => console.log('escribiendo en el input'))
// no recomendado
inputNombre.addEventListener("input", () => {
    console.log('escribiendo en el input')
    console.log(inputNombre.value)
})
// recomendado
inputNombre.addEventListener("input", (e) => {
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password')

const funcionPassword = () => {
    inputPassword.type = "text"
    setTimeout(() => {
        inputPassword.type = "password"
    },100)
}

inputPassword.addEventListener("input",funcionPassword )
