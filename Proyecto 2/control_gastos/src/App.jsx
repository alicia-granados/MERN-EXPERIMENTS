import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto,setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto]= useState(false);
  const [modal,setmodal]= useState(false);

  const handleNuevoGasto = () =>{
    setmodal(true)
  }
  return (
    <div className="App">
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto ? (
        <div className='nuevo-gasto'>
          <img
            src={IconoNuevoGasto} 
            alt='icono nuevo gasto'
            onClick={handleNuevoGasto}
          />
        </div>
      ): null }
      
      {modal && <p>desde mdal</p>}
    </div>
  )
}

export default App
