import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <div>
      <header>
          <h1>Planificador de gastos</h1>
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
          />
      </header>
    </div>
  )
}

export default Header
