import React, { useState } from 'react';
import '../scss/nav.scss';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="nav">
            <div className="wrapper">
                <div className="leftNav">
                    <Link to='/'><img src="./images/logo.png" alt="logo" /> </Link>
                </div>

                {/* In DeskTop Mode */}
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


                {/* { Hamburger Menu } */}

                <div className="hamburgerMenu">
                    <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
                </div>

                {/* In Mobile Mode Show Menu*/}
                {
                    showMenu && <ul className="mobilMenu">
                        <li onClick={() => setShowMenu(false)} className="navItem">
                            <Link to='/'>Home </Link>
                        </li>
                        <li onClick={() => setShowMenu(false)} className="navItem">
                            <Link to="/#menu">Menu</Link>
                        </li>
                        <li onClick={() => setShowMenu(false)} className="navItem">
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li onClick={() => setShowMenu(false)} className="navItem">
                            <Link to='/cart'>
                                <img src="./images/cart.png" alt="" />
                            </Link>
                        </li>
                    </ul>
                }



            </div>
        </div>
    )
}

export default Nav