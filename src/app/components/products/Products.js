"use client"

import React, {useState} from "react";
import ProductsCard from "./ProductsCard";
import SearchOption from "./SearchOption";
import { BsListUl, BsGrid3X3GapFill } from "react-icons/bs";
import Cart from "../cart/Cart";

const Products = () => {
    const[cardOne, setCardOne] = useState(true);


  return (
    <div>
      <div className="flex justify-between my-5 mx-10">
        <h3 className=" font-semibold text-2xl">All Our Products</h3>
        <div className="flex mr-64">
          <BsGrid3X3GapFill onClick={()=>setCartOne(1)} className="cursor-pointer text-2xl" />
          <BsListUl onClick={()=>setCartTwo(2)} className="mx-2 cursor-pointer text-2xl" />
        </div>
      </div>
      <div className="product_main">
        <div>
          <SearchOption />
          <ProductsCard />
        </div>
         <div> <Cart/></div>
      </div>
    </div>
  );
};

export default Products;
