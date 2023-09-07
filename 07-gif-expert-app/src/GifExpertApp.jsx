import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
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
        { /*titulo*/ }
        <h1>GifExpertApp</h1>

        { /*input*/ }
        <AddCategory 
            //setCategories={setCategories}
            onNewCategory = {value => onAddCategory(value)}
        />

        <ol>
            {categories.map(category =>{
                return <li key={category} > {category}</li>
            })}
            
        </ol>  

        { /*listado de gif - git item*/ }
    </>
  )
}

export default GifExpertApp
