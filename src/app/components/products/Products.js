import React from "react";
import ProductsCard from "./ProductsCard";
import SearchOption from "./SearchOption";

const Products = () => {
  return (
    <div className="product_main">
      <div className="">
        <SearchOption />
        <ProductsCard />
      </div>
      <div className="bg-rose-600">
        <h1>CART</h1>
        </div>
    </div>
  );
};

export default Products;
