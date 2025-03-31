import React from 'react'
import './Footer.scss'
import Instagramm from '../Footer/Vector-1.svg'
import Facebook from '../Footer/Vector-2.svg'
import Telegramm from '../Footer/Vector.svg'
import Subimage from '../Footer/sub-image-true.png'


function Footer() {
  return (
    <footer>
    <div className="container">
        <div className="footer-all">
      <div className="sub">
          <h1>ПОДПИСАТЬСЯ НА EMAIL РАССЫЛКУ</h1>
          <form >
            <label>
              <div className="sub-mail">
                <p>EMAIL</p>
              <input type="email"/>
              
              </div>
              <button>ОТПРАВИТЬ</button>
            </label>
          </form>
          <div className="sub-socials">
              <a href=""><img src={Facebook} alt="" /></a>
              <a href=""><img src={Instagramm} alt="" /></a>
              <a href=""><img src={Telegramm} alt="" /></a>
          </div>
        </div>
      <div className="sub-image">
        <img src={Subimage} className='image-slice' />
      </div>


    </div>
    <div className="footer-bottom">
          <div className="shop-firts1">
          <h6>Shop</h6>
        <ul>
          <li>History</li>
          <li>Michel</li>
          <li>Values</li>
          <li>Biodynamics</li>  
        </ul>      
          </div>
          <div className="shop-firts">
          <h6>Shop</h6>
        <ul>
          <li>All Wines</li>
          <li>Single vineyard selection</li>
        </ul>      
          </div>
          <div className="shop-firts">
          <h6>The Wines</h6>
        <ul>
          <li>Hermitage in 3D</li>
          <li>The soul of M. CHAPOUTIER</li>

        </ul>      
          </div>
          <div className="shop-firts">
          <h6>Wine Tourism</h6>
        <ul>
          <li>Wine tasting services and visits</li>
          <li>Bike ride</li>

        </ul>      
          </div>
          

    </div>
    <div className="footer-li">
      <span>2021 winemill</span>
      <span>Privacy police</span>
    </div>
    </div>
    </footer>
  )
}

export default Footer