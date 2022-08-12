// Condicionales -> comparación y operador estricto

const numero1 = 40
const numero2 = "40"

// comparación que no es estricto == (valor)
// === comparacion estrcita  (valor y tipo de dato)
if(numero1 == numero2){
    //se cumple la condición y se ejecuta el código 
    console.log("si,son iguales")
}else{
    // no se cumpla la condición, se ejecuta este código
    console.log("no, no son iguales")
}

if(numero1 === numero2){
    //se cumple la condición y se ejecuta el código 
    console.log("si, son iguales")
}else{
    // no se cumpla la condición, se ejecuta este código
    console.log("no, no son iguales")
}


if(numero1 === Number(numero2)){
    //se cumple la condición y se ejecuta el código 
    console.log("si, son iguales")
}else{
    // no se cumpla la condición, se ejecuta este código
    console.log("no, no son iguales")
}

const autenticado = true
if(autenticado){
    console.log("si está autenticado")
}
