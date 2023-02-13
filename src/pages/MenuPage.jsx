import React from 'react'
import Menu from '../components/Menu'
import { pizzas } from '../pizza_data';
import '../scss/home.scss';
import '../scss/menu.scss'

const MenuPage = () => {
    return (
        <div className="menuPage">
            <div className="home">
                <div className="wrapper">
                    <Menu pizzas={pizzas} />
                </div>
            </div>
        </div>
    )
}

export default MenuPage