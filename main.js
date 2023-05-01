let mode = document.getElementById('light')
let banner = document.querySelector('.banner')
let body = document.querySelector('.amazon')
let categories = document.getElementsByClassName('categories')
let coupon = document.querySelector('#coupon')

window.onload(coupon.classList.add('coupon'))

function hideCoupon(){
    coupon.classList.remove('coupon');
    body.style.filter='blur(0px)';
    console.log('a')
}

function lightDark() {
    banner.classList.toggle('dark')
    body.classList.toggle('dark')
    categories[0].classList.toggle('dark')
    categories[1].classList.toggle('dark')
    mode.classList.toggle('dark')
}