import React from 'react'
import '../scss/cart.scss';

const Cart = () => {
    return (
        <div className='cart'>
            <div class="cartWrapper">
                <h1 class="">Cart Empty 🙁</h1>
                <p class=""> You Probably haven't ordered Pizza yet.
                    To Order a pizza, go to main Page.</p>
                <img class="cartImg" src="./images/empty-cart.png" alt="" />
                <button className='cartBtn'><a href="/" > Go Back</a></button>
            </div>
        </div>
    )
}

export default Cart