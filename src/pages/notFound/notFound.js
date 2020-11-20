import React, { useEffect, useState } from "react";

//STYLES
import "./style.css";

//ROUTER
import { Link } from "react-router-dom";

//COMPONENTS
import Header from "../../components/header";

//DATA
import { NOT_FOUND_IMG } from "../../services/data";

//HELPERS
import { getRandomInt } from "../../helpers";

export default function NotFound() {
  const [dogSelected, setDogSelected] = useState("");

  useEffect(() => {
    setDogSelected(NOT_FOUND_IMG[getRandomInt(5)]);
  }, []);

  return (
    <div className="notFound">
      <Header />
      <div className="notFound__content">
        <Link to="/">
          <h1>SORRY</h1>
          <h2>we couldn't find that page</h2>
          <h3>
            Try searching or go to <strong>Amazon's home page</strong>.
          </h3>
        </Link>
        <Link to="/">
          <figure>
            <img
              src={process.env.PUBLIC_URL + `/images/not_found/${dogSelected}`}
              alt="Cute Dog"
            />
          </figure>
        </Link>
      </div>
    </div>
  );
}
