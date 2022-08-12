// Funciones -> Function Expression
// function declaration 
sumar(1,2)
function sumar(numero=0, numero2=0){
    console.log(numero+numero2)
}
sumar(3,4)

// function expression -> no se puede usar antes de declarar
const sumar2 = function(numero,numero2){
    console.log(numero+numero2)
}
sumar2(30,20)

const sumar3 = function(numero,numero2){
    return numero+numero2
}
const resultado = sumar3(30,20)
console.log(resultado)