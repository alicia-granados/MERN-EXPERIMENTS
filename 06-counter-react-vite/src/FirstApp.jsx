const newMessage= 'Fernando';
const newMessage2 ={
    message : 'hola mundo',
    title : 'Fernando'
}
const saludo = () =>{
    return 'Hola como estas'
}
const FirstApp = () => {
    return (
        <>
        <h2> { 1 + 1 } </h2>
        <p>{newMessage} </p>
        <code>{ JSON.stringify(newMessage2)} </code>
        <p>Soy un subtitulo</p>
        <h1>{saludo()}</h1>
        </>
    )
}

export default FirstApp
