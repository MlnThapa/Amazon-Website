import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart,addToCart } from '../slices/frontendDataSlice'
import axios from 'axios';
import { NavLink } from 'react-router-dom';



const amazon_url = "https://amazonapi-2lju.onrender.com";
function Cart() {
    const [apiData,setApiData] = useState([])

    const dispatch = useDispatch()
    const cartData  = useSelector((state)=> state.data.cartItems)

   
    useEffect(()=>{
        const apiCall = async()=>{
          await axios.get(`${amazon_url}/items`).then((res)=>{
            setApiData(res.data)
          })
        }
        apiCall()
      },[])

      let totalAmount = ()=>{
        let amount = 0;
        if(apiData && apiData.length>0){
            for(const item in cartData){
                if(cartData[item]>0){
                    let itemInfo = apiData.find((product)=> product.item_id === Number(item))
                    amount += cartData[item] * itemInfo.price  
                }
            }
        }
        return amount
      }

//Items List
      let cartItemsList = ()=>{
        if(apiData && apiData.length>0){
            return apiData.map((item)=>{
                if(cartData[item.item_id]!=0){
                    return (
                        <div key={item.item_id} className='h-full w-full bg-pureWhite mt-3 flex'>
                            <div className='h-full w-6/12 image'>
                                <img className='h-full w-full object-contain' src={`${item.image}`} alt="image" />
                            </div>
                            <div className='h-full w-6/12 flex-col flex justify-around  details'>
                                <div className='text-lg font-bold'>{item.item_name}</div>
                                <div className='text-lg font-medium'>{item.description}</div>
                                <div>Price - &#x20B9; {item.price}</div>
                                <div className='h-7 w-2/5 flex justify-between items-center'>Quantity<button className='h-3 w-5 bg-white flex justify-center items-center' onClick={()=>dispatch(removeFromCart(item.item_id))}>-</button>{cartData[item.item_id]}
                                <button className='h-3 w-5 bg-white flex justify-center items-center' onClick={()=>dispatch(addToCart(item.item_id))}>+</button></div>
                            </div>
                        </div>  
                    )
                }
            })
        }
    }   


  return (
    <div className='w-full h-full mt-10 flex justify-center main-container'>
        <div className='w-6/12 flex-col items-container'>
            <div className='h-24 w-full bg-orange flex justify-center items-center text-3xl font-bold'><h1>Your cart Items</h1></div>
            <div className='h-48 w-full cart-items'>
                {cartItemsList()}
            </div>
        </div>
        <div className='w-3/12 h-60 ml-2 checkout-container'>
            <div className="w-full h-24 bg-pureWhite flex justify-center items-center total-amount">
                <div className='text-lg'>Subtotal : {totalAmount()}</div>
            </div>
            <div className='w-full h-1/2 flex-col flex justify-around items-center  button-checkout-continue'>
                <button className='h-2/5 w-6/12 bg-orange rounded-lg'>Checkout</button>
                <NavLink className='h-2/5 w-6/12 bg-orange rounded-lg flex justify-center items-center' to={"/category"}><button>Continue Shopping</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Cart