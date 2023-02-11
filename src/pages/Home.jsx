import React, { useState } from 'react';
import '../scss/home.scss';
import { pizzas } from '../pizza_data';
import PizzaCard from '../components/PizzaCard';

const Home = () => {
    return (
        <div className="home">
            <div className="wrapper">
                <div className="leftHome">
                    <div className="topLeftHome">
                        <h1>Pizza Hunger</h1>
                    </div>
                    <div className="bottomLeftHome">
                        <h6 className=""><em> Are you Hunger?</em></h6>
                        <h1 className="">Don't Wait !</h1>
                        <button class="ordBtn">Order Now</button>
                    </div>
                </div>
                <div className="rightHome">
                    <img className='heroImg' src="./images/hero-pizza.png" alt="" />
                </div>
            </div>

            <div className="pizzaSection">
                <h2 >All Pizzas </h2>
                <div className="pizzaWrapper">
                    {
                        pizzas && pizzas.map(p => {
                            return (
                                <PizzaCard key={p._id} pizza={p} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home