//  condicionales ->  condicion || y &&

const saldo = 600
const pagar = 700
const tarjeta = true

if(saldo > pagar){
    console.log("puedes pagar con tu saldo")
} else if (tarjeta){
    console.log("puedes pagar con tu tarjeta")
} else{
     console.log("no, no puedes pagar")
}
// || -> al meno una debe cumplirse
if(saldo > pagar || tarjeta){
    console.log("puedes pagar con tu saldo")
} else{
     console.log("no, no puedes pagar")
}

// && -> ambas deben cumplirse
if(saldo > pagar && tarjeta){
    console.log("puedes pagar con tu saldo")
} else{
     console.log("no, no puedes pagar")
}