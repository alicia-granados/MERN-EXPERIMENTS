import PropTypes from 'prop-types'

const newMessage= 'Fernando';
const newMessage2 ={
    message : 'hola mundo',
    title : 'Fernando'
}
const saludo = () =>{
    return 'Hola como estas'
}
const FirstApp = ( {title = 'Hola soy fernando'} , subtitle, tema) => {
    //console.log(props)
    return (
        <>
        <h1>{tema}</h1>
        <h3>{/*props.title*/ title}</h3>
        <h2> { 1 + 1 } </h2>
        <p>{newMessage} </p>
        <code>{ JSON.stringify(newMessage2)} </code>
        <p>Soy un subtitulo</p>
        <h1>{saludo()}</h1>
        </>
    )
}

export default FirstApp

FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}
FirstApp.defaultProps = {
    title:'no hay titulo',
    tema: 'no hay tema'
}