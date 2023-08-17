import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({value}) => {

    const [counter,setCounter] = useState(value)
    const  handleAdd  = (event) =>  { 
        //console.log(event);
        setCounter(counter+1);
        //setCounter( (c) =>  c+ 1)
    }
  return (
    <>
      <h1>Counter App</h1>
      <h2> {counter} </h2>

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
