import React from 'react'
import Offer from './Offer'
import "../Styles/offers.css"
const Offers = ({offer}) => {
  return (
    <div className='offersSection'>
      {
        offer.map((item, index)=>{
         return <Offer key={item.image} index={index} src={item.image} link={item.url} />
      })
      }
    </div>
  )
}

export default Offers