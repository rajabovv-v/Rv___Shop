import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrdersProduct from './OrdersProduct'
import { Link, useNavigate } from 'react-router-dom'
import { BackIcon } from '../../../assets/icons'
import { removeAllOrders } from '../../../store/slices/orders'


function OrdersList() {

  const {items}  = useSelector(state => state.orders)

  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  const dispatch = useDispatch()

  const handleRemoveAll = () => {
    dispatch(removeAllOrders())
  } 

  return (
    <div className='order-list' >
      {
        items.map(item => (
          <OrdersProduct key={item.id} product={item} />
        ))
      }

      <div className="order-bottom">
        <Link onClick={handleBack} to='/'>
          <button className='order-bottom__back'>
            <BackIcon />
            <span>Back to home</span>
          </button>
        </Link>
        <button className='order-bottom__remove' onClick={handleRemoveAll}>Remove all</button>
      </div>

    </div>
  )
}

export default OrdersList