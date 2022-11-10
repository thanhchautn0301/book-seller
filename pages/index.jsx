import { useUser } from "@auth0/nextjs-auth0";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Book from "../components/Book";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import SubHeader from "../components/SubHeader";
import Topic from "../components/Topic";
import { getBooks } from "../services/book";
import { getPaymentLink } from "../services/stripe";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [pageNumb, setPageNumb] = useState(1)
  const router = useRouter()
  const {keyword} = router.query
  useEffect(() => {
    // getPaymentLink().then(res => {
    //   console.log(res)
    // })
    getBooks(keyword).then((res) => {
      setPageNumb(res.totalPages)
      setBooks(res.content);
    });
  }, [keyword]);
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="min-h-[100vh] flex flex-col w-full">
      <Header />
      <SubHeader />
      <div className="content bg-white flex-1 flex flex-col justify-between">
        <div className="flex-0 px-2 sm:px-20 xl:px-36 py-4 flex justify-between gap-4">
          <Topic />
          <div className="flex-1">
            <div className="flex-1 book-list grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {books.length > 0 &&
                books.map((book) => {
                  return <Book {...book} />;
                })}
            </div>
          </div>
        </div>
        <div className="p-2 pt-0">
          <Pagination pageNumb={pageNumb}/>
        </div>
      </div>
      <footer className="footer bg-gray-200 px-2 sm:px-20 xl:px-36 min-h-[72px] max-h-[100px] flex items-center">
        Phone number:{" "}
        <a className="block text-blue-500" href="tel:+841234567">
          &nbsp;+841999999
        </a>
      </footer>
    </div>
  );
}
