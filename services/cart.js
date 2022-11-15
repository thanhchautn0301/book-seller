import { toast } from "react-toastify";

export const setCart = (bookId, bookName, price, quantity , priceId) => {
    if (quantity > 0) {
        if (localStorage) {
          if (localStorage.getItem("cart")) {
            const items = JSON.parse(localStorage.getItem("cart"));
            const cart = Array.from(items.cart);
            const bookIndex = cart.findIndex((item) => item.bookId === bookId);
            if (bookIndex !== -1) {
              cart[bookIndex].quantity += 1;
            } else {
              cart.push({ bookId: bookId, name: bookName, quantity: 1 ,price: price, priceId: priceId});
            }
            localStorage.setItem("cart", JSON.stringify({ cart: cart }));
            toast.success(`Đã thêm: ${bookName} vào giỏ hàng`, {
              delay: 100,
            });
            window.dispatchEvent( new Event('storage') )
          } else {
            localStorage.setItem(
              "cart",
              JSON.stringify({
                cart: [{ bookId: bookId, name: bookName, quantity: 1 , price: price, priceId: priceId }],
              })
            );
            toast.success(`Đã thêm: ${bookName} vào giỏ hàng`, {
              delay: 100,
            });
            window.dispatchEvent( new Event('storage') )
          }
        }
      } else {
        toast.warning("Sách này đã hết hàng");
      }
}