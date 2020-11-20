import React, { useEffect, useState } from "react";
import "./style.css";

//COMPONENTS
import Product from "../product";

//DATA
import { PRODUCTS } from "../../services/data";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    PRODUCTS.sort(function () {
      return Math.random() - 0.5;
    });
    setProducts(PRODUCTS);
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Container Background"
        />
        {/* Products */}

        <div className="home__row">
          {products.map(({ id, title, image, price, rating }, index) => {
            let item;
            if (index <= 1) {
              item = (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  price={price}
                  rating={rating}
                />
              );
            }
            return item;
          })}
        </div>

        <div className="home__row">
          {products.map(({ id, title, image, price, rating }, index) => {
            let item;
            if (index === 2 || index === 3 || index === 4) {
              item = (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  price={price}
                  rating={rating}
                />
              );
            }
            return item;
          })}
        </div>

        <div className="home__row">
          {products.map(({ id, title, image, price, rating }, index) => {
            let item;
            if (index === 5) {
              item = (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  price={price}
                  rating={rating}
                />
              );
            }
            return item;
          })}
        </div>
      </div>
    </div>
  );
}
