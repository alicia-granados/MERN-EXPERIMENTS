import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en  11-async await', (done) => {

    test('getImagen debe de retornar url de la imagen',async () =>{

        const url = await getImagen();
        console.log(url);
        expect(typeof ulr ).toBe('string')
    });
   
})