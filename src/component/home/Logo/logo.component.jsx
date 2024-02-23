import React from 'react'
import LogoS from '../../../assets/images/photo_2024-01-17_18-33-01-removebg-preview.png'
import './logo.style.scss'

const Logo = () => {
  return (
    <section className="logo-container">
      <img className='pro-pic' src={LogoS} alt="Profile Picture" />
    </section>
  )
}

export default Logo
