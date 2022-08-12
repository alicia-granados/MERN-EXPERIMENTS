// Selectores del DOM->  query Selector

// retorna unicamente un elemento
const heading = document.querySelector("h2")
console.log(heading)

const heading2 = document.querySelector(".DOM h2")
console.log(heading2)

const heading3 = document.querySelector(".heading")
console.log(heading3.textContent)
console.log(heading3.tagName)
console.log(heading3.className)