import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function ProductsContent({ category }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 0, 5)
  }, [])

  return (
    <>
      {
        loading ? <Skeleton width={250} height={250} /> :
          <div className="products-content">
            <div className="products-content__image">
              <img src={category.image} alt={category.title} />
            </div>
            <div className="products-content__row">
              <h2 className="products-content__title">{category.title}</h2>
              <Link to={`/category/${category.slug}-${category.id}`} >
                <button className="products-content__btn">Source now</button>
              </Link>
            </div>
          </div>
      }
    </>
  );
}

export default ProductsContent;
