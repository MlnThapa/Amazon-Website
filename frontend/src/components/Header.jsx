
import { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import axios from 'axios';
import {HiMagnifyingGlass} from 'react-icons/hi2';



const amazon_url = "https://amazonapi-6g80.onrender.com";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  let [bool,setBool] = useState(null)
  let [apiData,setApiData] = useState(null)
  const [category,setCategory] = useState(null)



  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    setBool(null)
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  const handleDropdown = ()=>{
    if(bool == null){
        setBool(1)
    }else{
        setBool(null)
    }
  }

  useEffect(()=>{
    const apiCall = async()=>{
      axios.get(`${amazon_url}/categories`).then((res)=>{
        setApiData(res.data)
      })
    }
    apiCall()
  },[])

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

  const handleChange =(event)=>{
    setCategory(event.target.value)
    console.log(category)
  }


  return (
    <div className='w-screen h-16 bg-gray-dark'>
      { userInfo ? (
      <container className="w-screen h-16 items-center flex justify-around">
        <div className="w-24 h-7 flex justify-center">
          <div className="bg-[url('http://pngimg.com/uploads/amazon/amazon_PNG11.png')] w-28 h-12 bg-contain bg-no-repeat "></div>
        </div>
        <div className="weather"></div>
        <div className="mid-part h-9 w-1/3 items-center flex">
                <input className='h-9 w-8/12 rounded-l-md' type="text" placeholder="search..." />
                <select className='h-9 w-auto text-sm bg-white' name="categories" onChange={handleChange} id="category">
                    {renderOption()}
                </select>
                <div className="h-9 w-1/12 rounded-r-md bg-orange">
                  <Link to={"/category"} >
                    <nav className="h-full w-full items-center flex justify-center">
                        <HiMagnifyingGlass className="searchIcon h-9 w-8/12"/>
                    </nav>
                  </Link>
                </div>
                
        </div>
        <div onClick={handleDropdown} className='h-9 w-9 border border-orange rounded-full items-center headerDiv'>
                  <div className='py-1 px-1 userInfo' >
                      <p className='absolute text-white'>{userInfo.name.slice(0,2)}</p>
                      {
                          bool == 1 ?(
                            <>
                              <div className='w-16 text-white bg-orange mt-8 block text-s border border-orange flex justify-center logoutLink' onClick={logoutHandler}>
                                <p>Logout</p>
                              </div>
                            </>
                          ):(
                              <p></p>
                          )
                      }
                  </div>
                </div> 
      </container>
      ):(<>
      <div className='linksToPages'>
          <Link to='/login'>
            <nav className='links'>
                Sign In
            </nav>
          </Link>
          <Link to='/register'>
              <nav className='links'>
                Sign Up
              </nav>
          </Link>
      </div></>)}
    </div>
  );
};


export default Header;