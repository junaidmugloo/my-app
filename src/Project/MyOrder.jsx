import React from 'react'
import { Link } from 'react-router-dom'
import './otpPage.css'

export default function MyOrder() {
    return (
        <div className='container17'>
            {/* Copied From Payment Details Page */}
            {/* Css is Same as Payment details page */}
            <div className='paymentDetails'>
                <div className='payment-back-icon'><Link to='/more'><i class="fa-solid fa-angle-left"></i></Link></div>
                <div className='paymentDetails-text'>My Order</div>
            </div>
            {/* Copied From Payment Details Page */}
            {/* Css is Same as Payment details page */}
            <div className='image-and-its-details'>
                <div className='food-image'>
                    <img src="../../burger.jpg" alt="" />
                </div>
                <div className='food-image-details'>
                    <h6>King Burgers</h6>
                    <p><i class="star-icon fa-solid fa-star"><span>4.9</span></i>(124 ratings)</p>
                    <p>Burger <span>Western Food</span></p>
                    <p><i class="fa-solid fa-location-dot"></i>No 03,4th Lane Newyork</p>
                </div>
            </div>
            <div className='ordered-food'>
                <div className='items'>
                    <p>Beef Burger x1</p>
                    <h6>$16</h6>
                </div>
                <div className='items'>
                    <p>Classic Burger x1</p>
                    <h6>$14</h6>
                </div>
                <div className='items'>
                    <p>Cheese Chicken Burger x1</p>
                    <h6>$17</h6>
                </div>
                <div className='items'>
                    <p>Cheese Legs Basket x1</p>
                    <h6>$15</h6>
                </div>
                <div className='items'>
                    <p>Fench Fries Large x1</p>
                    <h6>$6</h6>
                </div>
            </div>
            <div className='instructions-and-subtotal'>
                <div className='delivery-instructions'>
                    <h6>Delivery Instructions</h6>
                    <p><button><i class="add-notes-plus fa-solid fa-plus"></i>Add Notes</button></p>
                </div>
                <div className='subtotal-and-delivery-cost'>
                    <div className='subtotal'>
                        <h6>Sub Total</h6>
                        <h6>$68</h6>
                    </div>
                    <div className='delivery-cost'>
                        <h6>Delivery Cost</h6>
                        <h6>$2</h6>
                    </div>
                </div>
                <div className='total'>
                    <h6>Total</h6>
                    <h6>$70</h6>
                </div>
                <Link to='/checkout' className='checkout'>Checkout</Link>
            </div>
        </div>
    )
}
