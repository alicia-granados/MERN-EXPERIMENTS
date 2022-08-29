import styled from '@emotion/styled'
import useSelectMoneda from '../hooks/useSelectMoneda'

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
    transition: background-color .3s ease;
    &:hover{
        background-color: #7a7dfe;
        cursor:pointer
    }
`
const Formulario = () => {
    const [SelectMonedas] = useSelectMoneda("Elige tu moneda")
    const [SelectCriptomonedas] = useSelectMoneda("Elige tu Criptomoneda") 

    return (
        <form>
            <SelectMonedas/>
            <SelectCriptomonedas/>
            <InputSubmit type='submit' value="Cotizar"/>
        </form>
    )
}

export default Formulario
