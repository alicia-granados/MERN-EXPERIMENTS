//Funciones -> Parámetros y parámetros por default

sumar()

function sumar(numero) {
    console.log(numero)
}

sumar(10)

function sumar2(numero = 0, numero2 = 0) {
    console.log(numero+ numero2)
}

sumar2(10,20)
