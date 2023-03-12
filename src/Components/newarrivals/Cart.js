import React from "react"
import Ndata from "./Ndata"
import "./style.css"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
// import Swiper and modules styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
const Cart = () => {
  return (
    <>
      <Swiper
        className='content grid product'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={4}
        pagination={{ clickable: true }}
      >
        {Ndata.map((val, index) => {
          return (
            <SwiperSlide key={index} className='box'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>{val.price}৳</span>
              <br />
              <br />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Cart
