import React, { useEffect } from "react";
import { connect } from "react-redux";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import {
  closeCartAction,
  clearCart,
  removeItem,
  OverallPrice,
} from "../actions";
import { faTimesCircle, FontAwesomeIcon } from "../styles/fontawesome";
import { handleCalculateTotal } from "../Functions/handleCalculateTotal";

const Cart = (props) => {
  //Get All Store Price

  useEffect(() => {
    const overAllPrice = handleCalculateTotal(props.myCart);
    props.OverallPrice(overAllPrice);
  });

  return (
    <div
      className={
        props.cartToggle ? "cart-overlay transparentBcg" : "cart-overlay"
      }
    >
      <div className={props.cartToggle ? "cart showCart" : "cart"}>
        <span className="close-cart" onClick={props.closeCartAction}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </span>

        <h2>your cart</h2>
        <div className="cart-content">
          <CartList myCart={props.myCart} removeItem={props.removeItem} />
        </div>

        <div className="cart-footer">
          <CartTotal TotalPrice={props.myCart} clearCart={props.clearCart} />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  closeCartAction,
  clearCart,
  removeItem,
  OverallPrice,
})(Cart);
