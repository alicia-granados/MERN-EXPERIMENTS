import styled from '@emotion/styled'
import useSelectMoneda from '../hooks/useSelectMoneda'
import {monedas} from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;;
    padding: 18px;
    color: #FFF;
    font-weight:700;
    text-transform:uppercase;
    font-size:20px;
    border-radius:5px;
    margin-top:20px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7a7dfe;
        cursor:pointer
    }
`
const Formulario = () => {

    const [SelectMonedas] = useSelectMoneda("Elige tu moneda", monedas)
    
    return (
        <form>
            <SelectMonedas/>
            <InputSubmit type='submit' value="Cotizar"/>
        </form>
    )
}

export default Formulario
