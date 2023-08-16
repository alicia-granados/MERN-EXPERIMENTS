console.log('??')

// destructuracion o asignacion destructurante

const persona ={
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman'
};
const {nombre, edad, clave} = persona;
//console.log(persona.nombre)
console.log(nombre);
console.log(edad);
console.log(clave);


const use= ({clave, edad, nombre, rango = 'capitan'}) => {
    //console.log(nombre, rango);
    return {
        nombreClave: clave,
        anios:edad,
        latlng: {
            lat: 14515,
            lng: -15151
        }
    }

}
const {nombreClave, anios, latlng:{lat,lng}} = use(persona)
console.log(nombreClave,anios)
console.log(lat, lng)