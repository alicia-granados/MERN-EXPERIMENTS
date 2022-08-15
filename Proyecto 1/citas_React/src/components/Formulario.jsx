const Formulario = () => {
  return (
    <div className = "md:w-1/2 lg:w-2/5 px-12">

        <h2 className = "font-black text-3xl text-center">Seguimiento Pacientes</h2>
        
        <p className = "text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className = "text-indigo-600 font-bold">Administralos</span>
        </p>

        <form className = " bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          <div>
            <label hmtlFor = "mascota" className = "block text-gray-700 uppercase font-bold">
              Nombre Mascota
            </label>
            
            <input
              id = "mascota"
              type = " text" 
              placeholder = "Nombre de la mascota"
              className ="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            />
          </div>

          <div className = "mb-5">
            <label hmtlFor="propietario" className = "block text-gray-700 uppercase font-bold">
              Nombre Propietario
            </label>
            
            <input
              id = "propietario"
              type = " text" 
              placeholder = "Nombre del propietario"
              className = "border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            />
          </div>

          <div className = "mb-5">
            <label hmtlFor = "email" className = "block text-gray-700 uppercase font-bold">
              Email
            </label>
            
            <input
              id = "email"
              type = " email" 
              placeholder = "Email Contacto Propietario"
              className = "border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            />
          </div>

          <div className = "mb-5">
            <label hmtlFor = "alta" className = "block text-gray-700 uppercase font-bold">
              ALta
            </label>
            
            <input
              id = "alta"
              type = " date" 
              className = "border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            />
          </div>

          <div className = "mb-5">
            <label hmtlFor = "sintomas" className = "block text-gray-700 uppercase font-bold">
              Sintomas
            </label>
            <textarea 
              id = "sintomas"
              className = "border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
              placeholder = "Describe los sintomas"
            />
          </div>

          <input 
            type= "submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 
            cursor-pointer transition-all"
            value="Agregar Paciente"
          />
        </form>
    </div>
  )
}

export default Formulario