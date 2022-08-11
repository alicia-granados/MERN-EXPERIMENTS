//Objetos: unir 2 o más
const producto = {
    nombre : "Tablet",
    precio : 300 ,
    disponible: true
}

const cliente ={
    nombre : 'juan',
    premium : true
}


// se pierden datos al unir por la variable nombre y se modifica el objeto
//const nuevoObjeto = Object.assign(producto, cliente)

// no modifica el objeto 
//const nuevoObjeto = {...producto, ...cliente}

const nuevoObjeto = {
    producto : {...producto},
    cliente: {...cliente}
}
console.log(nuevoObjeto)