import React, { Fragment } from "react";

//STYLES
import "./style.css";

//CONTEXT
import { useStateValue } from "../../Context/StateProvider";

export default function BasketItem({
  id,
  title,
  image,
  price,
  rating,
  quantity,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const updateItemQuantity = (e) => {
    let newQuantity = parseInt(e.target.value);
    let isSameQuantity = false;

    if (parseInt(e.target.value) === 0 || parseInt(e.target.value) < 0) {
      newQuantity = 1;
    }
    if (parseInt(e.target.value) > 1000) {
      newQuantity = 1000;
    }

    basket.forEach((item) => {
      if (item.id === id && item.quantity === newQuantity) {
        isSameQuantity = true;
      }
    });

    if (isSameQuantity) {
      return;
    }

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: newQuantity,
      },
    });
  };

  return (
    <article className="basketItem">
      <figure>
        <img className="basketItem__image" src={image} alt="Checkout Product" />
      </figure>
      <div className="basketItem__info">
        <h4 className="basketItem__title">{title}</h4>
        <div className="basketItem__priceAndQuantityDiv">
          <p className="basketItem__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <input
            onChange={(e) => updateItemQuantity(e)}
            className="basketItem__quantity"
            type="number"
            value={quantity}
            name="quality"
          />
        </div>
        <span className="basketItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Fragment key={i}>⭐</Fragment>
            ))}
        </span>
        {!hideButton && (
          <button onClick={removeFromBasket} className="basketItem__button">
            Remove from basket
          </button>
        )}
      </div>
    </article>
  );
}
