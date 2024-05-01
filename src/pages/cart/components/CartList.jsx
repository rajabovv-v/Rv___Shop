import React from "react";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Right from "../../../assets/icons/Right";
import { removeAll } from "../../../store/slices/cart";

function CartList() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeAll());
  };

  const navigate = useNavigate();

  function navigateHome() {
    navigate("/");
  }
  return (
    <div className="cart-main">
      <div className="cart-list">
        {items.map((item) => (
          <CartProduct product={item} key={item.id} />
        ))}
      </div>

      <div className="cart-list-btns">
        <button className="cart-list-btn1" onClick={navigateHome}>
          <Right />
          <span>Back to shop</span>
        </button>

        <button className="cart-list-btn2" onClick={handleRemove}>
          <span>Remove all</span>
        </button>
      </div>
    </div>
  );
}

export default CartList;
