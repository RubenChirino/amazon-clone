import React from "react";

//SEO
import { Helmet } from "react-helmet";

//COMPONENTS
import Header from "../components/header";
import Home from "../components/home";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Amazon Clone</title>
      </Helmet>
      <Header />
      <Home />
    </>
  );
}
