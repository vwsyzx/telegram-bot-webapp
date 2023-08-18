import React from 'react';
import '../App.css'
import { FiPlus, FiMinus } from 'react-icons/fi'

const Cart = (props) => {
    const {basket, setBasket, arr, setArr} = props

    function deleteFromBasket(id){
        setBasket(basket.filter(elem => elem.id !== id))
    }
    function Order(item){
        setBasket(basket.map(elem => {
            if(elem.id === item.id){
                elem === item
            }
            return elem
        }))
    }

    function Inc(item){
        setArr(arr.map(elem => {
            if(elem.id === item.id){
                elem.amount = elem.amount + 1
                Order(elem)
            }
            return elem
        }))
    }
    function Dec(item){
        setArr(arr.map(elem => {
            if(elem.id === item.id){
                if(elem.amount === 1){
                    elem.amount = 0
                    deleteFromBasket(item.id)
                }
                else if(elem.amount > 1){
                    elem.amount = elem.amount - 1
                    Order(elem)
                }
            }
            return elem
        }))
        
    }

    return (
        <div className='main'>
            {
                basket?.map((item, index) => {
                    return <div key={item.id} className="prod">
                        <div className='content'>
                                <h4 className='name'>{item.name}</h4>
                                <span className='price'>${item.price}</span>
                                <span className='name_amount'>amount: <span className='amount'>{item.amount}</span></span>
                            </div>
                            <div className='tool'>
                                <button onClick={() => Inc(item)} className="btn-prod"><FiPlus className='core-icon'/></button>
                                <button onClick={() => Dec(item)} className="btn-prod"><FiMinus className='core-icon'/></button>
                            </div>
                    </div>
                })
            }
        </div>
    );
}

export default Cart;
