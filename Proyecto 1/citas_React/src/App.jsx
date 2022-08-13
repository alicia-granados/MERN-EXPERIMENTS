function App() {
  
  const sumar = () => {
    const numero = 5;
    if(numero > 5){
      console.log("si es mayor")
    }else{
      console.log("no es mayir")
    }
    console.log(2 + 2)
  }
  sumar();

  const edad = 18;

  return (
    <>
      { 1 + 1 }
      {edad >= 18 ? 'eres mayor de edad' : 'no eres mayor de edad'}
      
      <div >
        <h1>{"Hola mundo".toUpperCase()}</h1>
        <p> Un parrafo</p>
      </div>

      <div >
        <h1>{edad}</h1>
        <p> Un parrafo</p>
      </div>
    </>
  )
}

export default App
