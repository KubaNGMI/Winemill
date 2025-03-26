import React from 'react'
import './Footer.scss'
import Instagramm from '../Footer/Vector-1.svg'
import Facebook from '../Footer/Vector-2.svg'
import Telegramm from '../Footer/Vector.svg'
import Subimage from '../Footer/sub-image-true.png'


function Footer() {
  return (
    <div className="container">
    <footer>
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
    </footer>
    </div>
  )
}

export default Footer