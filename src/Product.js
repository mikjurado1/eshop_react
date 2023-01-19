import React from 'react'
import './Product.css'
import { AiFillStar } from 'react-icons/ai';


function Product({id, title, price, rating, image}) {
  return (   
    <div>
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) =>(
                        <p><AiFillStar/></p>
                    ))}
                </div>
            </div>

            <img src={image} alt=''/>
            <button>Add to basket</button>
        </div>
    </div>
    
  )
}

export default Product