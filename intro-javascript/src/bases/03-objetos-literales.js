const persona = {
    nombre: 'Tony', 
    apellido: 'stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 256130
    }
};

console.table(persona);

console.log({persona})

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona)
console.log(persona2)