import React from 'react'
import Product from './Product'
import './Home.css'


function Home() {
  return (
    <div>
        <div className='home'>
            <div className='home__container'>
                <img src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg' alt='' className='home__image'/>
                <div className='home__row'>
                    <Product
                        id="123"
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor erat nec felis facilisis, in.'
                        price={8.96}
                        rating={3}
                        image="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80"
                    />
                    <Product
                        id="456"
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor erat nec felis facilisis, in.'
                        price={18.62}
                        rating={2}
                        image="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=457&q=80"
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id="789"
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor erat nec felis facilisis, in.'
                        price={14.25}
                        rating={1}
                        image="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=498&q=80"
                    />
                    <Product
                        id="012"
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor erat nec felis facilisis, in.'
                        price={19.90}
                        rating={4}
                        image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                    />
                    <Product
                        id="345"
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor erat nec felis facilisis, in.'
                        price={25.65}
                        rating={2}
                        image="https://images.unsplash.com/photo-1614179689702-355944cd0918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id="678"
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor erat nec felis facilisis, in.'
                        price={16.65}
                        rating={5}
                        image="https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home