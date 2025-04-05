import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/cartSlice';
import Wine from '../OneProd/wineformain.png';
import Flag from '../OneProd/france-flag.png'; 
import Wine1 from '../Prodcut page/bottle.png'
import '../OneProd/OneProd.scss'
import { Link } from 'react-router-dom';


const TwoProd = ({ product }) => {
  const dispatch = useDispatch();
  

  const { id, name, price, image, region, manufacturer, year, volume } = product || {
    id: '3',
    name: "CHATEAUHAUT-BRION",
    price: 90000,
    image: Wine1,
    region: "франция",
    manufacturer: "HAUT-BRION",
    year: "2009",
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
  
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  
  return (
    <>
    <div className="product-swiper">
      <div className="product-card">
        <div className="image-main-container">
          <img src={image || Wine} alt={name} />
          <Link to={`/product`} className="background-prod">
          </Link>
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
    </>
  );
};

export default TwoProd;