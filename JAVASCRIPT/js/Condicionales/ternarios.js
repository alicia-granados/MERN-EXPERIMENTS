// Condicionales ->  Ternarios

const autenticado = true

autenticado ? console.log("usuario autenticado") : console.log("NO autenticado, dirigir hacia login")

//negar condicion
!autenticado ? console.log("NO autenticado, dirigir hacia login") : console.log("usuario autenticado") 

//Doble ternario
const saldo = 600
const pagar = 700
const tarjeta = true
//saldo > pagar ? console.log("puedes pagar con saldo"): console.log("No puedes pagar")

saldo > pagar ? console.log("puedes pagar con saldo") : 
    tarjeta ? 
    console.log("puedes pagar con tarjeta") : 
    console.log("no puedes pagar")
