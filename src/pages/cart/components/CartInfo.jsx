import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { modalOpen } from "../../../store/slices/modals";

function CartInfo() {
  const { items } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const subtotal = items.reduce((a, b) => a + b.oldPrice * b.qty, 0);
  const discount = items.reduce(
    (a, b) => a + (b.oldPrice - b.price) * b.qty,
    0
  );
  const total = items.reduce((a, b) => a + b.price * b.qty, 0);

  const handleNaviget = () => {
    navigate("/checkout");
  };
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.user);

  const handleCheckout = () => {
    toast.error("Registratsiya Bo'lishingiz kerak ");
    dispatch(modalOpen("registerModal"));
  };

  return (
    <div className="cart-info">
      <div className="cart-info__row">
        <p className="cart-info__text">Subtotal</p>
        <p className="cart-info__text">{subtotal.toLocaleString()} UZS</p>
      </div>
      <div className="cart-info__row">
        <p className="cart-info__text">Discount</p>
        <p className="cart-info__text cart-info__text_red">
          {discount.toLocaleString()} UZS
        </p>
      </div>
      <div className="cart-info__row">
        <p className="cart-info__text cart-info__text_black">Total</p>
        <p className="cart-info__text cart-info__text_black">
          {total.toLocaleString()} UZS
        </p>
      </div>
      <button
        className="cart-info__btn"
        onClick={isAuth ? handleNaviget : handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
}

export default CartInfo;
