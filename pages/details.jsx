import { ShoppingCartIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import MessengerBox from "components/MessengerBox";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Book from "../components/Book";
import BookDetails from "../components/BookDetails";
import Counting from "../components/Counting";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SubHeader from "../components/SubHeader";
import Topic from "../components/Topic";
import { getBook } from "../services/book";
import styles from "../styles/Home.module.css";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState({});
  useEffect(() => {
    if (id !== undefined) {
      getBook(id).then((res) => {
        setBook(res);
      });
    }
  }, [id]);
  return (
    <div className="min-h-[100vh] flex flex-col w-full">
      <Header />
      <SubHeader />
      <div className="content px-2 bg-white flex-1 sm:px-20 xl:px-36 py-4 flex flex-col justify-between gap-4">
        <div className="bg-slate-100 w-full h-[50px] p-4">
          <div className="flex items-center text-sm gap-2">
            <Link href="/" className="hover:text-gray-500">
              Trang chủ
            </Link>
            <ChevronRightIcon className="w-3 h-3" />
            <div className="hover:text-orange-400 text-orange-500">
              {book.name}
            </div>
          </div>
        </div>
        <div className="w-full flex-1 flex gap-5">
          <Topic />
          <BookDetails {...book} priceId='price_1M3BKABxW21DvjRJvz5LvZXT'/>
        </div>
      </div>
      <footer className="footer bg-gray-200 px-2 sm:px-20 xl:px-36 min-h-[72px] max-h-[100px] flex items-center">
        Phone number:
        <a className="block text-blue-500" href="tel:+841234567">
          &nbsp;+841999999
        </a>
      </footer>
    </div>
  );
}
