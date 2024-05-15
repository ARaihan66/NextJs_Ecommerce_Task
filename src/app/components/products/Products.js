import React from "react";
import ProductsCard from "./ProductsCard";
import SearchOption from "./SearchOption";

const Products = () => {
  return (
    <div>
      <div className="product_main">
        <div>
          <SearchOption />
          <ProductsCard />
        </div>
        <div className="bg-rose-600 p-3">
          <h1 className="text-center bg-black text-white p-3 rounded">
            SELECTED PRODUCTS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Products;
