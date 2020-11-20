import React, { useEffect, useState } from "react";

//STYLES
import "./style.css";

//COMPONENTS
import BasketItem from "../basketItem";
import Subtotal from "../subTotal";

//CONTEXT
import { useStateValue } from "../../Context/StateProvider";

export default function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [emailWithoutDomain, setEmailWithoutDomain] = useState("");

  useEffect(() => {
    if (user) {
      let character = user.email.indexOf("@");
      setEmailWithoutDomain(user.email.substring(0, character));
    }
  }, [user]);

  return (
    <div className="checkout">
      {/* Left */}
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user ? emailWithoutDomain : "Guest"}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* BasketItem */}
          {basket.map(({ id, title, image, price, rating, quantity }) => (
            <BasketItem
              key={id}
              id={id}
              title={title}
              image={image}
              price={price}
              rating={rating}
              quantity={quantity}
            />
          ))}
        </div>
      </div>

      {/* right */}
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
