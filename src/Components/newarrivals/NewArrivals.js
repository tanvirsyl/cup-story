import React from "react"
import Cart from "./Cart"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <h5>Get To Know</h5>
        <h2>About Us</h2>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
              <h2>New Arrivals </h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
