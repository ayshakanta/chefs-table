import { useEffect } from "react";
import { useState } from "react";


const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))

    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Recipes;