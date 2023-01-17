import './App.css';
import { BsFillBasketFill } from 'react-icons/bs';


function App() {
  return (
    <div className="App">
      <div className="header__logo"></div>
      <div className="header_search"></div>
      <div className="header_nav">
        <div className='nav_item'>
          <span className='nav__itemLineOne'>Hello Guest</span>
          <span className='nav__itemLineTwo'>Sign In</span>
        </div>
        <div className='nav_item'>
          <span className='nav__itemLineOne'>Your</span>
          <span className='nav__itemLineTwo'>Shop</span>
        </div>
        <div className='nav_item'>
          <BsFillBasketFill fontSize="large"/>
          <span className='nav__itemLineTwo'>0</span>
        </div>
      </div>        
    </div>   
  );
}

export default App;