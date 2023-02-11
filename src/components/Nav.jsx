import React from 'react';
import '../scss/nav.scss';

const Nav = () => {
    return (
        <div className="nav">
            <div className="wrapper">
                <div className="leftNav">
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <div className="rightNav">
                    <ul className="navItems">
                        <li className="navItem">Home</li>
                        <li className="navItem">About</li>
                        <li className="navItem">Contact</li>
                        <li className="navItem"><img src="./images/cart.png" alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav