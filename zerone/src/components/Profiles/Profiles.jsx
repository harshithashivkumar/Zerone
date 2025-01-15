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
                <h2>Dr. B G Premasudha</h2>
            </div>
            </div>
        </div>
        <div className="faculty">
            <div className='head-tag'>
                <h1>FACULTY CO-ORDINATORS</h1>
            </div>
            <div className="all-profiles">
            <div className="student-profile">
                
                <h2>Dr. Bhanuprakash C</h2>
                <h2>Dr. Prashanth G K</h2>
            </div>
            <div className="student-profile">
                
                
            </div>
            
            </div>
        </div>
        <div className="student">
            <div className="head-tag">
            <h1>STUDENT CO-ORDINATORS</h1>
            </div>
            <div className="all-profiles">
            <div className="student-profile">
                
                <h2>Harshith N Bali</h2>
                <h2>Ph: 6363027720</h2>
            </div>
            <div className="student-profile">
                
                <h2>Harshitha S</h2>
                <h2>Ph: 6360543950</h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Profiles