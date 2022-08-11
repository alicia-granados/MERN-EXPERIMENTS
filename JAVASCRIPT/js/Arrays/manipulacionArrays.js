// Manipulacion de Arrays 

const tecnologias = ["html", "CSS", "react"]

console.log(tecnologias)
console.table(tecnologias)

// añadir elementos al array
// tecnologias.push("GraphQL")// añade al final del array
// tecnologias.unshift("Javascript") // añade al inicio del array
// NOTA SIN MODIFICAR EL ARREGLO original
const nuevoArreglo= [...tecnologias,"graphql"]
const nuevoArreglo2 = [ "Javascript", ...tecnologias]

console.log(nuevoArreglo)
console.log(nuevoArreglo2)

// elimnar elementos del array
// tecnologias.pop() // elimina al final
// tecnologias.shift() //elimina al inicio
// ELIMINA UNA POSICION EN ESPECIFICO
//tecnologias.splice(2,1) izquierda-> desde donde va a eliminar, derecha -> cuantos elementos

//NOTA: SIN MODIFICAR EL ARREGLO ORIGINAL,
const nuevoArray = tecnologias.filter(function(tech){
    //console.log(tech)
    return tech !== "html"
})

console.log(nuevoArray)
console.log(tecnologias)

// modificar elementos del array
// tecnologias[0]="graphql"
// NOTA: SIN MODIFICAR EL ARREGLO ORIGINAL,
const nuevoArrayModificado = tecnologias.map(function(tech){
    //console.log(tech)
    if(tech === "html"){
        return "graphql"
    }else{
        return tech
    }
})

console.log(nuevoArrayModificado)
console.log(tecnologias)
