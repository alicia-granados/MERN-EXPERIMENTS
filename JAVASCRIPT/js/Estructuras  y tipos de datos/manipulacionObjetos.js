//Objetos ->  manipulación

const producto = {
    nombre : "Tablet",
    precio : 300 ,
    disponible: true
}

// Reescribir un valor
producto.nombre = "Monitor"

// Si no existe, lo va añadir
producto.imagen = "imagen.jpg"

// eliminar
delete producto.disponible
console.table(producto)

// Permite añadir, reescribir y eliminar , y se quede el objeto tal cual
// Object.freeze(producto)

// Permite reescribir pero no añadir ni eliminar  el objeto
// Object.seal(producto)