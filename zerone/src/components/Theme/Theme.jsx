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
           <h1>THE POWER OF <span>ZERO</span>,</h1> 
           <h1>MAGIC OF <span className='green'>ONE....</span></h1>
            <h1></h1>
            <h1></h1>
        </div>
        </div>
    </div>
  )
}

export default Theme