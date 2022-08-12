//Funciones-> Arrow Functionsy Array Methods

const tecnologias = ["html", "CSS", "react"]

const nuevoArray= tecnologias.map(tech => {
    //console.log(tech)
    if(tech === "html"){
        return "graphql"
    }else{
        return tech
    }
})

const nuevoArray2 = tecnologias.filter(tech =>  tech !== "html" )

console.log(tecnologias)
console.log(nuevoArray)
console.log(nuevoArray2)
