import React, { useEffect, useState } from "react";
import { MessageSmallIcon, BasketIcon, StarIcon } from "../../../assets/icons";
import { useDispatch } from "react-redux";
import { addCart } from "../../../store/slices/cart";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";

function ProductHeader({ product }) {
  const dispatch = useDispatch();
  const [activeImage, setActiveImage] = useState(product.mainImage);
  let images = [product.mainImage, ...product.images];

  const handleAdd = () => {
    dispatch(addCart(product));
    toast.success("Haridingiz savatga qo'shildi");
  };
  const handleImage = (image) => {
    setActiveImage(image);
  };

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])


  return (
    <div className="product-header">
      <div className="container">
        <div className="product-header__wrapper">
          <div className="product-header__image image-wrapper">
            {
              loading ? <Skeleton width={340} height={340} /> : <div className="image-main">
                <img src={activeImage} alt={product?.title} />
              </div>
            }
            <div className="image-list">
              {product.images.map((item, key) => (
                loading ? <Skeleton width={50} height={50} /> :
                  <button
                    className={`image-list__item ${item === activeImage ? "image-list__item_active" : ""
                      }`}
                    key={key}
                    onClick={() => handleImage(item)}
                  >
                    <img src={item} alt={product?.title} />
                  </button>
              ))}
            </div>
          </div>

          <div className="product-header__content content__product-header">
            {loading ? <Skeleton width={180} height={28} style={{ marginBottom: 8 }} /> : <h3 className="content-title">{product?.title}</h3>}
            {
              loading ? <Skeleton width={430} height={20} style={{ marginBottom: 14 }} /> :
                <div className="content-row">
                  <div className="content-row__col">
                    <div className="content-stars">
                      <div className="content-stars__list">
                        <span className="content-star">
                          <StarIcon />
                        </span>
                        <span className="content-star">
                          <StarIcon />
                        </span>
                        <span className="content-star">
                          <StarIcon />
                        </span>
                        <span className="content-star">
                          <StarIcon />
                        </span>
                        <span className="content-star">
                          <StarIcon />
                        </span>
                      </div>
                      <span className="content-stars__title">
                        {product?.rating}
                      </span>
                    </div>
                  </div>

                  <div className="content-row__col">
                    <span className="content-row__icon">
                      <MessageSmallIcon />
                    </span>
                    <span className="content-row__text">
                      {product?.reviewCount} reviews
                    </span>
                  </div>

                  <div className="content-row__col">
                    <span className="content-row__icon">
                      <BasketIcon />
                    </span>
                    <span className="content-row__text">{product?.sold} sold</span>
                  </div>
                </div>
            }

            <div className="content-price">
              {loading ? <Skeleton width={150} height={17} style={{ marginBottom: 5 }} /> : <p className="content-price__old">
                {product?.oldPrice?.toLocaleString()} сум
              </p>}
              {loading ? <Skeleton width={200} height={30} /> : <p className="content-price__new">
                {product?.price?.toLocaleString()} сум
              </p>}
            </div>

            {
              loading ? <Skeleton width={300} height={15} count={3} style={{ padding: "14px 0", marginBottom: 14 }} /> :
                <ul className="content-list">
                  <li className="content-list__item">
                    <strong className="content-list__text">Бренд:</strong>
                    <span className="content-list__line"></span>
                    <span className="content-list__text">
                      {product?.brand?.title}
                    </span>
                  </li>
                  <li className="content-list__item">
                    <strong className="content-list__text">Модель:</strong>
                    <span className="content-list__line"></span>
                    <span className="content-list__text">{product?.model}</span>
                  </li>
                  <li className="content-list__item">
                    <strong className="content-list__text">Наличии:</strong>
                    <span className="content-list__line"></span>
                    <span className="content-list__text">В наличии</span>
                  </li>
                </ul>
            }

            <div className="content-buttons">
              {
                loading ? <Skeleton width={220} height={40} /> : <button
                  className="content-button content-button__primary"
                  onClick={handleAdd}
                >
                  Add cart
                </button>
              }
              {
                loading ? <Skeleton width={200} height={40} /> : <button className="content-button content-button__secondary">
                  Add favourite
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductHeader;
