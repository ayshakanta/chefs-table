

import PropTypes from 'prop-types';
import time from '../../assets/images/time.png'
import calorie from '../../assets/images/calories.png'
import { ToastContainer } from 'react-toastify';



const Recipe = ({ recipe, handleToWantCook }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe


    return (
        <div className='space-y-5 border-2 p-6 rounded-3xl'>
            <img className='w-80 h-52 rounded-3xl' src={recipe_image} alt="" />
            <h2 className='text-xl font-semibold'>{recipe_name}</h2>
            <p className='text-[#878787]'>{short_description}</p>
            <hr />
            <h3 className='font-medium text-xl pb-3'>Ingredients: {ingredients.length}</h3>
            <ui className='text-[#878787]'>
                {
                    ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                }
            </ui>
            <hr />
            <div className='flex gap-6'>
                <div className='flex gap-2'>
                    <div><img className='w-5' src={time} alt="" /></div>
                    <p className='text-[#878787]'>{preparing_time} minutes</p>
                </div>
                <div className='flex gap-2'>
                   <div> <img className='w-5' src={calorie} alt="" /></div>
                    <p className='text-[#878787]'>{calories} calories</p>
                </div>
            </div>
            <div>
                <button 
                className='bg-[#0BE58A] px-5 py-3 rounded-full font-semibold'
                 onClick={() =>
                   handleToWantCook(recipe)
                }>Want to Cook</button>
                <ToastContainer></ToastContainer>

            </div>


        </div >
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleToWantCook: PropTypes.func.isRequired
}

export default Recipe;
