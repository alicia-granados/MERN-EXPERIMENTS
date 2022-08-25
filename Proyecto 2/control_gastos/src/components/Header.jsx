import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
  presupuesto, 
  setPresupuesto,
  isValidPresupuesto, 
  setIsValidPresupuesto, 
  gastos,
  setGatos
}) => {
  return (
    <div>
      <header>
          <h1>Planificador de gastos</h1>
          { isValidPresupuesto ? (
            <ControlPresupuesto
              presupuesto={presupuesto}
              gastos={gastos}
              setGatos={setGatos}
              setPresupuesto={setPresupuesto}
              isValidPresupuesto={isValidPresupuesto}
            />
          ): (
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
            />
          )}
      </header>
    </div>
  )
}

export default Header
