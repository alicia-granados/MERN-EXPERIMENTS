/** @jest-environment jsdom */
import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {
  /*test('debde de hacer match con el snapshot',() =>{
    const tittle='Hola soy goku'
    const {container} = render(<FirstApp title={tittle}/>)
    expect(container).toMatchSnapshot();

  })
  */
  test('debde de mostrar el titulo en un h1',() =>{
    const tittle='Hola soy goku'
    const {container,getByText, getByTestId } = render(<FirstApp title={tittle}/>)
    expect(getByText(tittle)).toBeTruthy();

    //const h1 = container.querySelector('h1');
    //expect(h1.innerHTML).toBe(tittle) toma espacios
    //expect(h1.innerHTML).toContain(tittle);
    expect(getByTestId('test-title').innerHTML).toContain(tittle);
  })

  test('debde de mostrar el subtitulo enviado por props',() =>{
    const tittle='Hola soy goku'
    const subtitle='Hola soy subtitulo'
    const {getAllByText } = render(
      <FirstApp 
        title={tittle}
        subtitle={subtitle}
      />
    );
    expect(getAllByText(subtitle).length).toBe(2);
  
  })
})
