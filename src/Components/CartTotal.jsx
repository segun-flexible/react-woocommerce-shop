import React from "react";
import { handleCalculateTotal } from "../Functions/handleCalculateTotal";

const CartTotal = (props) => {
  const total = handleCalculateTotal(props.TotalPrice);

  return (
    <>
      {total <= 0 ? (
        <h5>Cart Is Empty</h5>
      ) : (
        <>
          <h3>
            your total: ₦ <span className="cart-total">{total}</span>
          </h3>
          <button className="clear-cart banner-btn" onClick={props.clearCart}>
            clear cart
          </button>
        </>
      )}
    </>
  );
};

export default CartTotal;
