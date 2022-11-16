import { toast } from "react-toastify";

export const setCart = (bookId, bookName, quantity) => {
    if (quantity > 0) {
        if (localStorage) {
          if (localStorage.getItem("cart")) {
            const items = JSON.parse(localStorage.getItem("cart"));
            const cart = Array.from(items.cart);
            const bookIndex = cart.findIndex((item) => item.bookId === bookId);
            if (bookIndex !== -1) {
              cart[bookIndex].quantity += 1;
            } else {
              cart.push({ bookId: bookId, name: bookName, quantity: 1  });
            }
            localStorage.setItem("cart", JSON.stringify({ cart: cart }));
            toast.success(`Đã thêm: ${bookName} vào giỏ hàng`, {
              delay: 100,
            });
          } else {
            localStorage.setItem(
              "cart",
              JSON.stringify({
                cart: [{ bookId: bookId, name: bookName, quantity: 1 }],
              })
            );
          }
        }
      } else {
        toast.warning("Sách này đã hết hàng");
      }
}