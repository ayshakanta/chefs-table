

import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cooks from './components/Cooks/Cooks'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'

function App() {

  const [cooks, setCooks] = useState([]);
  const handleToWantCook = recipe =>{
    const newCooks = [...cooks, recipe];
    setCooks(newCooks);
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
              <Recipes handleToWantCook= {handleToWantCook}></Recipes>
            </div>
            <div className='md:w-1/3'>
              <Cooks cooks = {cooks}></Cooks>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
