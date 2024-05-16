import Image from "next/image";
import React from "react";
import product from "../../../../public/product.jpg";
import { FaStar } from "react-icons/fa6";


const ProductsCard = () => {

  return (
    <div>
      <div className="mx-10 grid grid-cols-3 gap-4">
        <div className="bg-gray-100 w-full border-2 rounded-xl">
          <Image src={product} alt="image" className="w-[100%] rounded-xl" />
          <p className="m-5 font-semibold">
            Wireless Bluetooth Headset Single Ear ...
          </p>
          <div className="my-5 ml-5">
            <div className="flex ">
              <FaStar className="text-[#F6AA24]" />
              <FaStar className="text-[#F6AA24]" />
              <FaStar className="text-[#F6AA24]" />
              <FaStar className="text-[#F6AA24]" />
              <FaStar className="text-[#F6AA24]" />
            </div>
            <p className="text-[#ADB0B7] mt-2">(121 reviews)</p>
          </div>
          <div className="flex justify-between item-center p-5">
            <p className="font-semibold text-xl text-red-600">$8.9</p>
            <button className="bg-black text-white font-semibold px-[8px] py-[8px] rounded-md ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-gray-100  border-2 rounded-xl mx-10 my-5">
        <div className="w-1/2">
          <Image
            src={product}
            alt="image"
            className="w-[100%] rounded-xl h-[300px]"
          />
        </div>
        <div className="w-1/2">
          <p className="m-5 font-semibold">
            Wireless Bluetooth Headset Single Ear ...
          </p>
          <div className="my-5 ml-5">
            <div className="flex ">
              <FaStar className="text-[#F6AA24]" />
              <FaStar className="text-[#F6AA24]" />
              <FaStar className="text-[#F6AA24]" />
              <FaStar className="text-[#F6AA24]" />
              <FaStar className="text-[#F6AA24]" />
            </div>
            <p className="text-[#ADB0B7] mt-2">(121 reviews)</p>
          </div>
          <div className="flex justify-between item-center p-5">
            <p className="font-semibold text-xl text-red-600">$8.9</p>
            <button className="bg-black text-white font-semibold px-[8px] py-[8px] rounded-md ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
