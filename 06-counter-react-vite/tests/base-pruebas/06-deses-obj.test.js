import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe de retornar un objeto',() =>{
        const clave = 'El_Papi1502';
        const edad = 54
        const nombre = 'juan'
        const user = usContext({ clave, nombre, edad, rango : 'Capitán'});

        expect(user).toStrictEqual({
            
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
            
        })
    });

})
