import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../Styles/ProductReviews.css'
const ProductReviews = (props) => {
  return (
     <div className='ProductReviews'>
      {props.ProductReviews.map((item, index)=>{
     return <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image}   />
      })}
     </div>
  )
}

export default ProductReviews