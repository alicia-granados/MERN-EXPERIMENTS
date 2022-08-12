// Eventos del DOM -> Submit

const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit",e => {
    e.preventDefault();

    const nombre = document.querySelector('.nombre').value

    const password = document.querySelector('.password').value
    const alertaPrevia = document.querySelector('.alerta')
    
    if (alertaPrevia){
        alertaPrevia.remove()
    }
    
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')

    if ( nombre === '' || password === ''){
        alerta.textContent = 'todos los campos son obligatorios'
        alerta.classList.add('error')
    }else{
        alerta.textContent= 'enviando'
        alerta.classList.add('exito')
    }

    console.log('enviaste formulario')
    formulario.appendChild(alerta)

})
