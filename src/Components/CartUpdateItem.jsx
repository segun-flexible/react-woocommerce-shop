import React from "react";
import { connect } from "react-redux";
import {
  FontAwesomeIcon,
  faChevronUp,
  faChevronDown,
} from "../styles/fontawesome";
import { upCart, downCart } from "../actions";
import { updateUpDownCart } from "../Functions/handleUpdateCart";

const CartUpdateItem = ({ totalItem, id, upCart, downCart }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faChevronUp}
        onClick={() => updateUpDownCart(totalItem, id, upCart)}
      />
      <p className="item-amount">{totalItem}</p>
      <FontAwesomeIcon
        icon={faChevronDown}
        onClick={() =>
          totalItem <= 1 ? "" : updateUpDownCart(totalItem, id, downCart)
        }
      />
    </div>
  );
};

export default connect(null, { upCart, downCart })(CartUpdateItem);
