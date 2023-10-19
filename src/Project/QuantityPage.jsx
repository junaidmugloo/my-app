import React from 'react'
import './otpPage.css'
import { Link } from 'react-router-dom';

let backgroundImage1= {
    height:"248px",
    width:"100%",
    backgroundImage:'url(pizza4.jpg)',
    backgroundSize:"contain",
    backgroundRepeat:"no-repeat",
};

const show = (anything)=>{
    document.querySelector(".textBox").value = anything;
}
const show1 = (anything1)=>{
    document.querySelector(".textBox22").value = anything1;
}
export default function QuantityPage() {
    return (
        
        <div className='container20'>
            <div className='backgroundimage1' style={backgroundImage1}>
            <div className='inbox quantitypage'>
                <div className='inbox-back-icon'><Link to='/'><i class="fa-solid fa-angle-left quantitypage-back-icon"></i></Link></div>
                <div className='inboxPage-cart-icon quantitypage-cart'><ion-icon name="cart"></ion-icon></div>
            </div>
            <div className='heart-icon-div'>
                        <div className='inner-heart-icon-div'>
                            <ion-icon name="heart"></ion-icon>
                        </div>
                    </div>
            </div>
            <div className='foods-content'>
                <div className='food-content-details'>
                    <div className='content-h6'>
                        <h6>Tandoori Chicken Pizza</h6>
                    </div>
                    
                </div>
                <div className='ratings-and-prize'>
                    <div className='ratings'>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-regular fa-star"></i></span>
                        <p>4 Star Ratings</p>
                    </div>
                    <div className='prize'>
                        <h2>Rs. 750</h2>
                        <p>/ per Portion</p>
                    </div>
                </div>
                <div className='description-div'>
                    <h6>Description</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa reiciendis excepturi veritatis veniam ratione esse perspiciatis ab eaque omnis.</p>
                </div>
                <div className='quantity-area'>
                    <h6>Customize your Order</h6>
                    <div className='dropdown1'>
                        <input type="text" className='textBox' placeholder='- Select the size of portion -' readOnly/>
                        <div className='option'>
                            <div onClick={() => show("Regular")}>Regular</div>
                            <div onClick={() => show("Medium")}>Medium</div>
                            <div onClick={() => show("Large")}>Large</div>
                            <div onClick={() => show("Loaded Cheese Burst")}>Loaded Cheese Burst</div>
                            <div onClick={() => show("Burst")}>Burst</div>
                        </div>
                    </div>
                    <div className='dropdown22'>
                        <input type="text" className='textBox22' placeholder='- Select the Ingredients -' readOnly/>
                        <div className='option22'>
                            <div onClick={() => show1("Mushrooms")}>Mushrooms</div>
                            <div onClick={() => show1("Onions")}>Onions</div>
                            <div onClick={() => show1("Lam")}>Lam</div>
                            <div onClick={() => show1("Tomato")}>Tomato</div>
                            <div onClick={() => show1("Red Chilli")}>Red Chilli</div>
                        </div>
                    </div>
                </div>
                <div className='portions'>
                    <div className='portion-description'>
                        <h6>Number of Portions</h6>
                    </div>
                    <div className='increase-or-decrease'>
                        <button className='inc-buttons decrease1'>-</button>
                        <button className='inc-buttons constant1'>2</button>
                        <button className='inc-buttons increase1'>+</button>
                    </div>
                </div>
                <div className='bottom-div'>
                    <div className='inner-div1'></div>
                    <div className='inner-div2'>
                        <div className='inner-div2-1'>
                            <div className='inner-div2-11'>
                                <p>Total Price</p>
                                <h5>LKR 1500</h5>
                                <p><button>Add to Cart</button></p>
                            </div>
                            <div className='bottom-div-cart-icon'>
                                <span><ion-icon name="cart"></ion-icon></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
