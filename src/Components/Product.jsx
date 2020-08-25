import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import ProductLists from "./ProductsList";
import { addToCart } from "../actions";

const Product = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timing = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timing);
  }, []);

  return (
    <section className="products">
      <div className="section-title">
        <h2>
          {loading ? <Skeleton width={300} height={43} /> : "our products"}
        </h2>
      </div>
      <div className="products-center">
        {props.products.map((product) => (
          <ProductLists
            key={product.sys.id}
            productProps={product}
            addToCart={props.addToCart}
            myCart={props.myCart}
            loading={loading}
          />
        ))}
      </div>
    </section>
  );
};
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { addToCart })(Product);
