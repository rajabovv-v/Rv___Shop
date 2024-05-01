import React, { useState } from "react";
import { CloseIcon } from "../assets/icons";
import { useDispatch } from "react-redux";
import { modalClose } from "../store/slices/modals";
import Axios from "../api";
import { registerUrl } from "../utils/urls";
import { setIsAuth, setUser } from "../store/slices/user";
import { toast } from "react-toastify";

function RegisterModal() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    dispatch(modalClose("registerModal"));
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    const { target } = e;
    let data = {};

    for (let el of Object.keys(target).slice(0.3)) {
      let item = target[el];
      data[item.name] = item.value;
    }

    setLoading(true);

    if (!!data.email && !!data.password && data.name) {
      try {
        Axios.post(registerUrl, data)
          .then((res) => {
            dispatch(setIsAuth(true));
            dispatch(setUser(res.data.data));
            setLoading(false);
            handleClose();
            toast.success("Registratsiya dan o'tdingiz");
          })
          .catch((err) => {
            setLoading(false);
            if (err?.response?.status === 401) {
              alert("Bunday user bor!!!");
            }
          });
      } catch (error) {
        setLoading(false);
        if (error?.response?.status === 401) {
          alert("Bunday user bor!!!");
        }
      }
    }
  };

  return (
    <div className="modal">
      <div className="modal-bg"></div>
      <div className="modal-panel">
        <h3 className="modal-panel__title">Create an account</h3>
        <p className="modal-panel__subtitle">
          Enter your email and password below to create your account
        </p>

        <button className="modal-panel__button" onClick={handleClose}>
          <CloseIcon />
        </button>

        <form className="modal-form" onSubmit={handleFinish}>
          <div className="modal-form__group">
            <label htmlFor="name" className="modal-form__label">
              Name
            </label>
            <input
              type="text"
              className="modal-form__input"
              name="name"
              id="name"
              required
              minLength={3}
            />
          </div>
          <div className="modal-form__group">
            <label htmlFor="email" className="modal-form__label">
              Email
            </label>
            <input
              type="email"
              className="modal-form__input"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="modal-form__group">
            <label htmlFor="password" className="modal-form__label">
              Password
            </label>
            <input
              type="password"
              className="modal-form__input"
              name="password"
              id="password"
              minLength={6}
              required
            />
          </div>
          <div className="modal-form__group">
            <button className="modal-form__button" disabled={loading}>
              {loading ? "Creating..." : "Create account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
