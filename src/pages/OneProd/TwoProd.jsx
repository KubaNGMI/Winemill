import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/cartSlice';
import Wine from '../OneProd/wineformain.png';
import Flag from '../OneProd/france-flag.png'; 
import '../OneProd/OneProd.scss'

const TwoProd = ({ product }) => {
  const dispatch = useDispatch();
  

  const { id, name, price, image, region, manufacturer, year, volume } = product || {
    id: '2',
    name: "LE MEALHERMITAGE",
    price: 9000,
    image: Wine,
    region: "франция",
    manufacturer: "M.CHAPOUTIER",
    year: "2010",
    volume: "0.75 л"
  };
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      name,
      price,
      image,
      region,
      manufacturer,
      year,
      volume
    }));
  };
  
  // Format price with spaces for thousands
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  
  return (
    <div className="product-swiper">
      <div className="product-card">
        <div className="image-main-container">
          <img src={image || Wine} alt={name} />
          <div className="background-prod"></div>
        </div>
        <div className="product-text">
          <h5>{name}</h5>
          <span>{year}/{volume}</span>
          <p>
            <img src={Flag} alt="" />
            {region}/{manufacturer}
          </p>
          <div className="pric">
            <div className="price-text">
              <p>ЦЕНА ЗА 1 ШТ</p>
              <span className='price-per'>{formattedPrice} р</span>
            </div>
            <button className='incart' onClick={handleAddToCart}>В КОРЗИНУ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoProd;