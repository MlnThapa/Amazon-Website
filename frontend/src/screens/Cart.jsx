import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../slices/frontendDataSlice'

function Cart() {
    const dispatch = useDispatch()
    const data  = useSelector((state)=> state.data.cartItems)
    console.log(data[1])

    let handleClick = ()=>{
        dispatch(addToCart(1))
    }
  return (
    <div className='w-full h-screen mt-10 bg-purple flex justify-center main-container'>
        <div className='w-6/12 h-full bg-orange items-container'>
            <div><h1>Your cart Items</h1></div>
            <div className='cart-items'>
                <h1>item{Object.keys(data)[0]}</h1>
            </div>
            <button onClick={handleClick}>Click me</button>
        </div>
        <div className='w-3/12 h-60 bg-white checkout-container'>
            <h1>
                Checkout
            </h1>
            <button>Checkout</button>
        </div>
    </div>
  )
}

export default Cart