import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import Counting from "./Counting";

// Book.propTypes = {};

const Book = () => {
  return (
    <div className="border rounded flex gap-4 sm:flex-wrap lg:flex-nowrap">
      <div className="object-cover w-full relative min-h-[150px] overflow-hidden">
        <a href="/details?id=" className="w-full">
          <Image fill={true} src="/books/book1.jpg" className="hover:scale-125 transition ease-in-out delay-50"/>
        </a>
      </div>
      <div className="w-full flex items-center">
        <div className="book-info w-full">
          <div className="text-sm flex-1 p-4 border-b-[1px] mb-3">
            Hom nay toi buon
          </div>
          <div className="text-sm font-semibold px-4">
            185.000<span className="underline">đ</span>
          </div>
          <div className="book-action p-4 text-sm flex flex-col gap-3">
            <button className="text-white bg-green-500 hover:bg-green-400 p-2 rounded-sm flex items-center justify-center">
              Mua ngay&nbsp;<ShoppingBagIcon className="h-5 w-5" />
            </button>
            <button className="text-white bg-yellow-400 hover:bg-yellow-500 p-2 rounded-sm flex items-center justify-center">
              <ShoppingCartIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
