console.log('??')

const personajes =[ 'gooku','vegeta','trunks'];
const [, , p3] = personajes;
console.log(p3)

const retornaArreglo = () => {
    return ['ABC',123]
}

const [letras,numeros] = retornaArreglo();
console.log(letras, numeros)

const usseState= (valor) => {
    return [ valor, () => {
        console.log('hola mundo')
    }]
}

const [nombre , setNombre]  = usseState('goku');
console.log(nombre)
setNombre();