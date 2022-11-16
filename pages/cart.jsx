import { useUser } from "@auth0/nextjs-auth0";
import React, { useEffect, useState } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { getPaymentLink } from "services/stripe";
function cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (localStorage) {
      const cart = JSON.parse(localStorage.getItem("cart"))?.cart;
      if (cart) {
        const cartList = Array.from(cart);
        let payPrice = 0;
        setCart(cartList);
        cartList.map((item) => {
          payPrice += item.price * item.quantity;
        });
        setTotal(payPrice);
      }
    }
  }, []);
  const handlePay = () => {
    getPaymentLink(cart,user.email).then(res=> {
      router.replace(res)
    })
  }
    return (
      <div className="fixed flex flex-col items-center justify-center inset-0 gap-4">
        {!cart.length > 0 && <p className="">Giỏ hàng trống</p>}
        <div className="flex flex-col border rounded shadow-md p-4 gap-2">
          <span
            className="flex items-center hover:cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowLeftCircleIcon className="w-6 h-6 text-slate-600 hover:text-slate-500" />
            &nbsp;<span className="text-sm">Quay về</span>
          </span>
          {cart.length > 0 &&
            cart.map((item) => {
              return (
                <div className="border-b-[1px] p-2" key={item.bookId}>
                  <div>
                    <div className="text-sm">
                      <span className="text-base font-semibold">
                        Tên sách:&nbsp;
                      </span>
                      {item.name}
                    </div>
                    <div className="text-sm">
                      <span className="text-base font-semibold">
                        Giá:&nbsp;
                      </span>
                      {item.price}&nbsp;$
                    </div>
                    <div className="text-sm">
                      <span className="text-base font-semibold">
                        Số lượng:&nbsp;
                      </span>
                      <span className="text-lg">x{item.quantity}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          {cart.length > 0 && (
            <div className="text-center">
              <button className="border rounded bg-blue-400 p-1
               font-semibold text-white"
               onClick={handlePay}>
                Thanh toán: {total}&nbsp;$
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }


export default cart;
