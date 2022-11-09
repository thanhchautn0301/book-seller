import React, { useState } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const SearchBar = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("Lựa chọn");
  const handleClickOption = (optionName) => {
    setIsSelected(optionName);
    setIsOpen(!isOpen);
  };
  return (
    <div className="sm:w-full md:w-1/2 xl:w-1/3">
      <div className="p-2 flex gap-2 pr-0 w-full">
        <div className="flex flex-col min-w-[100px] relative">
          <button
            className="border rounded-md p-2 w-full 
            flex items-center justify-between bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="">{isSelected}</div>
            <div>
              <ChevronDownIcon className="h-3 w-3 text-black" />
            </div>
          </button>
          {isOpen && (
            <div className="w-full bg-gray-50 border rounded-sm absolute top-[110%] z-50">
              {options.map((option) => {
                return (
                  <button
                    className="block py-1 border-b-[1px] w-full hover:text-gray-600 hover:bg-slate-100"
                    onClick={() => handleClickOption(option.name)}
                  >
                    {option.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <div className="relative overflow-hidden rounded-md flex-1">
          <input
            type="text"
            className="outline-none w-full h-full px-2 border-none"
            placeholder="Tìm kiếm..."
          />
          <button
            className="bg-white h-full absolute right-0 bottom-0 
          top-0 w-10 flex items-center justify-center border-l-[1px] hover:bg-slate-100"
          >
            <MagnifyingGlassIcon className="h-4 w-4 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
