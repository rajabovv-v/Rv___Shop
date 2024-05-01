import { Link, useNavigate } from "react-router-dom";
import { HeartIcon, StarIcon } from "../../../assets/icons";
import { useSelector } from "react-redux";

function CategoryItems({ active }) {
  const { products } = useSelector((state) => state.products);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product");
  };

  return (
    <div className={active ? "category-items active" : "category-items"}>
      {products.list.map((item) => (

        <Link to={`/product/${item.slug}`}>
        <div
         
          className={active ? "category-item active" : "category-item"}
          key={item.id}
        >
          <div
            className={
              active ? "category-item__image active" : "category-item__image"
            }
          >
            <img src={item.mainImage} alt={item.title} />
          </div>
          <div
            className={
              active
                ? "category-item__content active"
                : "category-item__content"
            }
          >
            <h2
              className={
                active ? "category-item__title active" : "category-item__title"
              }
            >
              {item.title}
            </h2>
            <div
              className={
                active
                  ? "category-item__prices active"
                  : "category-item__prices"
              }
            >
              <p
                className={
                  active
                    ? "category-item__price active"
                    : "category-item__price"
                }
              >
                {item.price.toLocaleString()} UZS
              </p>
              <p
                className={
                  active
                    ? "category-item__oldprice active"
                    : "category-item__oldprice"
                }
              >
                {item.oldPrice ? item.oldPrice.toLocaleString() : null} UZS
              </p>
            </div>

            <div
              className={
                active ? "category-item__row active" : "category-item__row"
              }
            >
              <div
                className={
                  active
                    ? "category-item__row__col active"
                    : "category-item__row__col"
                }
              >
                <div
                  className={
                    active
                      ? "category-item__stars active"
                      : "category-item__stars"
                  }
                >
                  <div
                    className={
                      active
                        ? "category-item__stars__list active"
                        : "category-item__stars__list"
                    }
                  >
                    <span className="category-item__star">
                      <StarIcon />
                    </span>
                    <span className="category-item__star">
                      <StarIcon />
                    </span>
                    <span className="category-item__star">
                      <StarIcon />
                    </span>
                    <span className="category-item__star">
                      <StarIcon />
                    </span>
                    <span className="category-item__star">
                      <StarIcon />
                    </span>
                  </div>
                  <span className="category-item__stars__title">
                    {item.rating}
                  </span>
                </div>
                <div
                  className={
                    active
                      ? "category-item__order active"
                      : "category-item__order"
                  }
                >
                  <p
                    className={
                      active
                        ? "category-item__orders active"
                        : "category-item__orders"
                    }
                  >
                    {item.sold} orders
                  </p>
                </div>
                <p
                  className={
                    active
                      ? "category-item__text active"
                      : "category-item__text"
                  }
                >
                  Free Shipping
                </p>
              </div>
            </div>
            <p
              className={
                active
                  ? "category-item__subtitle active"
                  : "category-item__subtitle"
              }
            >
              {item.desc.substring(0, 120)}...
            </p>
            <Link to={`/product/${item.slug}`}>
              <button
                className={
                  active ? "category-item__btn active" : "category-item__btn"
                }
              >
                View details
              </button>
            </Link>
          </div>

          <button
            className={
              active
                ? "category-item__favourite active"
                : "category-item__favourite"
            }
          >
            <HeartIcon />
          </button>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryItems;
