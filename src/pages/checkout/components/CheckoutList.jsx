import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../../api";
import { orderPost } from "../../../utils/urls";
import { removeAll } from "../../../store/slices/cart";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CheckoutList() {
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const [pay, setPay] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmint = (e) => {
    e.preventDefault();
    const { target } = e;
    let data = {};

    if (items.length <= 0) {
      alert("savatcha bo'sh");
      return null;
    }

    if (items.length > 1) {
      alert("Faqat bitta maxsulat harid qilishingiz mumkin!");
      return null;
    }

    data.product_id = items[0].id;
    data.user_id = user.id;

    for (let el of Object.keys(target).slice(0, 3)) {
      let item = target[el];
      if (item.name === "tel") {
        data[item.name] = "+998" + item.value;
      } else {
        data[item.name] = item.value;
      }
    }

    if (!!data.product_id && !!data.user_id) {
      setLoading(true);
      try {
        Axios.post(orderPost, data)
          .then((res) => {
            dispatch(removeAll());
            setLoading(false);
            toast.success("Haridingiz uchun raxmat!");
            navigate("/");
          })
          .catch((error) => {
            setLoading(false);
            toast.error("Uzur nimadir xato!💩");
          });
      } catch (error) {
        setLoading(false);
        toast.error("Uzur nimadir xato!💩");
      }
    }
  };

  return (
    <div className="checkout-list">
      <form onSubmit={(e) => handleSubmint(e)}>
        <div className="checkout-list__name">
          <label htmlFor="name">First name & Last name</label>
          <input
            id="name"
            name="username"
            type="text"
            // defaultValue={user.name || ""}
            placeholder="Fullname"
            required
          />
        </div>
        <div className="checkout-list__location">
          <div className="checkout-list__phone">
            <label htmlFor="phone">Telephone</label>
            <input
              id="phone"
              name="tel"
              type="tel"
              placeholder="Telephone"
              pattern="[0-9]{9}"
              required
            />
          </div>
          <div className="checkout-list__address">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="address"
              required
            />
          </div>
        </div>
        <div className="checkout-list__radio">
          <div className="checkout-list__radio__cash">
            <input type="radio" name="payment" id="cash" defaultChecked />
            <label htmlFor="cash">Cash</label>
          </div>
          <div className="checkout-list__radio__card">
            <input type="radio" name="payment" id="card" disabled />
            <label htmlFor="card">Bank card</label>
          </div>
        </div>
        {pay ? (
          <div className="checkout-list__card">
            <label htmlFor="number">
              Card number
              <input className="checkout-list__card__num" id="number" />
            </label>
            <label htmlFor="year">
              Expiration
              <input
                className="checkout-list__card__year"
                type="tel"
                id="year"
              />
            </label>
          </div>
        ) : (
          <div style={{ padding: 40 }}></div>
        )}

        <div className="checkout-list__buttons">
          <button className="checkout-list__button">Back to home</button>
          <button
            className="checkout-list__pay"
            type="submit"
            disabled={!items.length || loading}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutList;
