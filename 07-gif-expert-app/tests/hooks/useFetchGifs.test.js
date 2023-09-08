import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../src/hooks/useFetchGifs";

//hace mook del path
//jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en UseFetchGifs', () => {


    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes  y isLoading en false', async () => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });
})