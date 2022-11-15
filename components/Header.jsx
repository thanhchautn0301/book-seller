import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

// Header.propTypes = {

// };

function Header() {
  const { user } = useUser();
  const [cartQuantity, setCartQuantity] = useState(0);
  useEffect(() => {
    if (localStorage) {
      const updateCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart"))?.cart;
        if (cart !== null && cart?.length > 0) {
          const cartList = Array.from(cart);
          let total = 0;
          cartList.map((book) => {
            total+= book.quantity
          });
          setCartQuantity(total);
        }
      };
      window.addEventListener("storage", () => {
        updateCart();
      });
      return () => {
        window.removeEventListener("storage", updateCart());
      };
    }
  }, []);
  return (
    <header className="bg-slate-100 py-2">
      <div className="flex justify-end text-sm items-center">
        <Link href="/cart">
          <div className="p-2 hover:bg-slate-200 block relative">
            <ShoppingCartIcon className="h-5 w-5 text-gray-600" />
            {cartQuantity > 0 && (
              <div className="w-4 h-4 text-xs absolute top-0 right-0 rounded-full bg-red-500 text-white text-center">
                {cartQuantity}
              </div>
            )}
          </div>
        </Link>
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
