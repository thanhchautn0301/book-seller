import { UserProvider } from "@auth0/nextjs-auth0";
import MessengerBox from "components/MessengerBox";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
      <MessengerBox />
    </UserProvider>
  );
}

export default MyApp;
