import React from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import arrow from '../../assets/common/arrow.svg'

import { addToOrder } from '../../redux/reducer/orders'
import { resetCart } from '../../redux/reducer/cart'

import './CartFooter.style.css'

const CartFooter = ({ noOfItems, items }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePlaceOrder = () => {
    const tempItems = []
    Object.entries(items).forEach((([id, item]) => {
      tempItems.push(item)
    }))
    dispatch(addToOrder(tempItems))
    dispatch(resetCart())
    navigate('/special')
  }

  return (
    <div className='cart-footer'>
      <p>{noOfItems} items</p>
      <div className='place-order' onClick={handlePlaceOrder}>
        <p>PLACE ORDER</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default CartFooter