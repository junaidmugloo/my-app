import React from 'react'
import { Link } from 'react-router-dom'
import "./otpPage.css"

export default function Startpage1() {
    return (
        <div className='container3'>
            <div className='carousel-container'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button id='button1' className='carousel-buttons' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button id='button2' className='carousel-buttons' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button id='button3' className='carousel-buttons' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../StartPic1.png" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
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
            <div className='startPage-description'>
                <h2 className='startpage-heading'>Find Food You love</h2>
                <p className='startpage-para'>Discover the best foods from over 1,000 restaurants and fast delivery to your doorsteps</p>
                <p className='para5'><Link to='/startpage02' className='startpage1-next-button'>Next</Link></p>
            </div>
        </div>
    )
}
