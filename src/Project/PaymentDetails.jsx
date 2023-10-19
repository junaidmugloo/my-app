import React from 'react'
import { Link } from 'react-router-dom'
import './otpPage.css'

export default function PaymentDetails() {
    return (
        <div className='container16'>
            <div className='paymentDetails'>
                <div className='payment-back-icon'><Link to='/more'><i class="fa-solid fa-angle-left"></i></Link></div>
                <div className='paymentDetails-text'>Payment Details</div>
                <div className='paymentPage-cart-icon'><ion-icon name="cart"></ion-icon></div>
            </div>
            <p className='card-customizing-text'>Customize your payment method</p>
            <div className='payment-card'>
                <div className='cardDetails'>
                    <div className='cardLine1'>
                        <p className='para-with-link1Text'>Cash/Card on delivery</p>
                        <p className='check-icon'><i class="fa-solid fa-check"></i></p>
                    </div>
                    <div className='line-with-image-number-btn'>
                        <img className='visa-img' src="../../visa.jpg" alt="" />
                        <p className='card-number'>**** **** **** 2187</p>
                        <button className='delete-btn'>Delete Card</button>
                    </div>
                    <p className='other-link'><Link className='other-methods'>Other Methods</Link></p>
                </div>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-plus"></i>Add Another Credit/Debit Card
            </button>
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
    )
}
