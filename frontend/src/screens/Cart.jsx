import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../slices/frontendDataSlice'
import axios from 'axios';


const amazon_url = "https://amazonapi-2lju.onrender.com";
function Cart() {
    const [apiData,setApiData] = useState([])

    const dispatch = useDispatch()
    const cartData  = useSelector((state)=> state.data.cartItems)
    // console.log(data[1])

    let handleClick = ()=>{
        dispatch(addToCart(1))
    }
   
    useEffect(()=>{
        const apiCall = async()=>{
          await axios.get(`${amazon_url}/items`).then((res)=>{
            setApiData(res.data)
          })
        }
        apiCall()
      },[])
      console.log(apiData)

//Items List
      let cartItemsList = ()=>{
        return apiData.map((item)=>{
            if(cartData[item.item_id] !== 0){
                return (
                    <h1 key={item.item_id}>{item_name}</h1>
                )
            }
        })
    }


  return (
    <div className='w-full h-screen mt-10 bg-purple flex justify-center main-container'>
        <div className='w-6/12 h-full bg-orange items-container'>
            <div><h1>Your cart Items</h1></div>
            <div className='cart-items'>
                {cartItemsList}
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