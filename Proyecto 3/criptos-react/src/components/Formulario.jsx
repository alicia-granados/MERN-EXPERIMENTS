import { useEffect, useState } from 'react'
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

    const [criptos, setCriptos] = useState([])

    const [moneda, SelectMonedas] = useSelectMoneda("Elige tu moneda", monedas)
    
    useEffect(() => {
        const consultarAPI= async ()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            
            const arrayCriptos = resultado.Data.map(cripto =>{
                const objeto ={
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })
            setCriptos(arrayCriptos)
        }
        consultarAPI()
    }, [])
    return (
        <form>
            <SelectMonedas/>
            <InputSubmit type='submit' value="Cotizar"/>
        </form>
    )
}

export default Formulario
