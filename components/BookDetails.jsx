import Image from "next/image";
import React from "react";
import Counting from "./Counting";
import Topic from "./Topic";

function BookDetails({ id, name, image, price, quantity, description }) {
  return (
    <div className="flex-1 flex gap-5 border p-4">
      <div className="relative object-cover max-h-[500px] min-w-[250px]">
        <Image src={process.env.NEXT_PUBLIC_GlobalURL.concat(image)} className="shadow-md" fill={true} />
      </div>
      <div className="book-info flex flex-col gap-4">
        <div>
          <div className="font-semibold text-lg mb-3">{name}</div>
          <div className="text-gray-500 text-sm font-semibold mb-3">
            Tình trạng:
            {quantity > 0 && <span className="text-orange-500 text-sm ml-2">
              Còn hàng
            </span>}
            {!quantity > 0 &&  <span className="text-gray-900 text-sm ml-2">Hết hàng</span>}
          </div>
          <div className="text-gray-500 text-sm font-semibold">
            Giá:
            <span className="text-orange-500 font-bold text-lg ml-2">
              {price}<span className="underline">đ</span>
            </span>
            {/* <span className="text-gray-900 text-sm ml-2">Hết hàng</span> */}
          </div>
          <div className="text-gray-500 text-sm w-2/3 mb-3">
            <p className="">
              {description}
            </p>
          </div>
          <div className="text-gray-500 text-sm font-semibold">
            Số lượng:
            <Counting />
          </div>
        </div>
        <div>
          <button className="bg-orange-500 text-white p-2 rounded hover:bg-orange-400">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
