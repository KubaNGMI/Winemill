import React from 'react'
import './Header.scss'
import logo from './rus-logo.svg'
import search from './search.svg'


function Header() {
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
            <a href="#">Регистрация</a>
            <a href="#">Вход</a>
          </div>
          <div className="user-bot">
            <a href="#">Личный кабинет</a>
          </div>
        </div>
        <div className="user-box">
          <div className="user-top">
            <a href="#">Москва</a>
          </div>
          <div className="user-bot">
            <a href="#">063 658 32 21</a>
          </div>
        </div>
        <div className="user-box">
          <div className="user-top">
            <a href="#">Корзина:0</a>
          </div>
          <div className="user-bot">
            <a href="#">0 р</a>
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
