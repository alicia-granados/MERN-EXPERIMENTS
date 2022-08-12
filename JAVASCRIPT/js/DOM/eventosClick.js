// Eventos del DOM -> Clicks

const heading= document.querySelector(".heading")
heading.addEventListener('click', () => console.log("diste click en el heading"))

const clickHeading = () => console.log("diste click en el heading con la función")

heading.addEventListener('click',clickHeading)

heading.addEventListener('click',() => {
    heading.textContent= "Nuevo heading al dar click"
})

const enlaces= document.querySelectorAll('.navegacion a')
enlaces.forEach(enlace => {
    enlace.addEventListener('click',() => {
        console.log( "diste click en un enlace")
    })
});
