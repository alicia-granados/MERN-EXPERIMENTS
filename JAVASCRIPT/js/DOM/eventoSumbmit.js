// Eventos del DOM -> Submit

const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit",e => {
    e.preventDefault();

    const nombre = document.querySelector('.nombre').value
    console.log(nombre)

    const password = document.querySelector('.password').value
    console.log(password)

    if ( nombre === '' || password === ''){
        console.log('todos los campos son obligatorios')
    }else{
        console.log('enviando')
    }

    console.log('enviaste formulario')
})
