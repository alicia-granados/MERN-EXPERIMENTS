// Iteradores de Arrays 

const tecnologias = ["html", "CSS", "react"]

// forEach --> Accede a cada elemento del array
tecnologias.forEach( function (){
    console.log("ejecutando funcion")
})

tecnologias.forEach( function (tech ){
    console.log(tech)
})
// solo lo en lista pero no crea nuevo arreglo
const arrayForeach = tecnologias.forEach( function (tech ){
    return tech
})


// map
tecnologias.map( function (){
    console.log("ejecutando funcion")
})

tecnologias.map( function (tech ){
    console.log(tech)
})
//  crea nuevo arreglo
const arrayMap = tecnologias.map( function (tech ){
    return tech
})

console.log(arrayForeach)
console.log(arrayMap)