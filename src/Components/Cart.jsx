import React from 'react';

const Cart = (props) => {
    const {basket, setBasket} = props

    function Remove(name){
        setBasket(all => all.filter(elem => elem.name !== name))
    }

    return (
        <div>
            {
                basket?.map((item) => {
                    return <div key={item.name}>
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
