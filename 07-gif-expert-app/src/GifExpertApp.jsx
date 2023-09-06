import { useState } from "react";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    //console.log(categories);
  return (
    <>
        { /*titulo*/ }
        <h1>GifExpertApp</h1>

        { /*input*/ }
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
