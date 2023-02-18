import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
    return (
        <div style={{ minHeight: "calc(100vh - 70px)", display: 'flex', flexDirection: 'column', alignItems: 'center', }} className="order">
            <div style={{ height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }} className="orderWrapper">
                <h1>Your Order Successfully Done.</h1>
                <h2>It will be on your door in just 30min.</h2>
                <h3>Thankyou for shopping and visiting our site.</h3>
                <button style={{ color: '#fff ' }} ><Link style={{ color: '#fff ' }} to='/'>Back To Home</Link> </button>
            </div>
        </div>
    )
}

export default Order