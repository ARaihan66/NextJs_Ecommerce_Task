import React from 'react'
import Cart from "../components/cart/Cart"
import Navbar from '../components/navbar/Navbar'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className="mx-40">
        <Cart>
          <div className="flex justify-center items-center">
            <button className="uppercase font-semibold rounded-md bg-black text-white py-[5px] px-[10px] my-10">
              checkout
            </button>
          </div>
          </Cart>
    </div></>
  )
}

export default page