
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


  const handlePreparingButton = (time, calories) =>{
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)
  }




  return (
    <>
      <div className='mx-8 md:mx-32'>
        <Navbar></Navbar>
        <Banner></Banner>
        <div>
          <div>
            <h2>Our Recipes</h2>
            <p>Our recipes offer a delightful journey through diverse culinary experiences, each dish carefully crafted to tantalize taste buds and ignite culinary passion. From comforting classics to innovative creations, our collection showcases a symphony of flavors, textures, and aromas.</p>
          </div>
          <div className='md:flex'>
            <div className='md:w-2/3'>
              <Recipes handleToWantCook={handleToWantCook}></Recipes>
            </div>
            <div className='md:w-1/3'>
              <Cooks handlePreparingButton= {handlePreparingButton}
              totalTime = {totalTime}
              totalCalories = {totalCalories}

               cooks={cooks}></Cooks>
              <CurrentlyCooking
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

