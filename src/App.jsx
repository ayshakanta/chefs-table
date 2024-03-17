
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

  const [cooks, setCooks] = useState([]);

  const [totalTime, setTotalTime] = useState(0);

  const [totalCalories, setTotalCalories] = useState(0);

  


  const handleToWantCook = recipe => {
    if(cooks.some(cook => cook.recipe_id === recipe.recipe_id)){

      toast('already added this one')
    }
    else{
      setCooks([...cooks, recipe])
    }
  }


  const handlePreparingButton = (time, calories, id) =>{
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)


    const remainingRecipe = cooks.filter(cook => cook.recipe_id !== id)
    setCooks(remainingRecipe)

    const remainPreparing = cooks.filter(cook => cook.recipe_id === id)
    console.log(remainPreparing)

    

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
            <div className='w-2/3'>
              <Recipes handleToWantCook={handleToWantCook}></Recipes>
            </div>
            <div className='md:w-1/3 border-2 p-2 rounded-2xl'>
              <Cooks handlePreparingButton= {handlePreparingButton}
              totalTime = {totalTime}
              totalCalories = {totalCalories}

               cooks={cooks}></Cooks>
              <CurrentlyCooking
              // cooking = {cooking}
              handlePreparingButton= {handlePreparingButton}
              totalTime = {totalTime}
              totalCalories = {totalCalories}
              ></CurrentlyCooking>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default App

