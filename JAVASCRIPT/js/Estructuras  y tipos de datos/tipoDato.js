//TIPOS DE DATOS

//Undefined
let  cliente
console.log(typeof cliente)

//number
const numero = 20.20
const numero2 = 30
const numero3 = -100
console.log(numero)
console.log(typeof numero)
console.log(typeof numero2)
console.log(typeof numero3)

//Boolean
const descuento = true 
console.log(descuento)
console.log(typeof descuento)

//Strings o cadenas de texto
const alumno = "juan"
const producto = '20'

//BigInt
const numeroGrande = BigInt(87845413541524545454546354635845463)
console.log(typeof numeroGrande)

// BigInt no se puede mezclar con un numero se tendria que cambiar el tipo de dato (coersion)
const numero1 = 10
console.log(numero + Number(numeroGrande))

// Symbol siempre va a hacer unico
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log (primerSymbol === segundoSymbol ) // mostrara falso

console.log(primerSymbol.valueOf)
console.log(segundoSymbol.valueOf)

//null
const descuentol = null
console.log(typeof descuentol)