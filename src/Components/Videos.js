import React from 'react'
import VideoCard from './VideoCard'
import '../Styles/Videos.css'
const Videos = (props) => {
  return (
    <div className='Videos'>
      {props.Videos.map((item, index)=>{
       return <VideoCard index={index} key={item.image} image={item.image} name={item.name}  />
      })}
    </div>
  )
}

export default Videos