import React from "react";
import ProductsCard from "./ProductsCard";
import SearchOption from "./SearchOption";

const Products = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-1">
        <SearchOption />
        <ProductsCard />
      </div>
      <div className="flex-1">CART</div>
    </div>
  );
};

export default Products;
