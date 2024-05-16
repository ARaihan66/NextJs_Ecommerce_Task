import Link from "next/link";
import Image from "next/image";
import product from "../../../../public/product.jpg";
import { FaStar } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="sticky top-5 border-2 border-black p-3 mt-20 mb-6 mr-16">
      <h1 className="text-center bg-black text-white p-3 rounded">
        SELECTED PRODUCTS
      </h1>
      <div className="flex bg-gray-100 border-2 rounded-xl mx-2 my-5 h-[150px]">
        <div className="w-1/2 h-[100%]">
          <Image
            src={product}
            alt="image"
            className="w-[100%] rounded-xl h-[100%]"
          />
        </div>
        <div className="w-1/2 p-2">
          <p className="text-xs mx-2">Wireless Bluetooth Headset Single Ear</p>
          <div className="flex justify-between items-center my-1 mx-2">
            <div>
              <div className="flex text-sm">
                <FaStar className="text-[#F6AA24]" />
                <FaStar className="text-[#F6AA24]" />
                <FaStar className="text-[#F6AA24]" />
                <FaStar className="text-[#F6AA24]" />
                <FaStar className="text-[#F6AA24]" />
              </div>
              <p className="text-[#ADB0B7] mt-1 text-sm">(121 reviews)</p>
            </div>
            <div className="mt-4">
              <RiDeleteBinLine className="text-xl text-red-500 cursor-pointer mx-2" />
            </div>
          </div>
          <div className="flex justify-between item-center ml-2">
            <p className="font-semibold text-xl text-red-600">$8.9</p>
          </div>
        </div>
      </div>

      <p className="uppercase text-right my-5 font-semibold">
        total price : $0
      </p>

      <div className="flex justify-between">
        <div>
          <input type="checkbox" name="terms" required className="mx-3" />
        </div>
        <div>
          I've read and agree to the{" "}
          <Link href="#" className="underline">
            terms and conditions
          </Link>
           ,  
          <Link href="#" className="underline">
            refund policy &
          </Link>
           
          <Link href="#" className="underline">
            privacy policy
          </Link>
          <div className="float-right">
            <button className="uppercase font-semibold rounded-md bg-black text-white py-[5px] px-[10px] my-10">
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
