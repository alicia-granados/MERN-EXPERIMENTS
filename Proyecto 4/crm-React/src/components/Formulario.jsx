import React from 'react'
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import Alerta from './Alerta'

const Formulario = () => {

    const nuevoClienteSchema = Yup.object().shape({
        nombre: 
            Yup.string().min(3, 'El nombre es muy corto')
            .max(20,'El nombre es muy largo')
            .required('El nombre del cliente es obligatorio'),
        empresa: Yup.string().required('La empresa  del cliente es obligatorio'),
        email: '',
        telefono:'',
        notas:''
    })

    const handleSubmit = (valores) => {
        console.log(valores)
    }

    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>

            <Formik
                initialValues={{
                    nombre:'',
                    empresa:'',
                    email: '',
                    telefono:'',
                    notas:''
                }}
                onSubmit= { (values) =>{
                    handleSubmit(values)
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
                                type='submit'  value='Agregar Cliente'
                                className='mt-5 w-full bg-blue-800 p-3 text-white font-bold text-lg'
                            />
                        </Form>
                )}}
            </Formik>    
        </div>
    )
}

export default Formulario
