// Funciones -> Arrow Function

const suma = () => {
    console.log( 1+2)
}
suma()


const suma1 = (num1,num2= 0) => {
    console.log(num1+ num2)
}
suma1(1,5)

const suma2 = (num1,num2= 0) => {
    return num1+ num2
}
const resultado = suma2(1,5)
console.log(resultado)

const suma3 = (num1,num2= 0) =>  num1+ num2

const resultado2 = suma3(1,5)
console.log(resultado2)

// solo con un parametro
const suma4 = numero => numero+20
const resultado4 = suma4(1)
console.log(resultado4)

//sin parametros
const suma5 = () => 21+3
const resultado5 = suma5()
console.log(resultado5)

