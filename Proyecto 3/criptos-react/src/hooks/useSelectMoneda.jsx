import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
`
const useSelectMoneda = (label,opciones) => {
    
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <select>
                <option value=''>Seleccione</option>
                {opciones.map(opcion =>(
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </select>
        </>
    )
    return [ SelectMonedas ]
}

export default useSelectMoneda
