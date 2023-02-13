import React, { useEffect, useState } from 'react'
import '../scss/cart.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItems from '../components/CartItems';


const Cart = () => {
    const { allProducts } = useSelector((state) => state);
    const [len, setLen] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0);

    console.log(allProducts)
    useEffect(() => {
        setLen(allProducts.length)
        if (len) {
            setTotalPrice(allProducts.reduce((acc, cur) => acc + parseInt(cur.price), 0))
        }
    }, [allProducts, len])

    return (
        <>
            {
                len > 0 ? <CartItems allProducts={allProducts} count={len} totalPrice={totalPrice} />
                    :
                    (<div className='cart'>
                        <div className="cartWrapper">
                            <h1 className="">Cart Empty 🙁</h1>
                            <p className=""> You Probably haven't ordered Pizza yet.
                                To Order a pizza, go to main Page.</p>
                            <img className="cartImg" src="./images/empty-cart.png" alt="" />
                            <Link to="/" ><button className='cartBtn'> Go Back</button></Link>
                        </div>
                    </div>)
            }
        </>
    )
}

export default Cart