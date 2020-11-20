import React, { Fragment } from "react";

//STYLES
import "./style.css";

//CONTEXT
import { useStateValue } from "../../Context/StateProvider";

export default function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    let isItemInBasket = false;
    let quantityOfItem;
    //let indexOfItem;

    basket.forEach((item, index) => {
      if (item.id === id) {
        isItemInBasket = true;
        quantityOfItem = item.quantity + 1;
        //indexOfItem = index;
      }
    });

    if (!isItemInBasket) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          quantity: 1,
        },
      });
    } else {
      //basket.splice(indexOfItem, 1);
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
          quantity: quantityOfItem,
        },
      });
    }
  };

  return (
    <article className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>US</small>
          <strong>${price}</strong>
        </p>
        <div className="product__rating">
          <span>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <Fragment key={i}>⭐</Fragment>
              ))}
          </span>
        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </article>
  );
}
