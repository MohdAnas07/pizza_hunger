import React from 'react'
import { useDispatch } from 'react-redux'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { removeProduct } from '../redux/actions/productActions'

const CartItems = ({ allProducts, count, totalPrice }) => {

    const dispatch = useDispatch()

    const deleteItem = (p) => {
        dispatch(removeProduct(p))
    }

    return (
        <div className="order container mx-auto w-1/2 ">
            {/* { */}
            <div className=" flex items-center border-b border-gray-300 pb-4">
                <img src="/img/cart-black.png" alt="" />
                <h1 className="font-bold ml-4 text-2xl">Order Summary</h1>
            </div>

            <div style={{ overflowY: 'scroll', height: '250px', paddingRight: '10px' }} className="pizza-list scroll-y">
                {
                    allProducts.map(p => {
                        return (
                            <div key={p._id} className="flex space-evenly items-center mx-auto py-3">
                                <img className="w-16 " src={p.image} alt="" />
                                <div className="flex-1 ml-4">
                                    <h1 className='text-lg' > {p.name}</h1>
                                    <span className="text-gray-500"> {p.size}</span>
                                </div>
                                <span className="flex-1"> 1 Pcs</span>
                                <span className="font-bold text-lg">₹{p.price}</span>
                                <RiDeleteBin5Fill onClick={() => deleteItem(p)} className='deleteIcon' />
                            </div>
                        )
                    })
                }
            </div>
            <hr className="border-gray-300" />
            <div className="text-right py-4">
                <div>
                    <span className="text-gray-500"> {count} pics </span>
                    <span className="font-bold text-lg">Total Amount : </span>
                    <span className="amount font-bold text-2xl ml-2">₹ {totalPrice}</span>
                </div>

                <div>
                    <form action="/orders" method="POST" className="mt-10">
                        <input name="phone" className="border border-gray-400 p-2 w-1/2 my-2" type="text"
                            placeholder="Phone Number" />
                        <input name="address" className="border border-gray-400 p-2 w-1/2 my-2" type="text"
                            placeholder="Address" />

                        <div>
                            <button type="submit" className="btn-shadow my-3 py-2 px-6 rounded-full">Order Now </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default CartItems