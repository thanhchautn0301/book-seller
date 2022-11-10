import React from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";

const SubHeader = () => {
  return (
    <div className="header bg-orange-400 px-2 sm:px-20 py-2 xl:px-36 min-h-[72px] flex flex-wrap items-center justify-between">
      <a href="/" className="py-2">
        <Image src="/logo.png" width={150} height={100} />
      </a>
      <SearchBar />
    </div>
  );
};

export default SubHeader;
