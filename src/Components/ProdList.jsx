import React from 'react';
import '../App.css'
import { FiPlus, FiMinus } from 'react-icons/fi'

const ProdList = (props) => {

    const {arr, setBasket, basket, setArr} = props
    function deleteFromBasket(id){
        setBasket(basket.filter(elem => elem.id !== id))
    }
    function firstOrder(item){
        setArr(arr.map(elem => {
            if(elem.id === item.id){
                elem.amount = 1
                item.amount = 1
            }
            return elem
        }))
        setBasket(all => [...all, item])
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
                arr?.map((item, index) => {
                    if(item.amount >= 1){
                        return <div key={item.id} className="prod">
                            <div className='content'>
                                <h4 className='name'>{item.name}</h4>
                                <span className='price'>${item.price}</span>
                                <span className='name_amount'>amount: <span className='amount'>{item.amount}</span></span>
                            </div>
                            <div className='tool'>
                                <button onClick={() => Inc(item)} className="btn-prod"><FiPlus style={{fontSize: '60px'}}/></button>
                                <button onClick={() => Dec(item)} className="btn-prod"><FiMinus style={{fontSize: '60px'}}/></button>
                            </div>
                        </div>
                    }
                    else{
                        return <div key={item.id} className="prod">
                            <div className='content'>
                                <h4 className='name'>{item.name}</h4>
                                <span className='price'>${item.price}</span>
                            </div>
                            <div className='tool'>
                                <button onClick={() => firstOrder(item)} className="btn-prod-add">Add</button>
                            </div>
                        </div>
                    }
                })
            }
        </div>
    );
}

export default ProdList;
