import React,{useState,useEffect} from 'react'
import { useParams,NavLink } from 'react-router-dom'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux';

const amazon_url = "https://amazonapi-2lju.onrender.com";
function Body() {
    const [data,setData] = useState([])
    const {id} = useParams();
    const weatherDetails = useSelector((state)=>state.data.weatherData)
    useEffect(()=>{
      const apiCall = async()=>{
        await axios.get(`${amazon_url}/items`).then((res)=>{
          setData(res.data)
        })
      }
      apiCall()
    },[])
  return (
    <>
       <div className='bg-white'>
        <div className="w-screen h-64 mt-5 rounded-md flex justify-center overflow-hidden">
          <div className="rounded-md bg-[url('https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg')] w-11/12 h-full bg-center bg-no-repeat"></div>
        </div>
        <div className='mt-5 w-screen h-96 collectiveItemsContainer flex justify-center'>
          <div className='w-11/12 h-full collectiveItems grid grid-cols-4 gap-4'>
            <span className='bg-pureWhite flex-col flex justify-center items-center'>
            <h1 className='w-11/12 h-8 flex text-md items-center'>Todays top Deal 50% off</h1>
              <div className='w-11/12 h-80'>
                <img className='h-full w-full object-contain' src={`${data[0] && data[7].image}`} alt="" />
              </div>
              <div>see more...</div>
            </span>
            <span className='bg-pureWhite flex-col flex justify-center items-center'>
              <h1 className='w-11/12 h-8 flex text-md items-center'>Fashion</h1>
              <div className='w-11/12 h-80'>
                <img className='h-full w-full object-contain' src={`${data[0] && data[18].image}`} alt="" />
              </div>
              <div>see more...</div>
            </span>
            <span className='bg-pureWhite flex-col flex justify-center items-center'>
              <h1 className='w-11/12 h-8 flex text-md items-center'>Shop by category</h1>
              <div className='w-11/12 h-80'>
              <img className='h-full w-full object-contain' src={`${data[0] && data[16].image}`} alt="" />
              </div>
              <NavLink to="/category"><div>see more...</div></NavLink>
            </span>
            <span className='bg-pureWhite flex-col flex justify-center items-center'>
              <h1 className='w-11/12 h-8 flex items-center text-xl flex justify-center'>Weather</h1>
              <div className='h-0.5 w-1/2  bg-orange'></div>
              <div className='w-11/12 h-56 mt-8 flex-col flex justify-around'>
                <div className='w-full flex justify-center text-xl'>COUNTRY - {weatherDetails[0]}</div>
                <div className='flex justify-center'>{weatherDetails[1]}</div>
                <div className='flex justify-center text-9xl font-bold'>{weatherDetails[3]}</div>
                <div className='flex justify-center'>{weatherDetails[2]}</div>
              </div>
            </span>
          </div>
        </div>

        {/* list items  */}
        <div className='mt-5 w-screen h-96 flex justify-center itemsList'>
          <h1 className='absolute w-11/12 h-5 mt-5'>Today's deal</h1>
          <div className='w-11/12 h-4/6 mt-20 grid grid-cols-5 gap-5'>
            <span className='bg-white'>A</span>
            <span className='bg-white'>B</span>
            <span className='bg-white'>C</span>
            <span className='bg-white'>D</span>
            <span className='bg-white'>E</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body
