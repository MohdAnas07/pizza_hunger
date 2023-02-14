import React, { useState } from 'react'
import '../scss/pizzaCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { setProducts } from '../redux/actions/productActions';

const PizzaCard = ({ pizza }) => {
    const notify = () => toast("Item Added!");

    const products = useSelector((state) => state)
    const dispatch = useDispatch()
    const [isAdded, setIsAdded] = useState(false);


    AOS.init({
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out',
        once: true,
        offset: 80,
    });


    const addProduct = (pizza) => {
        setIsAdded(true)
        setTimeout(() => {
            setIsAdded(false)
        }, 500)

        // notify()
        dispatch(setProducts(pizza))
    }

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
                        <button style={isAdded ? { backgroundColor: 'rgb(110, 110, 110)' } : {}} onClick={() => addProduct(pizza)} data-pizza="{JSON.stringify(pizza)}"
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