/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {
  
  const tittle='Hola soy goku';
  const subtitle='Hola soy subtitulo'

  test('debe de hacer match con el shapshot',() =>{
    const {container } = render(<FirstApp title={tittle}/>)
    expect ( container ).toMatchSnapshot();
  });

  test('dede de mostrar el mensaje "Hola soy goku"',() =>{
    render(<FirstApp title={tittle}/>)
    expect(screen.getByText(tittle)).toBeTruthy();
    //screen.debug();
  });

  test('dede de mostrar el titulo en un h1',() =>{
    render(<FirstApp title={tittle}/>)
    //expect( screen.getAllByRole('heading', {level: 1}).innerHTML).toContain(tittle);
    expect( screen.getByRole('heading', {level: 1, name:tittle}));
  });

  test('dede de mostrar el subtitulo enviado por props',() =>{
    render(
      <FirstApp 
        title={tittle}
        subtitle={subtitle}
      />
    );
    expect(screen.getAllByText(subtitle).length).toBe(2);
  
  })
})
