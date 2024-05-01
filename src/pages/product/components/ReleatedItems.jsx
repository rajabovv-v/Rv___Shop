import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ReleatedItems() {
  const { recommended } = useSelector(state => state.product)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="related-list">
      <div className="container">
        <div className="related-list-wrapper">
          <div className="related-list-top">
            {loading ? <Skeleton width={200} /> : <h1 className="related-list-top__title">Related products</h1>}
          </div>
          <div className="related-list__items">
            {recommended.list.map((item) => (
              <Link to={`/product/${item.slug}`} key={item.id}>
                <div className="related-list__item" key={item.id}>
                  {
                    loading ? <Skeleton width={150} height={170} style={{ marginBottom: 12 }} /> : <div className="related-list__item__image">
                      <img
                        src={item.mainImage}
                        alt={item.title}
                        className="related-list__item__img"
                      />
                    </div>
                  }
                  <div className="related-list__titles">
                    {
                      loading ? <Skeleton width={140} /> : <p className="related-list__item__title">{item.title}</p>
                    }
                    {loading ? <Skeleton width={120} /> : <p className="related-list__item__price">{item.price.toLocaleString()} UZS</p>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReleatedItems;
