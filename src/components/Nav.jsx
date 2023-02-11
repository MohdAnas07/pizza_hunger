import React from 'react';
import '../scss/nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <div className="wrapper">
                <div className="leftNav">
                    <Link to='/'><img src="./images/logo.png" alt="logo" /> </Link>
                </div>
                <div className="rightNav">
                    <ul className="navItems">
                        <li className="navItem">
                            <Link to='/'>Home </Link>
                        </li>
                        <li className="navItem">
                            <Link to="/#menu">Menu</Link>

                        </li>
                        <li className="navItem">
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li className="navItem">
                            <Link to='/cart'>
                                <img src="./images/cart.png" alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav