import React, { useRef, useState } from 'react';
import swiperimage1 from '../Home/images/swiper-image1.png'
import image2 from '../CompSw/image-for-sw.png'
import '../CompSw/CompSw.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Pagination, Navigation } from 'swiper/modules';



function CompSw() {
  return (
    <>



<Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
        <SwiperSlide>
          <section className='swiper-top'>
        <div className="container">

          <div className="swiper_content">
            <div className="image-container">
              <img src={swiperimage1} alt="" />
            </div>
            <div className="spacial-offer">
              <div className="text-box-offer">
              <h4>Special offer</h4>
              <h2>pichon longueville 
              comtesse de lalande </h2>
              <a href="#">ЗАКАЗАТЬ ВИНО</a>
              </div>
            </div>
          </div>
          </div>
        </section>
</SwiperSlide>
        <SwiperSlide>
        <section className='swiper-top'>
        <div className="container">

          <div className="swiper_content">
            <div className="image-container">
              <img src={image2} alt="" />
            </div>
            <div className="spacial-offer1">
              <div className="text-box-offer1">
              <h4>Special Offer</h4>
              <h2>ПИНО НУАР: <br />
              БУРГУНДИЯ VS. ЮАР</h2>
              
              <a href="#">УЗНАТЬ БОЛЬШЕ</a>
              </div>
            </div>
          </div>
          </div>
        </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='swiper-top'>
        <div className="container">

          <div className="swiper_content">
            <div className="image-container">
              <img src={swiperimage1} alt="" />
            </div>
            <div className="spacial-offer">
              <div className="text-box-offer">
              <h4>Special offer</h4>
              <h2>pichon longueville 
              comtesse de lalande </h2>
              <a href="#">ЗАКАЗАТЬ ВИНО</a>
              </div>
            </div>
          </div>
          </div>
        </section>
</SwiperSlide>

      </Swiper>
            
    </>
  )
}

export default CompSw
