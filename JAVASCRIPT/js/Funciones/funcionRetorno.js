//Funciones -> Parámetros y parámetros por default

function ejemplo(numero) {
    return [ "hola mundo", numero] 
}


function sumar2(numero = 0, numero2 = 0) {
    return numero + numero2
}

const resultado1 = sumar2(10,20)
console.log(resultado1)

const [resultado2, holaMundo] = ejemplo(1)
console.log(resultado2)
console.log(holaMundo)

function sumar3(numero = 0, numero2 = 0) {
    return {
        resultado: numero + numero2,
        mensaje: "hola mundo"
    }
}

const {resultado, mensaje } = sumar3(2,1)
console.log(resultado)
console.log(mensaje)