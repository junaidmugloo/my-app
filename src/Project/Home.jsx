import React from 'react'
import { Link } from 'react-router-dom'
import './otpPage.css'

export default function Home() {
        return (
            <div className='container6'>
                <h1>Good morning Alika!<i class="fa-sharp fa-solid fa-cart-shopping"></i></h1>
                <p>Delivering to</p>
                
                <select className='dropdown' name="" id="">
                    <option value="current location">Current Location</option>
                    <option value="jammu">Jammu</option>
                    <option value="kashmir">Kashmir</option>
                    <option value="bangalore">Bangalore</option>
                </select>
                <form className='home-form' action="">
                    <p className='home-search-icon'><ion-icon name="search"></ion-icon></p>
                    <p><input className='home-search' type="text" placeholder='Search Food' /></p>
                </form>
                <div className='Conteudo'>
                    <div className='carrousel'>
                        <article className='card'>
                            <img className='slider-images' src="../../burger.jpg" alt="" />
                            <h5 className='images-description'>Offers</h5>
                        </article>
                        <article className='card'>
                            <img className='slider-images' src="../../hawai.jpg" alt="" />
                            <h5 className='images-description'>Hawai</h5>
                        </article>
                        <article className='card'>
                            <img className='slider-images' src="../../indian.jpg" alt="" />
                            <h5 className='images-description'>Indian</h5>
                        </article>
                        <article className='card'>
                        <img className='slider-images' src="../../italian.jpg" alt="" />
                            <h5 className='images-description'>Italian</h5>
                        </article>
                        <article className='card'>
                        <img className='slider-images' src="../../germany.jpg" alt="" />
                            <h5 className='images-description'>Germany</h5>
                        </article>
                        <article className='card'>
                        <img className='slider-images' src="../../italian.jpg" alt="" />
                            <h5 className='images-description'>Hawai</h5>
                        </article>
                    </div>
                </div>
                <div className='heading-and-link'>
                    <h2 className='heading2'>Popular Restaurants</h2>
                    <div className='div-with-link'><a href="">view all</a></div>
                </div>
                <div className='div-with-details'>
                    <Link to='/quantitypage'><img className='normal-images' src="../../pizza.jpg" alt="" /></Link>
                    <h5>Minute by tuk tuk</h5>
                    <div className='rating-and-foodtype'>
                        <p className='p1'><i class="fa-solid fa-star"><span>4.9</span></i>(124 ratings) Cafe</p>
                        <p className='p2'>Western Food</p>
                    </div>
                </div>
                <div className='div-with-details'>
                    <img className='normal-images' src="../../breakfast.jpg" alt="" />
                    <h5>Cafe de Noir</h5>
                    <div className='rating-and-foodtype'>
                        <p className='p1'><i class="fa-solid fa-star"><span>4.9</span></i>(124 ratings) Cafe</p>
                        <p className='p2'>Western Food</p>
                    </div>
                </div>
                <div className='div-with-details'>
                    <img className='normal-images' src="../../bakery.jpg" alt="" />
                    <h5>Bakes by Tella</h5>
                    <div className='rating-and-foodtype'>
                        <p className='p1'><i class="fa-solid fa-star"><span>4.9</span></i>(124 ratings) Cafe</p>
                        <p className='p2'>Western Food</p>
                    </div>
                </div>
                <div className='heading-and-link2'>
                    <h2 className='heading2'>Most Popular</h2>
                    <div className='div-with-link2'><a href="">view all</a></div>
                </div>
                <div className='Conteudo1'>
                    <div className='carrousel1'>
                        <article className='card1'>
                            <img className='slider-images1' src="../../pizza2.jpg" alt="" />
                            <h5 className='images-description1'>Cafe De Bambaa</h5>
                            <p className='images-description2'>Cafe<span className='span1'>Western Food</span><i class="fa-solid fa-star"><span>4.9</span></i></p>
                        </article>
                        <article className='card1'>
                            <img className='slider-images1' src="../../waffle.jpg" alt="" />
                            <h5 className='images-description1'>Cafe de Noir</h5>
                            <p className='images-description2'>Cafe<span className='span1'>Western Food</span><i class="fa-solid fa-star"><span>4.9</span></i></p>
                        </article>
                        <article className='card1'>
                            <img className='slider-images1' src="../../bakery.jpg" alt="" />
                            <h5 className='images-description1'>Bakes by Tella</h5>
                            <p className='images-description2'>Cafe<span className='span1'>Western Food</span><i class="fa-solid fa-star"><span>4.9</span></i></p>
                        </article>
                        <article className='card1'>
                            <img className='slider-images1' src="../../breakfast.jpg" alt="" />
                            <h5 className='images-description1'>Burger by Bricks</h5>
                            <p className='images-description2'>Cafe<span className='span1'>Western Food</span><i class="fa-solid fa-star"><span>4.9</span></i></p>
                        </article>
                        <article className='card1'>
                            <img className='slider-images1' src="../../waffle.jpg" alt="" />
                            <h5 className='images-description1'>Minute by Tuk Tuk</h5>
                            <p className='images-description2'>Cafe<span className='span1'>Western Food</span><i class="fa-solid fa-star"><span>4.9</span></i></p>
                        </article>
                        <article className='card1'>
                            <img className='slider-images1' src="../../pizza2.jpg" alt="" />
                            <h5 className='images-description1'>Cafe De Bambaa</h5>
                            <p className='images-description2'>Cafe<span className='span1'>Western Food</span><i class="fa-solid fa-star"><span>4.9</span></i></p>
                        </article>
                    </div>
                </div>
                <div className='heading-and-link3'>
                    <h2 className='heading2'>Recent Items</h2>
                    <div className='div-with-link2'><a href="">view all</a></div>
                </div>
                <div className='recent-items'>
                    <div>
                        <img className='image' src="../../pizza.jpg" alt="" />
                    </div>
                    <div className='image-details'>
                        <h5>Mulberry pizza by josh</h5>
                        <p>Cafe <span>Western Food</span></p>
                        <p className='p2'><i class="fa-solid fa-star"><span>4.9</span></i> (124 Ratings)</p>
                    </div>
                </div>
                <div className='recent-items'>
                    <div>
                        <img className='image' src="../../coffee.jpg" alt="" />
                    </div>
                    <div className='image-details'>
                        <h5>Barista</h5>
                        <p>Cafe <span>Western Food</span></p>
                        <p className='p2'><i class="fa-solid fa-star"><span>4.9</span></i> (124 Ratings)</p>
                    </div>
                </div>
                <div className='recent-items recent-item-3'>
                    <div>
                        <img className='image' src="../../pizza2.jpg" alt="" />
                    </div>
                    <div className='image-details'>
                        <h5>Pizza Rush Hour</h5>
                        <p>Cafe <span>Western Food</span></p>
                        <p className='p2'><i class="fa-solid fa-star"><span>4.9</span></i> (124 Ratings)</p>
                    </div>
                </div>
            </div>
    )
}
