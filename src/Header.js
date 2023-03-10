import React from 'react';
import { BsFillBasketFill } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { FaStore } from 'react-icons/fa';
import "./Header.css";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to="/" style={{textDecoration: "none"}}>
        <div className="header__logo">
          <FaStore className='header__logoImage' fontSize="large"/>
          <h2 className='header__logoTitle'>eShop</h2>
        </div>
      </Link>
        
      <div className="header__search">
        <input type="text" className='header__searchInput'/>
        <BsSearch className='header__searchIcon'/>
      </div>
      <div className="header__nav">
        <div className='nav__item'>
          <span className='nav__itemLineOne'>Hello Guest</span>
          <span className='nav__itemLineTwo'>Sign In</span>
        </div>
        <div className='nav__item'>
          <span className='nav__itemLineOne'>Your</span>
          <span className='nav__itemLineTwo'>Shop</span>
        </div>
        <Link to="/checkout" style={{textDecoration: "none"}}>
          <div className='nav__item'>
            <BsFillBasketFill className='itemBasket' />
            <span className='nav__itemLineTwo nav__basketCount'>0</span>
          </div>
        </Link>        
      </div> 
    </div>
  )
}

export default Header