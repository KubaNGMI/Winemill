import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../Header/rus-logo.svg'
import search from '../Header/search.svg'
import '../Header/Header.scss'


const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const { totalAmount = 0 } = useSelector((state) => state.cart || {});
  
  const formattedTotalAmount = totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  
  return (
    
    
   

      <header>
         <title>Winemill</title>
      <div className="container">
        <div className="preheader">
          <p>ДОСТУПНА СРОЧНАЯ ДОСТАВКА ПО МОСКВЕ - <span>ДЕТАЛЬНЫЕ УСЛОВИЯ</span></p>
        </div>
        <div className="logo"><img src={logo} alt="" />
        <form>
  <div>
    <input
      type="search"
      id="mySearch" />
    <button className='seacrh-btn'><img src={search}/></button>
  </div>
</form>
      <div className="info-area">
        <div className="user-box">
          <div className="user-top">
            <Link to = '../register'>Регистрация</Link>
            <a href="#">Вход</a>
          </div>
          <div className="user-bot">
            <a href="#">Личный кабинет</a>
          </div>
        </div>
        <svg width="1" height="12" viewBox="0 0 1 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.25" y1="-1.09278e-08" x2="0.250001" y2="12" stroke="#414040" stroke-width="0.5"/>
</svg>

        <div className="user-box">
          <div className="user-top">
            <a href="#"><svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.65" d="M3.10775 6.52545C2.21934 6.43154 1.40302 6.02345 0.82618 5.38484C0.249337 4.74624 -0.0443179 3.92552 0.00542778 3.09098C0.0551734 2.25643 0.444551 1.47129 1.09372 0.896562C1.74289 0.321829 2.60265 0.00105067 3.49672 8.69219e-07C4.39189 -0.000608683 5.2533 0.319396 5.90388 0.894233C6.55446 1.46907 6.94477 2.25506 6.99457 3.09063C7.04438 3.92621 6.7499 4.74787 6.17167 5.38673C5.59344 6.02558 4.77539 6.43308 3.88569 6.52545V8H3.10775V6.52545ZM3.49672 5.81818C3.85428 5.81818 4.20834 5.75234 4.53869 5.62442C4.86903 5.4965 5.16919 5.309 5.42202 5.07264C5.67486 4.83627 5.87542 4.55566 6.01225 4.24683C6.14908 3.938 6.21951 3.607 6.21951 3.27273C6.21951 2.93845 6.14908 2.60745 6.01225 2.29862C5.87542 1.9898 5.67486 1.70919 5.42202 1.47282C5.16919 1.23645 4.86903 1.04896 4.53869 0.921035C4.20834 0.793114 3.85428 0.727274 3.49672 0.727274C2.77459 0.727274 2.08204 0.995455 1.57142 1.47282C1.0608 1.95019 0.773935 2.59763 0.773935 3.27273C0.773935 3.94782 1.0608 4.59527 1.57142 5.07264C2.08204 5.55 2.77459 5.81818 3.49672 5.81818Z" fill="white"/>
</svg>  
                 Москва</a>
                 
          </div>
          <div className="user-bot">
            <a href="#">063 658 32 21</a>
          </div>
        </div>
        <svg width="1" height="12" viewBox="0 0 1 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.25" y1="-1.09278e-08" x2="0.250001" y2="12" stroke="#414040" stroke-width="0.5"/>
</svg>

        <div className="user-box">
        <div className="user-top">
          <Link to="/cart">Корзина:{totalQuantity}</Link>
        </div>
        <div className="user-bot">
          <Link to="/cart">{formattedTotalAmount} р</Link>
        </div>
      </div>
      </div>
        </div>
        <div className="menu-list">
          <ul>
            <li><a href="#">Вино</a></li>
            <li><a href="#">Игристое</a></li>
            <li><a href="#">Виски</a></li>
            <li><a href="#">Коньяк</a></li>
            <li><a href="#">Арманьяк</a></li>
            <li><a href="#">Ром</a></li>
            <li><a href="#">Водка</a></li>
            <li><a href="#">Ликер</a></li>
            <li><a href="#">Коктейли</a></li>
            <li><a href="#">Деликатесы</a></li>
          </ul>
        </div>
        </div>
      </header>

  )
}

export default Header
