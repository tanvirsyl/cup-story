import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/pizza.png",
      cateName: "Pizza",
    },

    {
      cateImg: "./images/category/coffee-cup.png",
      cateName: "Coffee",
    },
    {
      cateImg: "./images/category/burger.png",
      cateName: "Burguer",
    },
    {
      cateImg: "./images/category/smoothie.png",
      cateName: "Smoothie",
    },
    {
      cateImg: "./images/category/ice-cream.png",
      cateName: "Ice Cream",
    },
    {
      cateImg: "./images/category/fried-chicken.png",
      cateName: "Fried Chicken",
    },
    {
      cateImg: "./images/category/chicken-wings.png",
      cateName: "Wings",
    },
    {
      cateImg: "./images/category/fried-potatoes.png",
      cateName: "Fries",
    },
    {
      cateImg: "./images/category/french-fries.png",
      cateName: "Wedges",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Brownie",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
