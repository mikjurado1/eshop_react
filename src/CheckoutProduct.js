import React from 'react'
import './checkoutProduct.css'
import { AiFillStar } from 'react-icons/ai';


function CheckoutProduct() {
  return (
    <div className='checkoutProduct'>
        <img src='' alt='' className='checkoutProduct__image'/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>
              
            </p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>5.2</strong>
            </p>
            <div className='checkoutProduct__rating'>
                <AiFillStar/>
            </div>
            <button>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct