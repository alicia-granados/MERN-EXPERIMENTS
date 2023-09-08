import { fireEvent, render , screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import useFetchGifs from "../../src/hooks/useFetchGifs";

//hace mook del path
jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en </>', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente ', () =>{
        
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true 
        });

        render(<GifGrid category={category}/>);
        //screen.debug();
        expect(screen.getByText('Cargando....'));
        expect(screen.getByText(category));
    });

    test('debe de mostrar items cuadno se cargan las imagenes useFetchGifs ', () =>{
        const gifs= [
            {
                id:'ABC',
                title:'Saitana',
                url:'https://localhost/saitana.jpg'
            },
            {
                id:'123',
                title:'goku',
                url:'https://localhost/goku.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false 
        });
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
})