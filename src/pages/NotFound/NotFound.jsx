import React from 'react'
import './NotFound.scss'
function NotFound() {
  return (
    <>
     <main>
      <section>
        <div className="container">
          <div className="woman__wine">
            <div className="woman_bg"></div>
          <h2>Ooooops...</h2>
          <h1>похоже, мы не можем найти <br />
          нужную вам страницу <br />
          <p>404</p>
          <br />
          <br />
          загляните сюда</h1>
          <div className="arrow">
          <svg width="16" height="37" viewBox="0 0 16 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.29289 36.7071C7.68342 37.0976 8.31658 37.0976 8.70711 36.7071L15.0711 30.3431C15.4616 29.9526 15.4616 29.3195 15.0711 28.9289C14.6805 28.5384 14.0474 28.5384 13.6569 28.9289L8 34.5858L2.34315 28.9289C1.95262 28.5384 1.31946 28.5384 0.928933 28.9289C0.538409 29.3195 0.538409 29.9526 0.928934 30.3431L7.29289 36.7071ZM7 4.37114e-08L7 36L9 36L9 -4.37114e-08L7 4.37114e-08Z" fill="white"/>
          </svg>
          </div>
          <div className="woman__rigth">
          </div>
          </div>
        </div>
      </section>
      <section>
          <div className="container">
            <div className="conclusion2">
              <div className="conclusion__left">
              <div className="convers2">
                <div className="convers2__pos"></div>
              <p>ЧТО ДЕЛАЕТ НАС ОСОБЕННЫМИ?</p>
              <h1>БЕСЕДА С СОМЕЛЬЕ</h1>
              </div>

              </div>
              <div className="conclusion__right">
              <div className="price">
                <div className="price__pos"></div>
              <p>НА ТЕРРИТОРИИ БОРДО</p>
              <h1>БРЕНДИРОВАНИЕ ВИН</h1>
              </div>

              </div>
            </div>
          </div>
        </section>
      </main> 
    </>
  )
}

export default NotFound
