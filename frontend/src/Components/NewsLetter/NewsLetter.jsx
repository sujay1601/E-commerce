import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>subscribe to our newsletter to stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id'/>
        <button>subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
