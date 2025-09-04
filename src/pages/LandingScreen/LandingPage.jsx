import React from 'react'
import './Landing.css'
import { Link, useNavigate } from 'react-router-dom'


export default function LandingPage() {

  let navigate = useNavigate()

  return (
    <div className='Page-Div'>
      {/* Landing Page  */}
      <div className='Main-Div'>
        <div className='Welcome-ContentDiv'>
          <h2 className='welcomeHeading'>
            Welcome to PopX
          </h2>
          <p>
            Lorem ipsum dolor sit amet,
            <br className='hidden' />
            consectetur adipiscing elit,
          </p>
          <button className='CreateAccountBtn' onClick={()=>{navigate('/signup')}}>
            Create Account
          </button>
          <button className='SignUpBtn' onClick={()=>{navigate('/login')}}>
              Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}
