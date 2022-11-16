import React from "react";
import PropTypes from "prop-types";
import Script from "next/script";

const MessengerBox = () => {
  return (
    <div>
      <div id="fb-root" />
      <div id="fb-customer-chat" className="fb-customerchat" />
      <Script src="facebook.js" strategy="lazyOnload"></Script>
    </div>
  );
};

export default MessengerBox;
