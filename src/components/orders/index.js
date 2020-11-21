import React from "react";

//STYLES
import "./style.css";

//UTILS
import moment from "moment";
import CurrencyFormat from "react-currency-format";

//COMPONENTS
import BasketItem from "../basketItem";

export default function Orders({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(
        ({ id, title, image, price, rating, quantity }) => (
          <BasketItem
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
            rating={rating}
            quantity={quantity}
            hideButton={true}
          />
        )
      )}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}
