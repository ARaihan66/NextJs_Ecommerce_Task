"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductsCard = ({ changeDesign }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        //console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {
        products && changeDesign ? 
        <div className="grid grid-cols-3 gap-4 mx-10 ">
          {
            products.map((item,i)=>
            <div key={i} className="bg-gray-100 rounded-xl border-2">
              
              <div className=" flex justify-center w-full h-52">
                <img src={item.image} alt="product image" clasName="p-1 w-full h-100%"/>
              </div>
              <p className="font-semibold mt-4  ml-6">{item?.title?.slice(0,20)}...</p>
              <div className="col-span-2">
                
                <div className=" mt-4  ml-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#F6AA24]" />
                    ))}
                  </div>
                  <p className="text-[#ADB0B7]  mt-2">({item.rating.count} reviews)</p>
                </div>
                <div className="flex justify-between items-center m-6">
                  <p className="font-semibold text-xl text-red-600">${item.price}</p>
                  <button className="bg-black text-white font-semibold px-4 py-2 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
          
            </div>
            )
          }
        </div>:<>
      
        {
         products.map((item,i)=>
          <div className="flex items-center bg-gray-100 border-2 rounded-xl p-5 mx-10 my-5" key={i}>
         <div className="w-1/2">
           <Image src={item.image} alt="product image" width={200} height={200} />
         </div>
         <div className="w-1/2 ml-5">
           <p className="font-semibold">{item.title}</p>
           <div className="flex items-center">
             <div className="flex">
               {[...Array(5)].map((_, i) => (
                 <FaStar key={i} className="text-[#F6AA24]" />
               ))}
             </div>
             <p className="text-[#ADB0B7] ml-2">({item.rating.count} reviews)</p>
           </div>
           <div className="flex justify-between items-center mt-4">
             <p className="font-semibold text-xl text-red-600">${item.price}</p>
             <button className="bg-black text-white font-semibold px-4 py-2 rounded-md">
               Add to Cart
             </button>
           </div>
         </div>
       </div>) 
        }
</>
}
</div>);
};

export default ProductsCard;
