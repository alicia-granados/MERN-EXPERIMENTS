/** @jest-environment jsdom */
import { render } from "@testing-library/react"
import {GifItem} from "../../src/components";

describe('Pruebas en <GifItem/>', () => {

    const title= 'ateez';
    const url='https://one-punch.com/ateez.jpg';

    test('debe de hacer match con el shapshot',() =>{
        const {container } = render(<GifItem title={title} url = {url}/>)
        expect ( container ).toMatchSnapshot();
    });


})