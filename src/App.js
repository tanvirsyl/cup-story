import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./Components/Navbar/Nav.js"
import NewArrivals from "./Components/newarrivals/NewArrivals"
import FlashDeals from "./Components/flashDeals/FlashDeals"
import Data from "./Components/Data"
import Wrapper from './Components/wrapper/Wrapper';
import Footer from './Components/footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Annocument from './Components/annocument/Annocument';
import TopCate from './Components/top/TopCate';
function App() {
  const { productItems } = Data
  const [CartItem, setCartItem] = useState([])
  //Step 4 :
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      )
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  return (
    <>
      <Router>
        <Header/>
        <Home/>
        <TopCate/>
        <NewArrivals />
        <Route path='/' exact>
          <FlashDeals productItems={productItems} addToCart={addToCart} />
        </Route>
        <Wrapper/>
        <Annocument/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
