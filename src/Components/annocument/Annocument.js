import React from "react"
import Banner1 from '../Assets/frinds.jpg'
import Banner2 from "../Assets/lock.jpg"

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <section>
      <h5>What's New</h5>
      <h2>Annocument</h2>
      <div className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src={Banner1} width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src={Banner2} width='100%' height='100%' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Annocument
