import React from 'react'



import PizzaCard from './PizzaCard';

const Menu = ({ pizzas }) => {
    return (
        <>
            {/* <HashScroll hash="#menu"> */}
            <div className="pizzaSection" >
                <h2 style={{ fontSize: '2rem', lineHeight: 1 }} data-aos='fade-up'>All Pizzas </h2>
                <div className="pizzaWrapper">
                    {
                        pizzas && pizzas.map(p => {
                            return (
                                <PizzaCard key={p._id} pizza={p} />
                            )
                        })
                    }
                </div>
            </div >
            {/* </HashScroll> */}
        </>
    )
}

export default Menu