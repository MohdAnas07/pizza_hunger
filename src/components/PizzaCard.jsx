import React from 'react'
import '../scss/pizzaCard.scss';

const PizzaCard = ({ pizza }) => {
    return (
        <div className=" card">
            <div className="cardWrapper">
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