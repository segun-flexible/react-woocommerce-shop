import React from "react";
import Skeleton from "react-loading-skeleton";
import { handleAddToCart } from "../Functions/handleAddToCart";

const ProductLists = ({ productProps, addToCart, myCart, loading }) => {
  const isAdded = Boolean(myCart.find((c) => c.id === productProps.sys.id));
  return (
    <>
      {loading && <Skeleton height={200} />}
      {!loading && (
        <article className="product">
          <div className="img-container">
            <img
              src={productProps.fields.image.fields.file.url}
              alt={productProps.fields.title}
              className="product-img"
            />
            <button
              className="bag-btn"
              disabled={isAdded}
              onClick={() => {
                handleAddToCart(productProps, addToCart);
              }}
            >
              {isAdded ? "In Cart" : "Add to cart"}
            </button>
          </div>
          <h3>{productProps.fields.title}</h3>
          <h4>{`₦${productProps.fields.price}`}</h4>
        </article>
      )}
    </>
  );
};

export default ProductLists;
