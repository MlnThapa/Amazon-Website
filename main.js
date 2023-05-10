let mode = document.getElementById('light')
let banner = document.querySelector('.banner')
let amazon = document.querySelector('.amazon')
let categories = document.getElementsByClassName('categories')
let coupon = document.querySelector('#coupon')
let country = document.querySelector('.country')
let state = document.querySelector('.state')
let weather = document.querySelector('.weather-detail')
let cards = document.querySelectorAll('.categories-container>nav')
let b = 0;

window.onload(coupon.classList.add('coupon'))


function hideCoupon(){
    coupon.style.visibility = 'hidden'
    amazon.style.filter='blur(0px)';
}

function lightDark(){
    if(b == 0){
        for(let i = 0; i<cards.length;i++){
            cards[i].style.backgroundColor="black"
        }
        b=1
    }else{
        for(let i = 0; i<cards.length;i++){
            cards[i].style.backgroundColor="white"
        }
        b = 0
    }
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
        })
    }else{
        console.log("Geo not supported")
    }
}