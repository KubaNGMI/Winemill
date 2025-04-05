import React from 'react';
import '../Radio/Radio.scss'
const Radio = () => {
  return (
      <div className="theme-popup">
        <input type="radio" name="theme" id="default" defaultChecked />
        <input type="radio" name="theme" id="light" />
        <input type="radio" name="theme" id="dark" />
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="theme-popup__button">
          <span className="theme-popup__icons">


          </span>
          Бестселлеры
        </label>
        <div className="theme-popup__list-container">
          <ul className="theme-popup__list">
            <li>
              <label htmlFor="default">
                <span className="theme-popup__icons">

                </span>
                <span>
                  Новинки
                </span>
              </label>
            </li>
            <li>
              <label htmlFor="light">
                <span className="theme-popup__icons">
                  
                </span>
                <span>
                  Популярные
                </span>
              </label>
            </li>

          </ul>
        </div>
      </div>
  );
}


  

export default Radio;
