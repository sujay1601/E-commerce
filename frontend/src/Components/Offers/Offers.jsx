import React from 'react'
import './Offers.css'
import esclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>OFFERS FOR YOU</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>CHECK NOW</button>
      </div>
      <div className="offers right">
        <img src={esclusive_image} alt="" />

      </div>
    </div>
  )
}

export default Offers
