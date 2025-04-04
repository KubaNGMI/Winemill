import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity 
} from '../../pages/Cart/cartSlice';
import Flag from '../../pages/OneProd/france-flag.png'; // Make sure to use the correct path
import CompSwProd from '../CompSwProd/CompSwProd'
import SpecialCon from '../SpecialCon/SpecialCon'
import './Cart.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount, deliveryFee = 100 } = useSelector((state) => state.cart);
  
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const formatPrice = (price) => {
    return Math.round(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const discount = 0; 
  const finalTotal = subtotal + deliveryFee;

  return (
    <>
    <div className="container">
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-steps">
          <div className="step active">МОЯ КОРЗИНА</div>
          <div className="step-divider"></div>
          <div className="step">ОФОРМЛЕНИЕ ЗАКАЗА</div>
          <div className="step-divider"></div>
          <div className="step">ЗАКАЗ ОФОРМЛЕН</div>
        </div>
        <div className="continue-shopping">
          <Link to="/">ПРОДОЛЖИТЬ ПОКУПКИ</Link>
          <svg width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="32" y1="0.625" y2="0.625" stroke="white"/>
          </svg>

        </div>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          <div className="cart-table-header">
            <div className="header-товар">ТОВАР</div>
            <div className="header-цена">ЦЕНА</div>
            <div className="header-количество">КОЛИЧЕСТВО</div>
            <div className="header-всего">ВСЕГО</div>
          </div>
          
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-column item-product">
                <button 
                  className="remove-item-btn" 
                  onClick={() => handleRemoveItem(item.id)}
                >
                  ×
                </button>
                <img src={item.image} alt={item.name} className="product-image" />
                <div className="product-info">
                  <h4 className="product-name">{item.name}</h4>
                  <p className="product-details">{item.year}/{item.volume}</p>
                  <p className="product-origin">
                    <img src={Flag} alt="Flag" className="flag-icon" />
                    {item.region}/{item.manufacturer}
                  </p>
                </div>
              </div>
              
              <div className="cart-column item-price">
                {formatPrice(item.price)}
              </div>
              
              <div className="cart-column item-quantity">
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn minus" 
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    —
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button 
                    className="quantity-btn plus" 
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="cart-column item-total">
                {formatPrice(item.totalPrice)}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>СУММА</span>
            <span className="summary-value">{formatPrice(subtotal)}</span>
          </div>
          <div className="summary-row">
            <span>СКИДКА</span>
            <span className="summary-value">{discount}</span>
          </div>
          <div className="summary-row">
            <span>ДОСТАВКА</span>
            <span className="summary-value">{deliveryFee}</span>
          </div>
          <div className="summary-row">
            <span>К ОПЛАТЕ</span>
            <span className="summary-value">{formatPrice(finalTotal)}</span>
          </div>
          <button className="checkout-button">ОФОРМИТЬ ЗАКАЗ</button>
          <div className="payment-methods">
        <h4>СПОСОБЫ ОПЛАТЫ:</h4>
        <ul>
          <li>- КАРТОЙ VISA И MASTERCARD</li>
          <li>- НАЛИЧНЫМИ ПРИ ПОЛУЧЕНИИ</li>
          <li>- ЮРИДИЧЕСКОМУ ЛИЦУ НА Р/С</li>
        </ul>
      </div>
      
        </div>
        
      </div>
      <h3 className='also-like'>ВАМ ТАКЖЕ ПОНРАВИТСЯ...</h3>

    </div>
    <CompSwProd></CompSwProd>

    <SpecialCon></SpecialCon>
    </div>
    </>
  );
};


export default Cart;