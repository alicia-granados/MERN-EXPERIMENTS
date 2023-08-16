console.log('??')

const activo = true;
let mensaje = '';
if(!activo){
    mensaje = 'activo';
}else {
    mensaje= 'inactivo';
}

console.log(mensaje)

const mensaje2 = (!activo)  ? 'activo' : 'inactivo';
console.log(mensaje2)

const mensaje3 = !activo && 'activo';
console.log(mensaje3)