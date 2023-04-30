import React from 'react'
import HotItemCard from '../Components/HotItemCard'
import '../Styles/HotAccessories.css'

const HotAccessories = (props) => {

  return (

    <div className='HotAccessories'>
      <div>
        <img src={props.musicCover || props.smartDeviceCover || props.homeCover || props.lifeStyleCover || props.mobileAccessoriesCover} alt="Cover" />
      </div>

      {/* .........2nd */}

      <div>
        {
          props.music && props.music.map((item, index) => {
            return <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          })
        }
        {
          props.smartDevice && props.smartDevice.map((item, index) => {
            return <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          })
        }
        {
          props.home && props.home.map((item, index) => {
            return <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          })
        }
        {
          props.lifeStyle && props.lifeStyle.map((item, index) => {
            return <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          })
        }
        {
          props.mobileAccessories && props.mobileAccessories.map((item, index) => {
            return <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          })
        }

        <HotItemCard image='https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg'/>
      </div>

    </div>
  )
}

export default HotAccessories