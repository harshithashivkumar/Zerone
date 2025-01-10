import React from 'react'
import { assets } from '../../assets/assets'
import './Profiles.css'

const Profiles = () => {
  return (
    <div className="profile-container">
        <div className="hod">
            <div className="head-tag">
            <h1>PRESIDENT</h1>
            </div>
            <div className="all-profiles">
            <div className="hod-profile">
                <img src={assets.sit} alt="" />
                <h2>Dr. B G premasudha</h2>
            </div>
            </div>
        </div>
        <div className="faculty">
            <div className='head-tag'>
                <h1>FACULTY CO-ORDINATORS</h1>
            </div>
            <div className="all-profiles">
            <div className="fac-profile">
                <img src={assets.sit} alt="" />
                <h2>Dr. Bhanuprakash C</h2>
            </div>
            <div className="fac-profile">
                <img src={assets.sit} alt="" />
                <h2>Dr. Prashanth G K</h2>
            </div>
            
            </div>
        </div>
        <div className="student">
            <div className="head-tag">
            <h1>STUDENT CO-ORDINATORS</h1>
            </div>
            <div className="all-profiles">
            <div className="student-profile">
                <img src={assets.Harshith} alt="" />
                <h2>Harshith N Bali</h2>
                <h2>Ph: 6363027720</h2>
            </div>
            <div className="student-profile">
                <img src={assets.harshitha} alt="" />
                <h2>Harshitha S</h2>
                <h2>Ph: 6360543950</h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Profiles