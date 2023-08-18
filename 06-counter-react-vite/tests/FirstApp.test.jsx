/** @jest-environment jsdom */
import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {
  test('debde de hacer match con el snapshot',() =>{
    const tittle='Hola soy goku'
    render(<FirstApp title={tittle}/>)
  })
})
