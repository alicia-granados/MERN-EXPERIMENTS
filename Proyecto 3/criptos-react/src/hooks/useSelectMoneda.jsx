import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serifs;
    font-size: 24px;
    font-weight:700;
    margin: 15px 0;
`
const Select = styled.select`
    width:100%;
    font-family: 'Lato', sans-serifs;
    font-size: 18px;
    padding:14px;
    border-radius:10px;
    font-weight:700;
`
const useSelectMoneda = (label,opciones) => {

    const [state,setState] = useState('')
    
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value=''>Seleccione</option>
                {opciones.map(opcion =>(
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </Select>
        </>
    )
    return [state, SelectMonedas ]
}

export default useSelectMoneda
