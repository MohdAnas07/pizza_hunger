import React, { useEffect, useState } from 'react';
import '../scss/nav.scss';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { AiOutlineCloseSquare } from 'react-icons/ai'


const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { allProducts } = useSelector((state) => state);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(allProducts.length)
    }, [allProducts])


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
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li className="navItem">
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li className="navItem cartIcon">
                            <Link to='/cart'>
                                <BsFillCartPlusFill style={{ fontSize: "1.2rem" }} />
                                {
                                    count > 0 && <span className="countBadge">{count}</span>
                                }
                            </Link>
                        </li>
                    </ul>
                </div>


                {/* { Hamburger Menu } */}
                <div className="hamburgerMenu">
                    <div className="cartIcon">
                        <Link to='/cart'>
                            <BsFillCartPlusFill style={{ fontSize: "1.2rem" }} />
                            {count > 0 && <span className="countBadge">{count}</span>}
                        </Link>
                    </div>
                    <div onClick={() => setShowMenu(!showMenu)}>
                        {
                            showMenu ? <AiOutlineCloseSquare /> : <GiHamburgerMenu />
                        }
                    </div>
                </div>



                {/* In Mobile Mode Show Menu*/}
                {
                    showMenu && <ul onClick={() => setShowMenu(false)} className="mobilMenu">
                        <li className="navItem">
                            <Link to='/'>Home </Link>
                        </li>
                        <li className="navItem">
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li className="navItem">
                            <Link to='/contact'>Contact</Link>
                        </li>

                    </ul>
                }



            </div>
        </div>
    )
}

export default Nav