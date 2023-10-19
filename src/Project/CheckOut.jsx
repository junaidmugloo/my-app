import React from 'react'
import { Link } from 'react-router-dom'
import './otpPage.css'


export default function CheckOut() {
    return (
        <div className='container18'>
            {/* Copied From Payment Details Page */}
            {/* Css is Same as Payment details page */}
            <div className='paymentDetails'>
                <div className='payment-back-icon'><Link to='/myOrder'><i class="fa-solid fa-angle-left"></i></Link></div>
                <div className='paymentDetails-text'>Checkout</div>
            </div>
            {/* Copied From Payment Details Page */}
            {/* Css is Same as Payment details page */}
            <div className='delivery-address'>
                <div className='address'>
                    <p>Delivery Address</p>
                    <h6>653 Nostrand Ave., Brooklyn, NY 11216</h6>
                </div>
                <div className='location'>
                <button type="button" class="location-change" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                    Change
                    </button>
                    <div class="modal fade change-address" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                {/* Copied From Payment Details Page */}
                                {/* Css is Same as Payment details page */}
                                <div className='paymentDetails'>
                                    <div className='payment-back-icon'><button type="button" className='close-button'  data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-angle-left"></i></button></div>
                                    <div className='paymentDetails-text'>Change Address</div>
                                </div>
                                {/* Copied From Payment Details Page */}
                                {/* Css is Same as Payment details page */}
                                <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d854114.8103719115!2d73.93561444687501!3d33.2563861374908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682665778851!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <div className='search-address-div'>
                                <form className='menu-form' action="">
                                    <p className='search-icon'><ion-icon name="search"></ion-icon></p>
                                    <p><input className='menu-search' type="text" placeholder='Search Address' /></p>
                                </form>
                                <div className='search-places-div'>
                                    <div className='star-div'><i class="fa-solid fa-star"></i></div>
                                    <div><h6>Choose a saved place</h6></div>
                                    <div><i class="search-arrow fa-solid fa-angle-right"></i></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='payment-methods'>
                <div className='div-with-addcard-option'>
                    <p className='pay-text'>Payment method</p>
                    <p className='card-add-button'>
                    <button type="button" class="checkout-addBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="checkout-add-icon fa-solid fa-plus"></i>Add Card
                    </button></p>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Credit/Debit Card</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form className='modal-form' action="">
                                        <input className='form-input1' type="text" placeholder='Card Number' />
                                        <div className='text-month-year'>
                                            <p>Expiry</p>
                                            <p><input className='input-month' type="text" placeholder='MM'/></p>
                                            <p><input className='input-year' type="text" placeholder='YY'/></p>
                                        </div>
                                        <input className='form-input1' type="text" placeholder='Security Code' />
                                        <input className='form-input1' type="text" placeholder='First Name' />
                                        <input className='form-input1' type="text" placeholder='Last Name' />
                                        <div className='text-and-removeBtn'>
                                            <p>Your can remove this card at anytime</p>
                                            <div className='div-with-toggle-btn'>
                                                <div id='toggle'>
                                                    <span className='indicators'></span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='add-btn'><i class="add-icon fa-solid fa-plus"></i>Add Card</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='payment-types'>
                    <div className='radio-buttons'>
                        <p className='delivery-text'>Cash on delivery</p>
                        <p className='radio-btn-para'><input name='radio' id='radio-btn' type="radio" /></p>
                    </div>
                    <div className='radio-buttons'>
                        <p className='radio-img-number'>
                            <img src="../../visa.jpg" alt="" />
                            <p>**** **** **** 2187</p>
                        </p>
                        <p className='radio-btn-para'><input name='radio' id='radio-btn02' type="radio" /></p>
                    </div>
                    <div className='radio-buttons'>
                    <p className='radio-img-email'>
                            <img className='paypal-img' src="../../paypal2.jpg" alt="" />
                            <p className='email'>johndoe@email.com</p>
                        </p>
                        <p className='radio-btn-para'><input name='radio' id='radio-btn03' type="radio" /></p>
                    </div>
                </div>
            </div>
            <div className='checkout-total'>
                <div className='subtotal1'>
                    <p>Sub Total</p>
                    <h6>$68</h6>
                </div>
                <div className='delivery1'>
                    <p>Delivery Cost</p>
                    <h6>$2</h6>
                </div>
                <div className='discount1'>
                    <p>Discount</p>
                    <h6>-$4</h6>
                </div>
                <div className='total1'>
                    <p>Total</p>
                    <h6>$66</h6>
                </div>
            </div>
            <div className='div-send-order'>
            <button type="button" class="btn btn-primary send-order" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Send Order
            </button>
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header modal-top">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body modal-Body1">
                            <div className='placed-order-details'>
                                <img src="../../send-orderPage-image.jpg" alt="" />
                                <h3>Thank You!</h3>
                                <h6>for your order</h6>
                                <p>Your Order is now being Processed. We will let<br />you know once the order is picked from the outlet. Check the status of your order</p>
                                <Link className='Track-btn'>Track My Order</Link>
                                <Link to='/' className='homePage-btn'>Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
