export const initialState = {
  basket: [],
  user: null,
};

//SELECTOR
/* export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => {
    console.log("amount:", amount, "item:", item);
    //return item.price + amount;
  }); */

/* export const getBasketTotal = (basket) =>
  basket?.reduce((itemOne, itemTwo) => {
    let totalPriceOne = itemOne.price * itemOne.quantity;
    let totalPriceTwo = itemTwo.price * itemTwo.quantity;
    return totalPriceOne + totalPriceTwo;
  }); */

export const getBasketTotalQuantityAndPrice = (basket) => {
  let totalPrice = 0;
  let totalQuantity = 0;
  basket.forEach((item) => {
    let cleanPrice = parseFloat(item.price);
    totalPrice += cleanPrice * item.quantity;
    totalQuantity += item.quantity;
  });

  return { totalQuantity, totalPrice: totalPrice.toFixed(2) };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
