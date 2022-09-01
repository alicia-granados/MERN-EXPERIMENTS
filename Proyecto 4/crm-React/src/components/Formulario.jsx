import React from 'react'
import { Formik, Form, Field} from 'formik'
const Formulario = () => {
  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>

        <Formik>
            <Form className='mt-10'>
                <div className='mb-4 '>
                    <label
                        className='text-gray-800'
                        htmlFor='nombre'
                    >Nombre:</label>
                    <Field
                        id='nombre'
                        placeholder='Nombre del Cliente'
                        type='text'
                        className='mt-2 block w-full bg-gray-50'
                    />
                </div>
                <div className='mb-4 '>
                    <label
                        className='text-gray-800'
                        htmlFor='empresa'
                    >Empresa:</label>
                    <Field
                        id='empresa'
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
                        placeholder='Notas del Cliente'
                        type='text'
                        className='mt-2 block w-full bg-gray-50 h-30'
                    />
                </div>

                <button 
                    className='mt-5 w-full bg-blue-800 p-3 text-white font-bold text-lg'
                >
                    Agregar
                </button>

            </Form>
        </Formik>    
    
    </div>
  )
}

export default Formulario
