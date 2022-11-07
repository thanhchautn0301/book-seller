import { useUser } from "@auth0/nextjs-auth0";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Book from "../components/Book";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const options = [
    { id: "author", name: "Tác giả" },
    { id: "topic", name: "Chủ đề" },
    { id: "book", name: "Sách" },
  ];
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="min-h-[100vh] flex flex-col w-full">
      <header className="bg-slate-100">
        <div className="flex justify-end text-sm items-center">
          <button className="p-2 hover:bg-slate-200 block">
            <ShoppingCartIcon className="h-5 w-5 text-gray-600" />
          </button>
          {!user && (
            <>
              <a
                href="/api/auth/login"
                className="py-2 px-4 text-gray-600 hover:text-gray-800 hover:bg-gray-200 h-full cursor-pointer"
              >
                Đăng Ký
              </a>
              <a
                href="/api/auth/login"
                className="py-2 px-4 text-gray-600 hover:text-gray-800 hover:bg-gray-200 h-full cursor-pointer"
              >
                Đăng Nhập
              </a>
            </>
          )}
          {user && 
            <a className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 h-full cursor-pointer" href="/api/auth/logout">Đăng xuất</a>
          }
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
      <div className="content bg-white flex-1 sm:px-20 xl:px-36 py-4 flex justify-between gap-4">
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
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex-1 book-list grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
          <div className="p-4 pb-0">
            <ul className="w-full flex justify-center">
              <li className="inline-block border rounded-full p-3 mx-2 w-[50px] h-[50px] hover:bg-slate-200">
                <button className="w-full h-full text-sm">1</button>
              </li>
              <li className="inline-block border rounded-full p-3 mx-2 w-[50px] h-[50px] hover:bg-slate-200">
                <button className="w-full h-full text-sm">2</button>
              </li>
              <li className="inline-block border rounded-full p-3 mx-2 w-[50px] h-[50px] hover:bg-slate-200">
                <button className="w-full h-full text-sm">3</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="footer bg-gray-200 sm:px-20 xl:px-36 min-h-[72px] max-h-[100px] flex items-center">
        Phone number:{" "}
        <a className="block text-blue-500" href="tel:+841234567">
          &nbsp;+841999999
        </a>
      </footer>
    </div>
  );
}
