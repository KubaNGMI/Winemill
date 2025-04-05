import React, { useState } from 'react'
import Bottle from './bottle.png'
import '../Prodcut page/Product.scss'
import France from '../OneProd/france-flag.png'
import Greenstar from './Greenstar.png'
import { addToCart } from '../Cart/cartSlice';
import { useDispatch } from 'react-redux';
import Wine1 from './bottle.png'; 
import SpecialCon from '../SpecialCon/SpecialCon' 
import CompSwProd from '../CompSwProd/CompSwProd'

function Product() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState();
  

  const product = {
    id: '3',
    name: "CHATEAU HAUT-BRION",
    price: 90000,
    image: Wine1,
    region: "франция",
    manufacturer: "HAUT-BRION",
    year: "2009",
    volume: "0.75 л"
  };
  
  const { id, name, price, image, region, manufacturer, year, volume } = product;
  
  const handleQuantityChange = (e) => {

    if (newQuantity >0) {
      setQuantity(newQuantity);
    }
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
      volume,
      quantity: quantity, 
      totalPrice: price * quantity 
    }));
  };
  
  return (
    <>
      <main>
        <div className="container">
          <section>
            <div className="product-handle">
              <div className="product-card1">
                <div className="image-main-container1">
                  <img src={Bottle} alt={name} />
                  <div className="background-prod1"></div>
                </div>
              </div>
              <div className="product__card__right">
                <div className="product__card__right__top">
                  <div className="product__top__text">
                    <h1 className='final-name'>{name}</h1>
                    <p>{year}/{volume}</p>
                    <div className="france__image">
                      <img src={France} alt="France flag" /> 
                      <span>{region}/{manufacturer}</span>
                    </div>
                  </div>
                  <div className="product__top__price">
                    <div className="price__parent">
                      <p>ЦЕНА ЗА 1 ШТ</p>
                      <h1 className='final-price'>{price.toLocaleString('ru-RU')} P</h1>
                    </div>
                    {}
                    <input 
                      type="number" 
                      className="quantity-input" 
                      value={quantity} 
                      onChange={handleQuantityChange}
                      min="0"
                    />
                    <button className="btn-add-to-cart" onClick={handleAddToCart}>В КОРЗИНУ</button>
                  </div>
                </div>
                <div className="product__card__mid">
                  <div className="geography">
                    <p>ГЕОГРАФИЯ:</p>
                    <h2>Франция - Бордо - <br /> Пессак-Леоньян</h2>
                  </div>
                  <div className="class">
                    <p>КЛАССИФИКАЦИЯ:</p>
                    <h2>1-er gcc</h2>
                  </div>
                  <div className="compound">
                    <p>СОРТОВОЙ СОСТАВ:</p>
                    <h2>Каберне Фран <br /> Каберне Совин. <br /> Мерло <br /> Пти Вердо</h2>
                  </div>
                </div>
                <div className="product__card__after__mid">
                  <div className="fortress">
                    <p>КРЕПОСТЬ:</p>
                    <h2>14,5%</h2>
                  </div>
                  <div className="sugar">
                    <p>САХАР:</p>
                    <h2>0,1 г/л</h2>
                  </div>
                </div>
                <div className="product__card__bottom">
                  <div className="importer">
                    <p>ИМПОРТЕР:</p>
                    <h2>SIMPLE WINE</h2>
                  </div>
                  <div className="rating">
                    <p>РЕЙТИНГ:</p>
                    <h2>RP 95</h2>
                  </div>
                  <div className="greenstar">
                    <img src={Greenstar} alt="star" />
                    <img src={Greenstar} alt="star" />
                    <img src={Greenstar} alt="star" />
                  </div>   
                </div>
                <div className="smell">
                  <h2>цвет, вкус, аромат:</h2>
                  <p>Chateau Haut-Brion – относится к великим винам современности. Производимое с 1533 года, оно в какой-то степени может считаться «отцом всех Премьер Крю Классе». Это самое старое Гран Крю Бордо, создатель нового стиля вин в 17 веке. Изюминка Haut-Brion – чрезвычайная щедрость и концентрация, подобная ароматическая настойчивость присуща лишь самым благородным винам. Букет сдержанный, раскрывается неспешно и изящно тонами ягод – ежевики, слив, шелковицы и смородины, сменяясь минеральными, древесными, пряными и копчеными нотками. Вкус столь же замечательно многослойный, величественный, богат танинами, однако полон изящества и утонченности. Начиная со средины дегустации, мощность вина раскрывается полностью, кульминируя в исключительно длительном послевкусии. Перед нами истинный шедевр, Wine Advocate оценил вино в 100 баллов. Рекомендуется пить в период 2020-2054 года.</p>
                </div>
                <div className="legend">
                  <h2>Легенда:</h2>
                  <p>Виноградник Шато находится в коммуне Пессак-Леоньян, и является частью одноименного апелласьона, расположенного на севере винодельческого региона Грав в Бордо. Терруар сформированный двумя крупными гравийными грядами гюнцского периода (гюнцом называется ледниковая эпоха первого четвертичного периода), выдается на 12-15 метров над уровнем дна соседних водоемов. Гравием называется галечник небольшого размера, сформированный различными разновидностями кварца: для Шато О-Брион этот галечникявляется настоящим драгоценным камнем. Две речушки – Пегю на севере и Серпан на юге – ограничивают эту обширную гравийную террасу под названием О-Брион, которая упоминается на старинных картах региона и в нотариальных актах уже с начала 15 века. Подпочва терруара – суглинок. Площадь виноградника – 51 гектара. 48 из них засажены сортами красного винограда (Мерло, Каберне Совиньон, Каберне Фран и Пти Вердо) и около 3 – сортами белого винограда (Семильон и Совиньон Блан). Поместье Шато О-Брион было основано Жаном де Понтаком, и производило вина уже с 1533 года, что делает его старейшим хозяйством региона Бордо. Красное вино Шато О-Брион воплощает в себе пятивековую традицию виноделия и является неотъемлемой частью мировой истории вина. В 1660 году вино Haut Brion, под его сегодняшним названием, подавалось к столу короля Англии Карла Второго, что по всей видимости делает О-БРИОН старейшим элитным брендом во всем мире. Благодаря применению, еще в те далекие времена, новых способов производства и выдержки, это вино стало великим предшественником всех нынешних красных вин предназначенных для длительного хранения. В 1855 году о-брион было возведено в ранг Премьер Крю Классе красных вин Жиронды. Только три других бордоских вина были удостоены такой же высочайшей оценки качества в классификации, которая до сих пор остается актуальной.</p>
                </div>
                <div className="vini">
                  <h2>винификация:</h2>
                  <p>Виноград поступает на винодельню, где после сортировки, ферментации и прессования сок полученный самотеком отделяется от мезги, которая также прессуется для получения «вэн де пресс». Вину дают отдохнуть, далее следует яблочно-молочное брожение и асамбляж путем определения наилучшей возможной комбинации различных сортов. Выдержка проходит в дубовых бочках на протяжении 18-22 месяцев, 80 % из которых новые, с периодическим снятием с осадка. После выдержки в баррелях вино переливают в чаны перед бутылированием.</p>
                </div>
              </div>
            </div>
          </section>
          <CompSwProd></CompSwProd>

            <SpecialCon></SpecialCon>
          </div>
      </main>
    </>
  );
}

export default Product;