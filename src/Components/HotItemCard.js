import React from 'react'
import '../Styles/HotItemCard.css'

const HotItemCard = ({image, name, price, index}) => {
  return (
    <div className='HotItemCard'>
      <img src={image} alt={index} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default HotItemCard