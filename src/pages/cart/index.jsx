import React from 'react'
import {CartList, CartInfo} from './components'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { items } = useSelector((state) => state.cart);
  
  const navigate = useNavigate()
 
  const handleBack = () => {
     navigate('/')
  }
  return (
    <div className='cart-page'>
        <div className="container">
          {
            items.length <= 0 ? <div className='cart-empty'>
              <div className="cart-empty__image">
                <img src="/images/cart-empty1.png" alt="" />
              </div>
              <div className="cart-empty__content">
                <h3 className="cart-empty__title">Your cart is empty</h3>
                <button className="cart-empty__btn" onClick={handleBack}>Back home</button>
              </div>
            </div> 
            : 
            <div>
              <h1 className="cart-page__title">My cart (3)</h1>
              <div className="cart-page__row">
                  <CartList/>
                  <CartInfo/>
              </div>
            </div>
          }
 
        </div>
    </div>
  )
}

export default CartPage