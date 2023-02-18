import React, { useState } from 'react';
import '../scss/home.scss';
import PizzaCard from '../components/PizzaCard';

import { pizzas } from '../pizza_data';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from '../components/Menu';

const Home = () => {
    AOS.init({
        duration: 600, // 
        easing: 'ease-in-out',
        once: true,
        offset: 80,
    });
    console.log(window.innerWidth)

    return (
        <div className="home">
            <div className="wrapper">
                <div className="homeSection">
                    <div className="leftHome">
                        <div data-aos='zoom-in' className="topLeftHome">
                            <h1 >Pizza Hunger</h1>
                            <div className='mobile-pizza'>
                                <img src="./images/hero-pizza.png" alt="" />
                            </div>
                        </div>
                        <div className="bottomLeftHome">
                            <h6 data-aos='zoom-in' className=""><em> Are you Hunger?</em></h6>
                            <h1 data-aos='zoom-in' className="">Don't Wait !</h1>
                            <button data-aos='zoom-in' className="ordBtn">Order Now</button>
                        </div>
                    </div>

                    <div className="rightHome">
                        <img data-aos='zoom-in' className='heroImg' src="./images/hero-pizza.png" alt="" />
                    </div>

                </div>


                {/* Menu Cart  */}
                <Menu pizzas={pizzas.slice(0, 8)} />

            </div>


        </div>
    )
}

export default Home