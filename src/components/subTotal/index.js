import React from "react";
import "./style.css";

//UTILS
import CurrencyFormat from "react-currency-format";

//CONTEXT
import { useStateValue } from "../../Context/StateProvider";
import { getBasketTotalQuantityAndPrice } from "../../Context/reducer";

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const { totalQuantity, totalPrice } = getBasketTotalQuantityAndPrice(basket);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (<strong>{totalQuantity} </strong>
              {totalQuantity === 1 ? "item" : "items"}):
              {/* {basket.length} */}
              <strong> {value}</strong> {/* ` ${value}` */}
            </p>
            <label className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </label>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}
