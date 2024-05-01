import React from 'react'
import { useDispatch } from 'react-redux'
import { removeOrder } from '../../../store/slices/orders'

function OrdersProduct({ product }) {

  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeOrder(product.id))
  }


  return (
    <div className='orders-product'>
      <div className="orders-product__image">
        <img src={product.image} alt="" />
      </div>
      <div className="orders-product__content">
        <div className="orders-product__row">
          <p className="orders-product__title">{product.title}</p>
          <p className='orders-product__price'>{product.price.toLocaleString()} UZS</p>
        </div>
        <div className="orders-product__row">
          <p className='orders-product__subtitle'>{product.model}</p>
        </div>
        <div className="orders-product__row">
          <button className="orders-product__button" onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default OrdersProduct