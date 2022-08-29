import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
`
const useSelectMoneda = (label) => {
    
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
        </>
    )
    return [ SelectMonedas ]
}

export default useSelectMoneda
