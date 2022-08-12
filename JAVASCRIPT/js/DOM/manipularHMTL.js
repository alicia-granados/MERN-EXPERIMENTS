// Manipular elementos con JS

const heading =document.querySelector(".heading")
heading.textContent = "un nuevo heading"

const inputNombre = document.querySelector("#nombre")
inputNombre.value= "un valor por default"

const enlaces = document.querySelectorAll(".navegacion a")
enlaces.forEach(enlace => enlace.textContent = "Nuevo enlace")
