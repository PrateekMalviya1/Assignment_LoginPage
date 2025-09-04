import React, { useState } from 'react'
import './Profile.css'
import profileImg from '../../assets/ProfileIcon.png'
import cameraIcon from '../../assets/cameraIcon.png'

export default function Profile() {

  return (
    <div className='Page-Div'>
      <div className='Main-Div relative'>
        <div className='ProfileHeader'>
          Account Settings
        </div>
        <div className='ProfileSection'>
          <div>
            <div className="profileImg">
              <img src={profileImg} alt="../" className='' />
              <div className="icon">
                <img src={cameraIcon} alt="../" />
              </div>
              <input type="file" onChange={(e) => { console.log(e.target.files[0]) }} accept='image/*' />
            </div>
            <div>
              <div className='Name'> Marry Doe </div>
              <div className='GMail'> Marry@Gmail.Com </div>
            </div>
          </div>
          <div>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        </div>
        <div className='lastLine'> </div>
      </div>
    </div>
  )
}
