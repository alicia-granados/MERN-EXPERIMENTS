console.log('??')

const saludar = function (nombre){
    return `hola , ${nombre}`
}
console.log(saludar);

const saludar2 = (nombre) =>{
    return `hola , ${nombre}`
}
console.log(saludar2('Vegeta'));

const saludar3 = (nombre) => `hola , ${nombre}`
console.log(saludar3('Vegeta'));

const saludar4 = () => 'hola mundo';
console.log(saludar4())


const getUser = () => ({
    uid: '12345',
    username:'ali'
});
console.log(getUser())

const getUsuarioActivo = nombre => ({
    uid: '12345',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo)