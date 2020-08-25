import { combineReducers } from "redux";
import product from "../Data/product.json";

export function products(state = [...product.items], action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function cartToggle(state = false, action) {
  switch (action.type) {
    case "OPEN_CART":
      return (state = true);

    case "CLOSE_CART":
      return (state = false);

    default:
      return state;
  }
}

export function myCart(
  state = JSON.parse(localStorage.getItem("carts")) || [],
  action
) {
  switch (action.type) {
    case "ADD_TO_CART":
      return (state = [...state, action.payload]);

    default:
      return state;
  }
}

export function updateTheCartUpDown(state = null, action) {
  switch (action.type) {
    case "UP_CART":
      let item = action.store.find((item) => item.id === action.payload.id);
      item.totalItem += 1;

      return (state = [...action.store, item]);

    case "DOWN_CART":
      let item_down = action.store.find(
        (item_down) => item_down.id === action.payload.id
      );
      item_down.totalItem -= 1;

      return (state = [...action.store, item_down]);

    default:
      return state;
  }
}

export function removeItem(state = null, action) {
  switch (action.type) {
    case "REMOVE_ITEM":
      return action.newList;

    default:
      return state;
  }
}

export function clearCart(state = null, action) {
  switch (action.type) {
    case "CLEAR_CART":
      return (action.store = []);
    default:
      return state;
  }
}

//All Item Price
export function TotalOverallPrice(state = 0, action) {
  switch (action.type) {
    case "UPDATE_OVERALL_PRICE":
      return Number(action.total);

    default:
      return state;
  }
}
const rootReducers = combineReducers({
  products,
  myCart,
  cartToggle,
  updateTheCartUpDown,
  clearCart,
  removeItem,
  TotalOverallPrice,
});
export default rootReducers;
