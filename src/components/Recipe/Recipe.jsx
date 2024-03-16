import PropTypes from 'prop-types';
import time from '../../assets/images/time.png'
import calorie from '../../assets/images/calories.png'

const Recipe = ({recipe, handleToWantCook}) => {
    const {recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe
    return (
        <div>
            <img src={recipe_image} alt="" />
            <h2>{recipe_name}</h2>
            <p>{short_description}</p>
            <hr />
            <h3>Ingredients: {ingredients.length}</h3>
            <ui>
                {
                    ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                }
            </ui>
            <hr />
            <div>
                <div>
                    <img src={time} alt="" />
                    <p>{preparing_time} minutes</p>
                </div>
                <div>
                    <img src={calorie} alt="" />
                    <p>{calories} calories</p>
                </div>
            </div>

            <button onClick={() => handleToWantCook(recipe)}>Want to Cook</button>

            
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleToWantCook: PropTypes.func.isRequired
}

export default Recipe;