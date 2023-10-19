import React from 'react'
import { Link } from 'react-router-dom'

export default function Startpage003() {
    return (
        <div className='container5'>
            <div className='carousel-container'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button id='button7' className='carousel-buttons' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button id='button8' className='carousel-buttons' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button id='button9' className='carousel-buttons' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="active" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item ">
                        <img src="../../StartPic1.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item active">
                        <img src="../../StartPic2.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item active">
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
            <div className='startPage003-description'>
                <h2 className='startpage003-heading'>Live Tracking</h2>
                <p className='startpage003-para'>Real time tracking of your food on the app once you placed the order</p>
                <p className='para7'><Link to='/' className='startpage003-next-button'>Next</Link></p>
            </div>
        </div>
    )
}
