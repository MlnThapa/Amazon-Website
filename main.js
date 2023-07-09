import { Component } from "react"

let mode = document.getElementById('light')
let banner = document.querySelector('.banner')
let amazon = document.querySelector('.amazon')
let categories = document.getElementsByClassName('categories')
let coupon = document.querySelector('#coupon')
let country = document.querySelector('.country')
let state = document.querySelector('.state')
let weather = document.querySelector('.weather-detail')
let cards = document.querySelectorAll('.categories-container>nav')
let temperature = document.querySelector('.temperature')
let b = 0;

// window.onload(coupon.classList.add('coupon'))


function hideCoupon(){
    coupon.style.visibility = 'hidden'
    amazon.style.filter='blur(0px)';
}

function lightDark(){
    // if(b == 0){
    //     for(let i = 0; i<cards.length;i++){
    //         cards[i].style.backgroundColor="black"
    //     }
    //     b=1
    // }else{
    //     for(let i = 0; i<cards.length;i++){
    //         cards[i].style.backgroundColor="white"
    //     }
    //     b = 0
    // }
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = b === 0 ? "black" : "white";
      }
      
      b = b === 0 ? 1 : 0;

    document.body.classList.toggle("body-dark")
    banner.classList.toggle('dark')
    amazon.classList.toggle('dark')
    categories[0].classList.toggle('dark')
    categories[1].classList.toggle('dark')
    mode.classList.toggle('dark')
}


function geoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async (data) => {
            let latitude = data.coords["latitude"];
            let longitude = data.coords["longitude"]
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e989050c538b213163998f96efa4a09b`)
            const json = await response.json();
            country.innerHTML = json["sys"]["country"]
            state.innerHTML = json["name"]
            weather.innerHTML = json["weather"][0]["main"]
            temperature.innerHTML = Math.round(json["main"]["temp"] - 273.15) + "&#8451;"
        })
    }else{
        console.log("Geo not supported")
    }
}



//React Header
{/* <StyledHeader>
      <Navbar>
        <nav>
            {userInfo ? (
                <>
                <div className='headerDiv'>
                    <div class="left-part-container">
                      <div class="left-part"></div>
                    </div>
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
            </>
           ) : (
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
            </div>
          )}
        </nav>
      </Navbar>
    </StyledHeader>


// REact styled Component
const StyledHeader = styled.div`
    position:relative;   
    height:70px;
    width:100vw;
    background:#4c4c4c;
    display:flex;   
    align-items: flex-end;
    flex-direction:column;

    .userInfo{
        height: 50px;
        width: 50px;
        border:1px solid white;
        border-radius:50%;
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-left:-15%;
        top:8px;
        cursor:pointer;
    }
    .logoutLink{
        text-decoration:none;
        border:1px solid #fff;
        position:absolute;
        font-size:0.8em;
        color:#fff;
        left:50px;   
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
` */}