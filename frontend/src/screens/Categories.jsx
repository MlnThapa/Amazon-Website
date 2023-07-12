import React,{useState,useEffect} from 'react'
import axios from 'axios';

const amazon_url = "https://amazonapi-6g80.onrender.com";
function Categories() {
  const [apiData,setApiData] = useState([])
  
  useEffect(()=>{
    const apiCall = async()=>{
      axios.get(`${amazon_url}/categories`).then((res)=>{
        setApiData(res.data)
      })
    }
    apiCall()
  },[])
  console.log(apiData)

  const renderItems = ()=>{
    return(
      <>
          
      </>
    )
  }
  const renderOption = ()=>{
    if(apiData){
      return apiData.map((item)=>{
        return (
          <option key={item.category_id} value={item.category_id}>
            {item.category_name}
          </option>
        )
      })
    }
  }
  return (
    <div>
      <div className='w-screen h-10 bg-orange category-list'>
        <div className='max-w-xl h-full text-sm flex justify-around items-center  category-container'>
            {renderOption()}
        </div>
      </div>
    </div>
  )
}

export default Categories