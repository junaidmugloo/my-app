import React from 'react'
import { Link } from 'react-router-dom'
import './otpPage.css'

export default function Offers() {
  return (
    <div className='container10'>
      <div className='offers'>
        <div className='offer-text'>Latest Offers</div>
        <div className='offerPage-cart-icon'><ion-icon name="cart"></ion-icon></div>
      </div>
      <p className='offerPage-para'>Find discounts, Offers special meals and more!</p>
      <p className='check-offer-para'><Link className='offers-btn'>Check Offers</Link></p>

      {/* Copied Layout from Home page */}
      {/* Css is same for both pages  */}
                <div className='div-with-details'>
                    <img className='normal-images' src="../../breakfast.jpg" alt="" />
                    <h5>Cafe de Noir</h5>
                    <div className='rating-and-foodtype'>
                        <p className='p1'><i class="fa-solid fa-star"><span>4.9</span></i>(124 ratings) Cafe</p>
                        <p className='p2'>Western Food</p>
                    </div>
                </div>
                  <div className='div-with-details'>
                    <img className='normal-images' src="../../pizza.jpg" alt="" />
                    <h5>Isso</h5>
                    <div className='rating-and-foodtype'>
                        <p className='p1'><i class="fa-solid fa-star"><span>4.9</span></i>(124 ratings) Cafe</p>
                        <p className='p2'>Western Food</p>
                    </div>
                </div>
                <div className='div-with-details'>
                    <img className='normal-images' src="../../coffee.jpg" alt="" />
                    <h5>Cafe Beans</h5>
                    <div className='rating-and-foodtype'>
                        <p className='p1'><i class="fa-solid fa-star"><span>4.9</span></i>(124 ratings) Cafe</p>
                        <p className='p2'>Western Food</p>
                    </div>
                </div>
      {/* Copied Layout from Home page */}
      {/* Css is same for both pages  */}
    </div>  
  )
}
