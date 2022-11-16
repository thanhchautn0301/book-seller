import { UserProvider } from "@auth0/nextjs-auth0";
import MessengerBox from "components/MessengerBox";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </UserProvider>
  );
}

export default MyApp;
