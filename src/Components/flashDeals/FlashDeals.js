import React from "react"
import "./Flashstyle.css"
import FlashCard from "./FlashCard"

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <section>
      <h5>Get To Know</h5>
      <h2>About Us</h2>
      <div className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Delas</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </div>
    </section>
  )
}

export default FlashDeals
