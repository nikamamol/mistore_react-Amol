import React from 'react'
import {Carousel} from 'react-bootstrap'

const Slider = ({start}) => {
  return (
    <Carousel>
     {
     start.map((item)=>{
      return  <Carousel.Item>
      <img className='d-block w-100' src={item} alt="Frist slide"/>
    </Carousel.Item>
    })
     }
    </Carousel>
  )
}

export default Slider