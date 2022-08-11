// Destructuring de Arrays 

const tecnologias = ["html", "CSS", "react"]

const [var1, var2, var3] = tecnologias
// destructuring de objetos extraen las propiedades del objeto
//en cambio el destructuring de un arreglo extrae las posiciones

console.log(var1)
console.log(var2)
console.log(var3)

const cliente = {
    nombre : "juan",
    tipo : "premium"
}
const {tipo } = cliente
console.log(tipo)

// equivalente  para arrays para no declarar varia variables
const [, ,  var4] = tecnologias
console.log(var4)