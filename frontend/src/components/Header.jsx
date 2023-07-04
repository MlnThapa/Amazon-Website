import { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import styled from 'styled-components'
import axios from 'axios';
import {HiMagnifyingGlass} from 'react-icons/hi2';


const amazon_url = "https://amazonapi-6g80.onrender.com/categories";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  let [bool,setBool] = useState(null)
  let [apiData,setApiData] = useState(null)


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
      axios.get(amazon_url).then((res)=>{
        setApiData(res.data)
      })

    }
    apiCall()
  },[])

  const renderOption = ()=>{
    if(apiData){
      return apiData.map((item)=>{
        return <option key={item.category_id} value={item.category_name}>{item.category_name}</option>
      })
    }
  }


  return (
    <StyledHeader>
      { userInfo ? (
      <container className="mainContainer">
        <div className="left-part-container">
          <div className="left-part"></div>
        </div>
        <div class="weather"></div>
        <div class="mid-part">
                <input type="text" placeholder="search..." />
                <select name="categories" id="category">
                    {renderOption()}
                </select>
                <nav className="searchBox">
                    <HiMagnifyingGlass className="searchIcon"/>
                </nav>
        </div>
        <div className='headerDiv'>
                  <div className='userInfo' >
                      <p onClick={handleDropdown}>{userInfo.name.slice(0,2)}</p>
                      {
                          bool == 1 ?(
                            <>
                              <div className='logoutLink' onClick={logoutHandler}>Logout</div>
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
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
    height:80px;
    width:100vw;
    background:#151d26;
    position:relative;
    

    .mainContainer{
      height:100%;
      width:100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .left-part-container{
      height:40px;
      width:110px;
      margin-left:2%;
    }

    .left-part{
      height:100%;
      width:100%;
      background-image: url("http://pngimg.com/uploads/amazon/amazon_PNG11.png");
      background-position:bottom;
      background-size:90% 90%;
      background-repeat: no-repeat;
  }

  .weather{
    height:40px;
    width: 40px;
    background-image:url('../assets/icons8-partly-cloudy-day-25.png');
    background-position:center;
    background-size:80% 80%;
    background-repeat: no-repeat;
    margin-left:2%;
}
.mid-part{
    height:55%;
    width:510px;
    border-radius: 5px;
    display: flex;
}
input{
    width:365px;
    outline: none;
    height:100%;
    border:none;
    border-radius: 5px 0 0 5px;
    color: #bec2c6;
}
input::placeholder{
    color:#bec2c6;
    left:2%;
    padding:0 0 0 10px;
    font-size: 0.9em;
}
#category{
  width:100px;
  height:100%;
  outline:none;
  border:1px solid #bec2c6;
  color: #151d26;
  font-size: 0.7em;
}
.searchBox{
  width:50px;
  height:100%;
  background: #ff9800;
  border-radius: 0 5px 5px 0;
  display:flex;
  justify-content:center;
  align-items:center;
}
.searchIcon{
  height:60%;
  width:60%;
}


.userInfo{
  height: 40px;
  width: 40px;
  border:3px solid white;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  top:8px;
  cursor:pointer;
  color:#fff;
}

.logoutLink{
  text-decoration:none;
  font-size:0.8em;
  color:#fff;
  position:absolute;
  background:#ff9800;
  top:75%;
  padding:0 5px 0 5px;
  height:30px;
  width:70px;
  display:flex;
  justify-content:center;
  align-items:center;
  transition:0.5s ease;
}
.linksToPages{
  display:flex;
  height:10vh;
  width:200px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  margin-right:30px;
}
.links{
  text-decoration: none;
  color:#fff;
  border:1px solid #ffc100;
  padding:5px;
  width:80px;
  font-size:0.9em;   
}
`

export default Header;