import React, { useState } from 'react';
import '../scss/home.scss';
import { pizzas } from '../pizza_data';
import PizzaCard from '../components/PizzaCard';

// import { HashScroll } from "react-hash-scroll";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    AOS.init({
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out',
        once: true,
    });

    return (
        <div className="home">
            <div className="wrapper">
                <div className="homeSection">
                    <div className="leftHome">
                        <div data-aos='zoom-in' className="topLeftHome">
                            <h1 >Pizza Hunger</h1>
                        </div>
                        <div className="bottomLeftHome">
                            <h6 data-aos='zoom-in' className=""><em> Are you Hunger?</em></h6>
                            <h1 data-aos='zoom-in' className="">Don't Wait !</h1>
                            <button data-aos='zoom-in' class="ordBtn">Order Now</button>
                        </div>
                    </div>

                    <div className="rightHome">
                        <img data-aos='zoom-in' className='heroImg' src="./images/hero-pizza.png" alt="" />
                    </div>

                </div>

                {/* <HashScroll hash="#menu"> */}
                <div className="pizzaSection">
                    <h2 data-aos='fade-up'>All Pizzas </h2>
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
                {/* </HashScroll> */}
            </div>


        </div>
    )
}

export default Home