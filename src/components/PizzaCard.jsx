import React from 'react'
import '../scss/pizzaCard.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

const PizzaCard = ({ pizza }) => {

    AOS.init({
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out',
        once: true,
        offset: 80,
    });
    return (
        <div className="card">
            <div data-aos="zoom-in" className="cardWrapper">
                <img className="cardImg" src={pizza.image} alt="" />
                <div className="cardInfo">
                    <h2 className="cardInfoName">{pizza.name}</h2>
                    <span className="cardInfoSize">
                        {pizza.size}
                    </span>
                    <div className="cardInfoPrice">
                        <span className="">₹{pizza.price}</span>
                        <button data-pizza="{JSON.stringify(pizza) }"
                            className="cardInfoBtn">
                            <span className="">+</span>
                            <span className="">Add</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaCard