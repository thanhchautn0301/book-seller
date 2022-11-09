import React from "react";
import PropTypes from "prop-types";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useUser } from "@auth0/nextjs-auth0";

// Header.propTypes = {

// };

function Header() {
  const { user } = useUser()
  return (
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
        {user && (
          <a
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 h-full cursor-pointer"
            href="/api/auth/logout"
          >
            Đăng xuất
          </a>
        )}
      </div>
    </header>
  );
}

export default Header;
