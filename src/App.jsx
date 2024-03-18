
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cooks from './components/Cooks/Cooks'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'
import { toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
import CurrentlyCooking from './components/CurrentlyCooking/CurrentlyCooking'


function App() {
  const [recipes, setRecipes] = useState([]);

  const [cooks, setCooks] = useState([]);

  const [totalTime, setTotalTime] = useState(0);

  const [totalCalories, setTotalCalories] = useState(0);

  const [currentlyCooking, setCurrentlyCooking] = useState([])

  


  const handleToWantCook = recipe => {
    if(cooks.some(cook => cook.recipe_id === recipe.recipe_id)){

      toast('already added this one')
    }
    else{
      setCooks([...cooks, recipe])
    }
  }

  console.log(currentlyCooking)

  const handlePreparingButton = ({preparing_time, calories, recipe_id}) =>{

    console.log(preparing_time, calories, recipe_id)
    setTotalTime(totalTime + preparing_time)
    setTotalCalories(totalCalories + calories)


    const remainingRecipe = cooks.filter(cook => cook.recipe_id !== recipe_id)
    setCooks(remainingRecipe)

    const preparing = recipes.find(making => making.recipe_id === recipe_id)
    setCurrentlyCooking([...currentlyCooking, preparing])
    
   

  }




  return (
    <>
      <div className='mx-8 md:mx-32'>
        <Navbar></Navbar>
        <Banner></Banner>
        <div>
          <div className='items-center text-center  justify-center space-y-6 mb-8 '>
            <h2 className='font-semibold text-4xl text-[#150B2B]'>Our Recipes</h2>
            <p className='text-[#150B2B99]'>Our recipes offer a delightful journey through diverse culinary experiences, each dish <br /> carefully crafted to tantalize taste buds and ignite culinary passion. From comforting classics to innovative creations, <br /> our collection showcases a symphony of flavors, textures, and aromas.</p>
          </div>
          <div className='md:flex gap-6'>
            <div className='mb-6'>
              <Recipes
              recipes={recipes}
              setRecipes={setRecipes}
              handleToWantCook={handleToWantCook}></Recipes>
            </div>
            <div className=' border-2 p-2 rounded-2xl mb-6 h-2/3'>
              <Cooks handlePreparingButton= {handlePreparingButton}
              totalTime = {totalTime}
              totalCalories = {totalCalories}

               cooks={cooks}></Cooks>
              <CurrentlyCooking
              
              
              handlePreparingButton= {handlePreparingButton}
              totalTime = {totalTime}
              totalCalories = {totalCalories}
              currentlyCooking = {currentlyCooking}
              
              ></CurrentlyCooking>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default App

