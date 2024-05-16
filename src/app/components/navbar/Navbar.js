"use client"
import Link from "next/link";
import Logo from "../../../../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-2 bg-black text-white">
      <div>
        <Link href="/" className="text-xl font-bold">
          <Image src={Logo} alt="Logo" className="h-[60px] w-[100px]" />
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link
          href="/"
          className="font-semibold uppercase px-3 py-1 rounded-md"
        >
          Products
        </Link>
        <Link
          href="/cart"
          className="font-semibold uppercase px-3 py-1 rounded-md"
        >
          Cart
        </Link>
      </div>
      <div>
        <Link
          href="/login"
          className="font-semibold p-3 uppercase bg-blue-700 rounded-md"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
