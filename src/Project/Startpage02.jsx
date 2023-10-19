import React from 'react'
import "./otpPage.css"
import { Link } from 'react-router-dom'

export default function StartPage2() {
    return (
        <div className='container4'>
            <div className='carousel-container'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button id='button4' className='carousel-buttons' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button id='button5' className='carousel-buttons' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="active" aria-label="Slide 2"></button>
                    <button id='button6' className='carousel-buttons' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item ">
                        <img src="../../StartPic1.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item active">
                        <img src="../../StartPic2.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="../../StartPic3.png" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"> */}
                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    {/* <span class="visually-hidden">Previous</span> */}
                {/* </button> */}
                {/* <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"> */}
                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                    {/* <span class="visually-hidden">Next</span> */}
                {/* </button> */}
                </div>
            </div>
            <div className='startPage02-description'>
                <h2 className='startpage02-heading'>Fast Delivery</h2>
                <p className='startpage02-para'>Fast food delivery to your home, office wherever you are</p>
                <p className='para6'><Link to='/startpage003' className='startpage02-next-button'>Next</Link></p>
            </div>
        </div>
    )
}
