import React from 'react'
import '../CompSwProd/CompSwProd.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import OneProd  from '../OneProd/OneProd'
import TwoProd from '../OneProd/TwoProd'

function CompSwProd() {
  return (
    <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
        <div className="prod-swiper">
            <OneProd></OneProd>
            <TwoProd></TwoProd>
            <OneProd></OneProd>

            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="prod-swiper">
            <OneProd></OneProd>
            <OneProd></OneProd>
            <OneProd></OneProd>

            </div>

            </SwiperSlide>

        </Swiper>  
        <div className="container">
        <div className="learn-more-special">
          <p>СМОТРЕТЬ ВСЕ</p> <svg width="46" height="1" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="46" y1="0.5" y2="0.5" stroke="white"/>
</svg>
</div>
        </div>
    </>
  )
}

export default CompSwProd
