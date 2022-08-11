//Objetos

const producto = {
    nombre : "Tablet",
    precio : 300 ,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)


//  Destructuring
// objeto que quiero acceder, y crea la variable 

const {nombre, precio, disponible } = producto

console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal Enhacement
//variables que estan fuera del objeto, colocarla dentro del objeto

const autentificado = true
const usuario = "juan"
//NOTA si ambos lados son iguales puede quedar solo el derecho
/*const nuevoObjeto = {
    autentificado: autentificado,
    usuario: usuario
}*/

const nuevoObjeto = {
    autentificado,
    usuario
}
console.table(nuevoObjeto)

