import React from 'react'
import { CheckoutList } from './components'
import CheckoutInfo from './components/CheckoutInfo'

function Checkout() {
  return (
    <div className='checkout'>
      <div className="container">
            <div>
              <h1 className="checkout-title">Checkout</h1>
              <div className="checkout-row">
                <CheckoutList />
                <CheckoutInfo/>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Checkout