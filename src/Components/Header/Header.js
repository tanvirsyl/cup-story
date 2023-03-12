import React from "react"
import "./Header.css"
import Head from "../Head/Head"
import Search from "./Search"
import Navbar from "../Navbar/Nav"

const Header = ({ CartItem }) => {
  return (
    <div className='nav_bg'>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
    </div>
  )
}

export default Header
