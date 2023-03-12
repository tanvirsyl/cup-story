import React from "react"
import "./Footerstyle.css"

const Footer = () => {
  return (
    <>
      <footer>
       
        <div className='container grid2'>
          <div className='box'>
            <h1>CupStory</h1>
            <p>
              Customer satisfaction is our main motto. We will be honored to
              serve you the best coffee experience in Sylhet. You can also taste
              our delicious dessert, snacks, and more.
            </p>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Nayasharak Point 3100 Sylhet, Sylhet Division, Bangladesh</li>
              <li>Email: cupstory@gmail.com</li>
              <li>Phone: +8801791565639</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
