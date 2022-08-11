//Objetos -> destructurin de 2 o más objetos

const producto = {
    nombre : "Tablet",
    precio : 300 ,
    disponible: true
}

const cliente ={
    nombre : 'juan',
    premium : true
}

const { nombre,  precio, disponible } = producto

// no puede haber dos variables iguales, por el cual se puede usar un alias.
const { nombre: nombreCliente , premium} = cliente

console.log(nombre)
console.log(nombreCliente)