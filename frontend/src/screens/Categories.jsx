import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Footer from '../components/Footer';
import { Navigate,NavLink } from 'react-router-dom';

const amazon_url = "https://amazonapi-2lju.onrender.com";

function Categories() {
  const [apiData,setApiData] = useState([])
  const [itemsList,setItemsList] = useState([])

  
  useEffect(()=>{
    const apiCall = async()=>{
      await axios.get(`${amazon_url}/categories`).then((res)=>{
        setApiData(res.data)
      })

      await axios.get(`${amazon_url}/items`).then((res)=>{
        setItemsList(res.data)
      })
    }
    apiCall()
  },[])

  

  const renderItems = ()=>{
    if(itemsList){
      return itemsList.map((item)=>{
        return(
          <NavLink to={`/singleProduct/${item.item_id}`}>
            <div className={`h-96 w-64 mt-8 bg-pureWhite rounded-r-md`} key={item.__id}>
              <div className={`h-2/3 w-full mt-8`} >
                <img className={`h-full w-full object-contain`} src={`${item.image}`} alt="51c-Gl-UCK5-WL-AC-UY436-FMwebp-QL65" border="0"/>
              </div>
              <div className='h-9 text-sm w-full mt8 flex justify-center items-center'><h1>{item.item_name}</h1></div>
              <div className='h-11 text-xs w-fullmt8 flex justify-center items-center'><h3>{item.description}</h3></div>
            </div>
          </NavLink>
        )
      })
    }
  }

  const renderOption = ()=>{
    if(apiData){
      return apiData.map((item)=>{
        return (
          <span key={item.category_id} value={item.category_id}>
            {item.category_name}
          </span>
        )
      })
    }
  }
  return (
    <div className='bg-white'>
      <div className='w-screen h-10 bg-orange category-container'>
        <div className='max-w-xl h-full text-sm flex justify-around items-center  category-list'>
            {renderOption()}
        </div>
      </div>
      <div className='w-full h-auto min-h-screen bg-white flex justify-center items-container'>
        <div className='w-11/12 h-auto grid grid-cols-4 gap-16 justify-items-center items-list'>
              {renderItems()}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Categories