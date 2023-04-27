let mode = document.getElementById('light')
let banner = document.querySelector('.banner')
let body = document.querySelector('.amazon')
let categories = document.getElementsByClassName('categories');

const lightDark = ()=>{
    banner.classList.toggle('dark')
    body.classList.toggle('dark')
    categories[0].classList.toggle('dark')
    categories[1].classList.toggle('dark')
    mode.classList.toggle('dark')
}