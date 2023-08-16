console.log('??')

//arreglos en js

const arreglo = new Array(100);
arreglo.push(1);
console.log(arreglo);

const arreglo2 = [1,2,3,4];
console.log(arreglo2);
//arreglo2.push(1);

let arreglo3 = [...arreglo2, 5];
console.log(arreglo3);

const arreglo4 = arreglo3.map(function(numero) {
    return numero * 2
});
console.log(arreglo4);
