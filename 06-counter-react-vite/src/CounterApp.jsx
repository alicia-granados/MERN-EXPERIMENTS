import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    const  handleAdd  = (event) =>  { 
        console.log('+1');
        value+=1
    }
  return (
    <>
      <h1>Counter App</h1>
      <h2> {value} </h2>

        <button onClick={  handleAdd }>
            +1
        </button>
    </>
  )
}

export default CounterApp

CounterApp.propTypes ={
    value: PropTypes.number.isRequired,
}
