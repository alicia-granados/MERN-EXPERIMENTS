import { useState } from "react";

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange  = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        //console.log(event)
        event.preventDefault();
        //console.log(inputValue)

        if(inputValue.trim().length <=1 ) return;

        setCategories(categories => [inputValue , ...categories]);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={ onInputChange}
            />
        </form>
    )
}

export default AddCategory
