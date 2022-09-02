import React from 'react'
import { Formik, Form, Field} from 'formik'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'
import Spinner from './Spinner'

const Formulario = ({cliente,cargando}) => {
    const navigate = useNavigate()
    const nuevoClienteSchema = Yup.object().shape({
        nombre: 
            Yup.string().min(3, 'El nombre es muy corto')
            .max(20,'El nombre es muy largo')
            .required('El nombre del cliente es obligatorio'),
        empresa: Yup.string().required('El nombre de la empresa es obligatorio'),
        email: 
            Yup.string().email('Email no válido').required('El email es obligatorio'),
        telefono: 
            Yup.number()
            .integer('Número no válido')
            .positive('Número no válido')
            .typeError('El número no es válido'),
    })
    console.log(cliente)
    const handleSubmit = async (valores) => {
        try{
            const url = 'http://localhost:4000/clientes'
            const respuesta = await fetch(url,{
                method:'POST',
                body: JSON.stringify(valores),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const resultado = await respuesta.json()
            navigate('/clientes')
        }catch(error){
            console.log(error)
        }
    }

    return (
        cargando ? <Spinner/> : ( 
            <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
                <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>{cliente?.nombre ? 'Editar Cliente' : 'Agregar Cliente'}</h1>

                <Formik
                    initialValues={{
                        nombre: cliente?.nombre ?? '',
                        empresa: cliente?.empresa ?? '',
                        email: cliente?.email ?? '',
                        telefono: cliente?.telefono ?? '',
                        notas: cliente?.notas ?? ''
                    }}
                    enableReinitialize={true}
                    onSubmit= { async (values,{resetForm}) =>{
                        await handleSubmit(values)
                        resetForm()
                    }}
                    validationSchema={nuevoClienteSchema}
                >
                    { ({errors,touched}) => {
                        return (
                            <Form className='mt-10'>
                                <div className='mb-4 '>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='nombre'
                                    >Nombre:</label>
                                    <Field
                                        id='nombre'
                                        name='nombre'
                                        placeholder='Nombre del Cliente'
                                        type='text'
                                        className='mt-2 block w-full bg-gray-50'
                                    />
                                    {errors.nombre && touched.nombre ? ( 
                                        <Alerta>
                                            {errors.nombre}
                                        </Alerta>
                                    ):null}
                                </div>
                                <div className='mb-4 '>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='empresa'
                                    >Empresa:</label>
                                    <Field
                                        id='empresa'
                                        name='empresa'
                                        placeholder='Empresa del Cliente'
                                        type='text'
                                        className='mt-2 block w-full bg-gray-50'
                                    />
                                    {errors.empresa && touched.empresa ? ( 
                                        <Alerta>
                                            {errors.empresa}
                                        </Alerta>
                                    ):null}
                                </div>
                                <div className='mb-4 '>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='email'
                                    >Email:</label>
                                    <Field
                                        id='email'
                                        name='email'
                                        placeholder='Email del Cliente'
                                        type='email'
                                        className='mt-2 block w-full bg-gray-50'
                                    />
                                    {errors.email && touched.email ? ( 
                                        <Alerta>
                                            {errors.email}
                                        </Alerta>
                                    ):null}
                                </div>
                                <div className='mb-4 '>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='telefono'
                                    >Telefono:</label>
                                    <Field
                                        id='telefono'
                                        name='telefono'
                                        placeholder='Telefono del Cliente'
                                        type='tel'
                                        className='mt-2 block w-full bg-gray-50'
                                    />
                                    {errors.telefono && touched.telefono ? ( 
                                        <Alerta>
                                            {errors.telefono}
                                        </Alerta>
                                    ):null}
                                </div>
                                <div className='mb-4 '>
                                    <label
                                        className='text-gray-800'
                                        htmlFor='notas'
                                    >Notas:</label>
                                    <Field
                                        as='textarea'
                                        id='notas'
                                        name='notas'
                                        placeholder='Notas del Cliente'
                                        type='text'
                                        className='mt-2 block w-full bg-gray-50 h-30'
                                    />
                                </div>

                                <input 
                                    type='submit'  value={cliente?.id ? 'Editar Cliente' : 'Agregar Cliente'}
                                    className='mt-5 w-full bg-blue-800 p-3 text-white font-bold text-lg'
                                />
                            </Form>
                    )}}
                </Formik>    
            </div>
        )
    )
}
Formulario.defaultProps= {
    cliente: {},
    cargando: false
}

export default Formulario
