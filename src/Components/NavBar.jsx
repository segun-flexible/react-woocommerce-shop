import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { faCartPlus, faHome, FontAwesomeIcon } from "../styles/fontawesome";
import { openCartAction } from "../actions";
import { handleToTalItemDisplay } from "../Functions/handleCalculateTotal";
import Skeleton from "react-loading-skeleton";

const NavBar = (props) => {
  const totalItem = handleToTalItemDisplay(props.myCart);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timing = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timing);
  }, []);
  return (
    <>
      {loading ? (
        <Skeleton height={60} />
      ) : (
        <nav className="navbar">
          <div className="navbar-center">
            <span className="nav-icon">
              <FontAwesomeIcon icon={faHome} /> <span>My </span>{" "}
              <span>Shop</span>
            </span>

            <img src="" alt="" />

            <div className="cart-btn" onClick={props.openCartAction}>
              <span className="nav-icon">
                <FontAwesomeIcon icon={faCartPlus} />
              </span>
              <div className="cart-items">{totalItem}</div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { openCartAction })(NavBar);
