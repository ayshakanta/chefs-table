import { useEffect } from "react";

import Recipe from "../Recipe/Recipe";

import PropTypes from 'prop-types';


const Recipes = ({handleToWantCook, recipes, setRecipes}) => {

    

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))

    }, [setRecipes])
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                recipes.map(recipe =>
                    <Recipe key={recipe.recipe_id}
                        recipe={recipe}
                        handleToWantCook={handleToWantCook}
                        ></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes ={
    handleToWantCook: PropTypes.func.isRequired,
    recipes: PropTypes.any,
    setRecipes: PropTypes.func
}

export default Recipes;