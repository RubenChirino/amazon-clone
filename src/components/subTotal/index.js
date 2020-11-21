import React from "react";

//STYLES
import "./style.css";

//ROUTER
import { useHistory } from "react-router-dom";

//UTILS
import CurrencyFormat from "react-currency-format";

//CONTEXT
import { useStateValue } from "../../Context/StateProvider";
import { getBasketTotalQuantityAndPrice } from "../../Context/reducer";

export default function Subtotal() {
  const history = useHistory();

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
              <strong> {value}</strong>
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

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
