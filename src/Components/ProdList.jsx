import React from 'react';

const ProdList = (props) => {

    const {arr, setBasket} = props

    function Order(item){
        setBasket(item)
    }

    return (
        <div>
            {
                arr?.map((item, index) => {
                return <div key={item.name}>
                    <h4>{item.name}</h4>
                    <span>{item.price}</span>
                    <button onClick={() => Order(item)}>Order</button>
                </div>
                })
            }
        </div>
    );
}

export default ProdList;
