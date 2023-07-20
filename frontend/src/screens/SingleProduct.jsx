import React,{useState,useEffect,useCallback} from 'react'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../slices/frontendDataSlice'
import axios from 'axios';

const amazon_url = "https://amazonapi-2lju.onrender.com";
function SingleProduct() {
    const [data,setData] = useState([])
    const {id} = useParams();

    const dispatch = useDispatch()
    const cartData  = useSelector((state)=> state.data.cartItems)
    console.log(cartData)
    

    useEffect(()=>{
        const apiCall = async()=>{
          await axios.get(`${amazon_url}/items`).then((res)=>{
            setData(res.data)
          })
        }
        apiCall()
        
      },[])
      

      const filterItems = ()=>{
        if(data){
            return data.filter((item)=>{
                return item.item_id == id
            }).map(a=>{
                return (
                    <div className='h-[30rem] w-11/12 flex justify-between items-center' key={a.item_id}>
                        <div className='h-full w-1/2 left-section'>
                            <img className={`h-full w-full object-contain`} src={`${a.image}`} alt="" />
                        </div>
                        <div className='h-1/2 w-5/12 flex flex-col justify-between right-section'>
                            <div className='h-9 text-xl font-semibold tracking-wide w-full mt8 flex-start'><h1>{a.item_name}</h1></div>
                            <div className='h-9 text-base w-full mt8 flex-start'><h2>{a.description}</h2></div> 
                            <div><h2>&#x20B9; {a.price}</h2></div>
                            <div className='w-3/12 h-9 text-sm flex justify-center items-center rounded-3xl bg-orange'><button className='h-full w-full rounded-3xl' onClick={()=>dispatch(addToCart(a.item_id))}>Add to Cart</button></div>
                            <div className='w-3/12 h-9 flex justify-center items-center rounded-3xl bg-orange'><button className='h-full w-full rounded-3xl bg-purple'>Buy Now</button></div>
                        </div>  
                    </div>
                )
            })
        }
      }

  return (
    <>
        <div className='mt-4 h-[35rem] w-screen flex items-center justify-center'>
            {filterItems()}
        </div>
        <Footer/>
    </>
  )
}

export default SingleProduct