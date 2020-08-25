//Open Cart Nav
export function openCartAction() {
  return {
    type: "OPEN_CART",
  };
}

//Close Cart Nav
export function closeCartAction() {
  return {
    type: "CLOSE_CART",
  };
}

//Add Item To Cart
export function addToCart(item) {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
}

//Remove Item From Cart
export function removeItem(id) {
  return function (dispatch, getState) {
    let newState = getState();
    let newList = newState.myCart.filter((item) => item.id !== id);
    newState.myCart = newList;

    dispatch({
      type: "REMOVE_ITEM",
      newList,
    });
  };
}

//Update Item Up
export function upCart(totalItem, id) {
  return function (dispatch, getState) {
    const allState = getState();

    dispatch({
      type: "UP_CART",
      store: allState.myCart,
      payload: { totalItem, id },
    });
  };
}

//Update Item Down
export function downCart(totalItem, id) {
  return function (dispatch, getState) {
    const allState = getState();

    dispatch({
      type: "DOWN_CART",
      store: allState.myCart,
      payload: { totalItem, id },
    });
  };
}

//Clear All Cart
export function clearCart() {
  return function (dispatch, getState) {
    let getStore = getState();
    let store = (getStore.myCart = []);
    dispatch({ type: "CLEAR_CART", store });
  };
}

//Overall Price
export function OverallPrice(total) {
  return { type: "UPDATE_OVERALL_PRICE", total };
}
