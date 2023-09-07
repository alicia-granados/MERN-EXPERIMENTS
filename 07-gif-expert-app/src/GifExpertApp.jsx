import { useState } from "react";
import {AddCategory, GifGrid} from "./components";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Ateez']);
    //console.log(categories);

    const onAddCategory = (newCategory) => {
        //categories.push('valorant')//muta arreglo
        
        // Solucion - AGREGAR
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
        //setCategories( cat => [...cat, 'valorant'])
    }
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory = {value => onAddCategory(value)}
        />

        {
            categories.map(category => (
                <GifGrid key={category} category={category}/>     
            ))
        }


        { /*listado de gif - git item*/ }
    </>
  )
}

export default GifExpertApp
