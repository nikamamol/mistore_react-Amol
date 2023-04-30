import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
      <Link className='HotAccessoriesMenuLink' to='/music'>Music</Link>
      <Link className='HotAccessoriesMenuLink' to='/smartDevice'>Smart Devices</Link>
      <Link className='HotAccessoriesMenuLink' to='/home'>Home</Link>
      <Link className='HotAccessoriesMenuLink' to='/lifestyle'>LifeStyle</Link>
      <Link className='HotAccessoriesMenuLink' to='/mobileAccessories'>Mobile Accessories</Link>

    </div>
  )
}

export default HotAccessoriesMenu