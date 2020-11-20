import React from "react";

//SEO
import { Helmet } from "react-helmet";

//COMPONENT
import Header from "../components/header";
import Checkout from "../components/checkout";

export default function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Checkout | Amazon Clone</title>
      </Helmet>
      <Header />
      <Checkout />
    </>
  );
}
