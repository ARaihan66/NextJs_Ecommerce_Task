import React from "react";
import { BsListUl, BsGrid3X3GapFill } from "react-icons/bs";

const SearchOption = () => {
  return (
    <section className="mx-10 my-5">
      <div className="flex justify-between my-5">
        <h3 className=" font-semibold text-2xl">All Our Products</h3>
        <div className="flex ">
          <BsGrid3X3GapFill className="cursor-pointer text-2xl" />
          <BsListUl className="mx-2 cursor-pointer text-2xl" />
        </div>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search Here"
          autoComplete="off"
          className="p-2 border border-gray-500 outline-none rounded-2xl w-full"
        />
      </div>
    </section>
  );
};

export default SearchOption;
