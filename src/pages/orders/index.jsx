import React from 'react'
import OrdersList from './components/OrdersList'
import OrdersInfo from './components/OrdersInfo'

function OrdersPage() {

  return (
    <div className='order-page'>
        <div className="container">
            <h1 className="order-page__title">Orders</h1>
            <div className="order-page__row">
                <OrdersList/>
                <OrdersInfo/>
            </div>
        </div>
    </div>
  )
}

export default OrdersPage