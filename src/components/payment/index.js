import React, { useState, useEffect, useRef } from "react";

//STYLES
import "./style.css";

//ROUTER
import { Link, useHistory } from "react-router-dom";

//COMPONENTS
import BasketItem from "../basketItem";

//CONTEXT
import { useStateValue } from "../../Context/StateProvider";
import { getBasketTotalQuantityAndPrice } from "../../Context/reducer";

//PAYMENTS
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

//REQUESTS
import axios from "../../axios";

//DATABASE
import { db } from "../../firebase";

export default function Paymemt() {
  const [{ basket, user }, dispatch] = useStateValue();
  const { totalQuantity, totalPrice } = getBasketTotalQuantityAndPrice(basket);

  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  //PROCESS STATES
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  //REF
  const refLocation = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      //check if geolocation is available
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);

        /* You need a Google account to make the following requests
        fetch(
          `http://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&sensor=false`
        )
          .then((response) => response.json())
          .then((data) => console.log("PLACE DATA:", data));

          //-------

          refLocation.current.src = `https://maps.googleapis.com/maps/api/staticmap?center=${position.coords.latitude},${position.coords.longitude}&zoom=13&size=800x400&sensor=false`;
        */
      });
    }

    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${Math.round(totalPrice * 100)}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("The Secret is >>>", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (user) {
      const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then(({ paymentIntent }) => {
          //paymentIntent = payment confirmation

          db.collection("users")
            .doc(user.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });

          setSucceeded(true);
          setError(null);
          setProcessing(false);

          dispatch({
            type: "EMPTY_BASKET",
          });

          history.replace("/orders");
        });
    } else {
      history.replace("/login");
    }
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout{" "}
          {
            <Link to="/checkout">
              ({totalQuantity}
              {totalQuantity === 1 ? " item" : " items"})
            </Link>
          }
        </h1>
        {/* Payment -delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user ? user.email : "Guest"}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
            {/* <figure>
              <img ref={refLocation} src="" alt="" />
            </figure> */}
          </div>
        </div>
        {/* Payment -Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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
        {/* Payment -Payment methods */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go*/}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={totalPrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
