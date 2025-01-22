import React from 'react'
import './Profiles.css'

const Profiles = () => {
  return (
    <div className="profile-container zindex-5">
        <div className="hod">
            <div className="head-tadg">
                
            </div>
            <div className="all-container">
                <div className="all-profiles">
                    <div className="hod-profile">
                        <h1>PATRON</h1>
                        <h2>Dr. Shivakumaraiah</h2>
                        <h2>Joint Secretary & CEO</h2>
                    </div>
                    <div className="hod-profile">
                        <h1>PRINCIPAL</h1>
                        <h2>Dr. S V Dinesh</h2>
                        <h2>Principal, SIT, Tumkur</h2>
                    </div>
                    <div className="hod-profile">
                        <h1>PRESIDENT</h1>
                        <h2>Dr. B G Premasudha</h2>
                        <h2>Head of MCA</h2>
                    </div>
                    
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