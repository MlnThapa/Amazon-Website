import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='w-full h-72 mt-5 bg-gray-dark flex justify-center text-white text-sm '>
            <div className='w-11/12 h-full flex justify-around items-center footer-container'>
                <div className='footer-info'>
                    <ul>
                        <li><h1 className='text-lg font-semibold'>Get to know us</h1></li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About amazon</li>
                    </ul>
                </div>
                <div className='footer-info'>
                    <ul>
                        <li><h1 className='text-lg font-semibold'>Make money with us</h1></li>
                        <li>Sell products on amazon</li>
                        <li>sell on amazon business</li>
                        <li>Sell apps ona amazon</li>
                        <li>Become an affiliate</li>
                    </ul>
                </div>
                <div className='footer-info'>
                    <ul>
                        <li><h1 className='text-lg font-semibold'>Amazon payment products</h1></li>
                        <li>Amazon business card</li>
                        <li>Shop with points</li>
                        <li>Reload your balance</li>
                    </ul>
                </div>
                <div className='footer-info'>
                    <ul>
                        <li><h1 className='text-lg font-semibold'>Let us help you</h1></li>
                        <li>Your account</li>
                        <li>Your orders</li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
