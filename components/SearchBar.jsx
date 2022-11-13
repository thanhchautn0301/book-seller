import React, { useState } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useRef } from "react";

const SearchBar = () => {
  const router = useRouter()
  const inputRef = useRef()
  const handleSearch = () => {
    router.push(`http://localhost:3000?keyword=${inputRef.current.value}`)
  }
  const onEnterSearch = (event) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }
  return (
    <div className="w-2/3 sm:flex-none sm:w-full md:w-1/2 xl:w-1/3">
      <div className="relative overflow-hidden rounded-md flex-1 min-h-[40px]">
        <input
          type="text"
          className="outline-none w-full h-full px-4 border-none absolute inset-0"
          placeholder="Tìm kiếm..."
          ref={inputRef}
          onKeyDown={onEnterSearch}
        />
        <button
          className="bg-white h-full absolute right-0 bottom-0 
          top-0 w-10 flex items-center shadow-none outline-none justify-center border-l-[1px] hover:bg-slate-100"
          onClick={handleSearch}
        >
          <MagnifyingGlassIcon className="h-4 w-4 text-black" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
