import React from 'react';
import '../App.css'

const Cart = (props) => {
    const {basket, setBasket} = props

    function Remove(name){
        setBasket(all => all.filter(elem => elem.name !== name))
    }

    return (
        <div className='main'>
            {
                basket?.map((item, index) => {
                    return <div key={item.name} className="prod">
                        <h4>{item.name}</h4>
                        <span>{item.price}</span>
                        <button onClick={() => Remove(item.name)}>Remove</button>
                    </div>
                })
            }
        </div>
    );
}

export default Cart;
