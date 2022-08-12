// Condicionales -> Scope de variables

const precio = 300

function unaFuncion(){
    const precio = 600
    console.log(precio)
}

console.log(precio)
unaFuncion()

if (true){
    console.log(precio)
}