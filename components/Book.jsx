import React from "react";
import Image from "next/image";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { getPaymentLink } from "../services/stripe";
import { useRouter } from "next/router";
import { useRef } from "react";
import Link from 'next/link'
// Book.propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string,
//   image: PropTypes.string,
//   price: PropTypes.string,
//   quantity: PropTypes.string
// };

const Book = ({ id, name, image, price, quantity, priceId }) => {
  const router = useRouter();
  const handleBuy = () => {
    const bookList = [
      {
        priceId: priceId,
        quantity: 1,
      },
    ];
    getPaymentLink(bookList).then((res) => {
      router.push(res.url);
    });
  };
  return (
    <div className="border rounded flex gap-4 sm:flex-wrap lg:flex-nowrap">
      <div className="object-contain w-full relative min-h-[150px] overflow-hidden">
        <Link href={`/details?id=${id}`} className="w-full">
          <Image
            fill={true}
            src={process.env.NEXT_PUBLIC_GlobalURL.concat(image)}
            className="hover:scale-125 transition ease-in-out delay-50"
            alt="Book Image"
          />
        </Link>
      </div>
      <div className="w-full flex items-center">
        <div className="book-info w-full">
          <Link href={`/details?id=${id}`} className="block hover:text-gray-500 text-sm flex-1 p-4 border-b-[1px] mb-3">
            {name}
          </Link>

          <div className="text-sm font-semibold px-4">
            {price}
            <span className="underline">$</span>
          </div>
          <div className="book-action p-4 text-sm flex flex-col gap-3">
            <button
              className="text-white bg-green-500
             hover:bg-green-400 p-2 rounded-sm flex items-center
              justify-center"
              onClick={handleBuy}
            >
              Mua ngay&nbsp;
              <ShoppingBagIcon className="h-5 w-5" />
            </button>
            <button
              className="text-white bg-gray-100 hover:bg-gray-200
             p-2 rounded-sm flex items-center justify-center"
            >
              <ShoppingCartIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
