import React from 'react';
import '../App.css'

const ProdList = (props) => {

    const {arr, setBasket} = props

    function Order(item){
        setBasket(all => [...all, item])
    }

    return (
        <div className='main'>
            {
                arr?.map((item, index) => {
                return <div key={item.name} className="prod">
                    <h4>{item.name}</h4>
                    <span>{item.price}</span>
                    <button onClick={() => Order(item)}>Add</button>
                </div>
                })
            }
        </div>
    );
}

export default ProdList;
