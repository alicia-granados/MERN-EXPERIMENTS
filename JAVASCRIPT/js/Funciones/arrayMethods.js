//Funciones-> Otros Array Methods útiles

const tecnologias = ["html", "CSS", "react"]
const numeros = [10,20,30]
let nuevoArray;

// Filter
nuevoArray = tecnologias.filter(tech =>  tech !== "html" )

console.log(nuevoArray)

// comprobar si un elemento exixste en el array
const resultado = tecnologias.includes('react')
console.log(resultado)

// devuelve si al menos un elemento cumple con la condición (no dice cual,ni cuantos)
const resultado2 = numeros.some(numero => numero > 15)
console.log(resultado2)

//devuelve el primer elemento que cumpla con la condición
const resultado3 = numeros.find(numero => numero > 15)
console.log(resultado3)

// retorna true o false si todos cumple la condicion
const resultado4 = numeros.every(numero => numero > 15)
console.log(resultado4)

// Acumulando el total
const resultado5 = numeros.reduce((total, numero) => numero + total, 0)
console.log(resultado5)

//Crea un nuevo array en base a una condición
const resultado6  = tecnologias.filter(tech =>  tech === "html" )
console.log(resultado6)

const resultado7  = numeros.filter(numero =>  numero >15 )
console.log(resultado7)

//
tecnologias.forEach(  (tech,index) => console.log(index))

const arrayMap = tecnologias.map( tech => tech)
console.log(arrayMap)