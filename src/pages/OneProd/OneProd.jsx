import React from 'react'
import Wine from './wineformain.png'
import Flag from './france-flag.png'
import '../OneProd/OneProd.scss'

function OneProd() {
  return (
    
  <div className="product-swiper">
    <div className="product-card">
        <div className="image-main-container">
        <img src={Wine} alt="" />

        <div className="background-prod"></div>
        </div>
        <div className="product-text">
            <h5>L’ERMITE
            HERMITAGE</h5>
            <span>2009/0.75 л</span>
            <p>
              <img src={Flag} alt="" />
              франция/M.CHAPOUTIER</p>
            <div className="pric">
                <div className="price-text">
                <p>ЦЕНА ЗА 1 ШТ</p>
                <span className='price-per'>90 000 р</span>
            </div>
            <button className='incart'>В КОРЗИНУ</button>
            </div>
        </div>
    </div>

  </div>
    
    
  )
}

export default OneProd
