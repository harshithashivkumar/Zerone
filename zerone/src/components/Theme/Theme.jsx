import React from 'react'
import { assets } from '../../assets/assets'
import './Theme.css'

const Theme = () => {
  return (
    <div className="theme-container">
        <img src={assets.theme} alt="" />
        <div className="overall">
        <h1>THEME</h1>
        <div className="slogan">
            
            {/* <h3>Turn Your Potenital into posibility</h3> */}
           <h2>CELEBRATING THE  <span>Binary</span> <span className='green'>Brilliance..</span></h2> 
          
        </div>
        </div>
    </div>
  )
}

export default Theme