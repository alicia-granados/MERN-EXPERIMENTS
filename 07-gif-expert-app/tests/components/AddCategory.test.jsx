import { fireEvent, render , screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas en <AddCategory/>', () => {
    test('debe de cambiar el valor de la caja de texto ', () =>{
        render(<AddCategory onNewCategory={ () => { }}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value:'Saitana'}});
        expect(input.value).toBe('Saitana');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () =>{
        
        const inputValue= 'Saitana';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);
        
        const input = screen.getByRole('textbox');
        const form= screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        
        expect(input.value).toBe('');
        //sea llamada la funcion  e solo una vez
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWidth(inputValue);
        
    });

    test('NO debe de llamar onNewCategory si el input NO tiene un valor', () =>{
        
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const form= screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });

})
