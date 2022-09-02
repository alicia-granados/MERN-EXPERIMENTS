import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const VerCliente = () => {
    const [cliente,setCliente] = useState({})

    const {nombre,empresa,email,telefono,notas} = cliente

    const [cargando,setCargando] = useState(false)

    const {id}= useParams()

    useEffect(()=>{
        setCargando(!cargando)
        const obtenerClienteAPI = async () => {
            try{
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            }catch(error){
                console.log(error)
            }
            setCargando(false)
        }
        obtenerClienteAPI()
    },[])

    return (

        <div>

            <h1 className='font-block text-4xl text-blue-900 '>Ver Cliente: {nombre}</h1>
            <p className='mt-3'>Información cliente</p>


            <p className='text-4xl text-gray-800 mt-10 '> 
                <span className='uppercase font-bold'>Cliente: </span>
                {nombre}
            </p>
            <p className='text-2xl mt-4  text-gray-600 '> 
                <span className='uppercase font-bold'>Email: </span>
                {email}
            </p>
            {telefono && (
                <p className='text-2xl mt-4  text-gray-600 '> 
                    <span className='uppercase font-bold'>Teléfono: </span>
                    {telefono}
                </p>
            )}

            <p className='text-2xl mt-4  text-gray-600 '> 
                <span className='uppercase font-bold'>Empresa: </span>
                {empresa}
            </p>
            { notas && (
                <p className='text-2xl mt-4  text-gray-600 '> 
                    <span className='uppercase font-bold'>Notas: </span>
                    {notas}
                </p>
            )}

        </div>
    )
}

export default VerCliente
