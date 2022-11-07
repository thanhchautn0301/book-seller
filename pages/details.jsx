import { ShoppingCartIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Book from "../components/Book";
import Counting from "../components/Counting";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.css";

export default function Details() {
  const options = [
    { id: "author", name: "Tác giả" },
    { id: "topic", name: "Chủ đề" },
    { id: "book", name: "Sách" },
  ];
  return (
    <div className="min-h-[100vh] flex flex-col w-full">
      <header className="bg-slate-100">
        <div className="flex justify-end text-sm items-center">
          <button className="p-2 hover:bg-slate-200 block">
            <ShoppingCartIcon className="h-5 w-5 text-gray-600" />
          </button>
          <div className="py-2 px-4 text-gray-600 hover:text-gray-800 hover:bg-gray-200 h-full cursor-pointer">
            Đăng Ký
          </div>
          <div className="py-2 px-4 text-gray-600 hover:text-gray-800 hover:bg-gray-200 h-full cursor-pointer">
            Đăng Nhập
          </div>
        </div>
      </header>
      <div className="header bg-orange-400 sm:px-20 xl:px-36 min-h-[72px] max-h-[100px] flex flex-wrap items-center justify-between">
        <a href="/">
          <Image src="/logo.png" width={150} height={100} />
        </a>
        <div>
          <SearchBar options={options} />
        </div>
      </div>
      <div className="content bg-white flex-1 sm:px-20 xl:px-36 py-4 flex flex-col justify-between gap-4">
        <div className="bg-slate-100 w-full h-[50px] p-4">
          <div className="flex items-center text-sm gap-2">
            <a href="/" className="hover:text-gray-500">
              Trang chủ
            </a>
            <ChevronRightIcon className="w-3 h-3" />
            <a href="/" className="hover:text-orange-400 text-orange-500">
              Tên sách
            </a>
          </div>
        </div>
        <div className="w-full flex-1 flex gap-4">
          <div className="w-1/6">
            <div className="font-semibold border-b-[1px] py-2">Chủ đề:</div>
            <div>
              <a
                href=""
                className="block p-2 text-sm hover:text-orange-400 border-b-[1px]"
              >
                Ẩm thực
              </a>
              <a
                href=""
                className="block p-2 text-sm hover:text-orange-400 border-b-[1px]"
              >
                Đời sống
              </a>
              <a
                href=""
                className="block p-2 text-sm hover:text-orange-400 border-b-[1px]"
              >
                Công nghệ
              </a>
            </div>
          </div>
          <div className="flex-1 flex gap-4">
            <div className="relative object-cover max-h-[500px] min-w-[250px]">
              <Image src="/books/book1.jpg" className="" fill={true} />
            </div>
            <div className="book-info flex flex-col gap-4">
              <div>
                <div className="font-semibold text-lg mb-3">Tên cuốn sách</div>
                <div className="text-gray-500 text-sm font-semibold mb-3">
                  Tình trạng:
                  <span className="text-orange-500 text-sm ml-2">Còn hàng</span>
                  {/* <span className="text-gray-900 text-sm ml-2">Hết hàng</span> */}
                </div>
                <div className="text-gray-500 text-sm font-semibold">
                  Giá:
                  <span className="text-orange-500 font-bold text-lg ml-2">
                    229.000<span className="underline">đ</span>
                  </span>
                  {/* <span className="text-gray-900 text-sm ml-2">Hết hàng</span> */}
                </div>
                <div className="text-gray-500 text-sm w-2/3 mb-3">
                    <p className="">DỰ ÁN PHƯỢNG HOÀNG Câu chuyện về DevOps và chìa khóa thành công cho mọi doanh nghiệp công nghệ Bill là một quản lý CNTT tại Parts Unlimited. Đó là sáng thứ Ba và trên đường đến văn phòng, Bill nhận được cuộc gọi từ CEO. Dự án Phượng...</p>
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
        </div>
      </div>
      <footer className="footer bg-gray-200 sm:px-20 xl:px-36 min-h-[72px] max-h-[100px] flex items-center">
        Phone number:
        <a className="block text-blue-500" href="tel:+841234567">
          &nbsp;+841999999
        </a>
      </footer>
    </div>
  );
}
