import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const HeroSlider = () => {
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
        <Skeleton height={800} />
      ) : (
        <header className="hero">
          <div className="banner">
            <h1 className="banner-title">Furniture Collection</h1>
            <button className="banner-btn">Shop Now</button>
          </div>
        </header>
      )}
    </>
  );
};

export default HeroSlider;
