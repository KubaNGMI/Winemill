import React from 'react'
import './Home.scss'
import swiperimage1 from './images/swiper-image1.png'
import Radio from '../Radio/Radio'
import OneProd from '../OneProd/OneProd'
import Choice from '../Choice/Choice'
function Home() {
  return (
    <>
      <main>
        <div className="container">
        <section className='swiper-top'>
          <div className="swiper_content">
            <div className="image-container">
              <img src={swiperimage1} alt="" />
            </div>
            <div className="spacial-offer">
              <div className="text-box-offer">
              <h4>Special offer</h4>
              <h2>pichon longueville 
              comtesse de lalande </h2>
              <a href>ЗАКАЗАТЬ ВИНО</a>
                <h1>ОСТАВИТЬ ЗАЯВКУ</h1>
                <button>ОТПРАВИТЬ</button>
              </div>
            </div>
          </div>
        </section>
        <section className='swiper-bot'>
          <div className="wine-cont1">
              <p>НА ТЕРРИТОРИИ БОРДО</p>
              <span>БРЕНДИРОВАНИЕ ВИН</span>
          </div>
          <div className="wine-cont2">
          <p>ЧТО ДЕЛАЕТ НАС ОСОБЕННЫМИ?</p>
          <span>БЕСЕДА С СОМЕЛЬЕ</span>
          </div>
          <div className="wine-cont3">
            <p>БЕСЕДА С СОМЕЛЬЕ</p>
            <span>БЕСЕДА С СОМЕЛЬЕ</span>
          </div>
        </section>
        <section className='main-cotolog'>
          <div className="sort-filter-box">
              <div className="color-box">
                <div className="form-label">
                  <h3>Цвет</h3>
                  <button>-</button>
                </div>
                <form className='filter-for-wine'>
                <div className='in-filter-row'>
                <div className="in-filter">
                      <input type='checkbox' id='white' name='color' />
                      <label htmlFor="White">Белое</label>
                </div>
                      <span>9</span>
                  </div>
                  <div className='in-filter-row'>
                  <div className="in-filter">
                      <input type='checkbox' id='red' name='color' />
                      <label htmlFor="Red">Красное</label>
                  </div>    
                      <span>21</span>
                  </div>
                  <div className='in-filter-row'>
                  <div className="in-filter">
                      <input type='checkbox' id='rose' name='color' />
                      <label htmlFor="Rose">Розовое</label>
                  </div>
                      <span>12</span>
                  </div>
                    <div className='in-filter-row'>
                    <div className="in-filter">
                      <input type='checkbox' id='other' name='color' />
                      <label htmlFor="Other">Прочее</label>
                    </div>
                      <span>9</span>
                  </div>
                </form>
              </div>
              <div className="sweet-box">
              <div className="color-box">
                <div className="form-label">
                  <h3>Сладость</h3>
                  <button>-</button>
                </div>
                <form className='filter-for-wine'>
                  <div className='in-filter-row'>
                    <div className="in-filter">
                      <input type='checkbox' id='brute' name='sweetness' />
                      <label htmlFor="Brute">Брют</label>
                      </div>
                      <span>9</span>
                  </div>
                  <div className='in-filter-row'>
                  <div className="in-filter">
                      <input type='checkbox' id='desert' name='sweetness' />
                      <label htmlFor="Desert">Десертное</label>                  
                  </div>
                  <span>21</span>
                  </div>
                  <div className='in-filter-row'>
                    <div className="in-filter">
                      <input type='checkbox' id='fortified' name='sweetness' />
                      <label htmlFor="Fortified">Крепленное</label>                      
                    </div>
                    <span>13</span>
                  </div>
                  <div className='in-filter-row'>
                  <div className="in-filter">
                      <input type='checkbox' id='nondosage' name='sweetness' />
                      <label htmlFor="Nondosage">Нон-Дозаж</label>                    
                      </div>
                      <span>9</span>
                  </div>
                  <div className='in-filter-row'>
                  <div className="in-filter">
                      <input type='checkbox' id='semisweet' name='sweetness' />
                      <label htmlFor="Semisweet">Полусладкое</label>
                      </div>
                      <span>9</span>
                  </div>
                  <div className='in-filter-row'>
                  <div className="in-filter">
                      <input type='checkbox' id='semidry' name='sweetness' />
                      <label htmlFor="Semidry">Полусухок</label>                    
                      </div>
                      <span>21</span>
                  </div>
                  <div className='in-filter-row'>
                  <div className="in-filter">
                      <input type='checkbox' id='Dry' name='sweetness' />
                      <label htmlFor="dry">Нон-Дозаж</label>    
                      </div>
                      <span>13</span>
                  </div>
                </form>
              </div>
              </div>
              <div className="price-main">
              <div className="color-box">
                <div className="form-label">
                  <h3>Цена</h3>
                  <button>-</button>
                </div>
                <form className='filter-for-wine'>
                <div className='in-filter-row'>
                <div className="in-filter">
                      <input  className = 'price-range-input1'type='number' name='min' placeholder='от'/>
                      <input className='price-range-input' type="number" name="max" placeholder='до'/>
                      <button className='price-range-start'>OK</button>
                </div>
                  </div>
                  </form>
                </div>
              </div>
              <div className="country">
              <div className="form-label">
                  <h3>Страна</h3>
                  <button>+</button>
                </div>
                <div className="form-label">
                  <h3>Регион</h3>
                  <button>+</button>
                </div>
                <div className="form-label">
                  <h3>Классификация</h3>
                  <button>+</button>
                </div>
                <div className="form-label">
                  <h3>Сорт Винограда</h3>
                  <button>+</button>
                </div>
              </div>
          </div>
          <div className="sort-dropdown">
            <div className="all-drop">
              <p className='all-drop-price'>Цена</p>         
              <p className='all-drop-maker'>Производитель a-z</p>
              <p className='all-drop-age'>Винтаж</p>
              <p className='all-drop-new'>Новинки</p>
              <p className='all-drop-pop'>Популярные</p>
            </div>
            <div className="main-prod-handle">
            <OneProd></OneProd>
            <OneProd></OneProd>
            <OneProd></OneProd>
            <OneProd></OneProd>
            <OneProd></OneProd>
            <OneProd></OneProd>
            <OneProd></OneProd>
            <OneProd></OneProd>
            <OneProd></OneProd>
            <button className='viewall'>СМОТРЕТЬ ВСЕ
            <svg width="46" height="1" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="46" y1="0.5" y2="0.5" stroke="white"/>
            </svg>
            </button>
            </div>
          </div>
        </section>
        <Choice></Choice>
        </div>
      </main>
    </>
  )
}
export default Home