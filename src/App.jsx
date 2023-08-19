import { useEffect, useRef } from 'react';
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart';
import ProdList from './Components/ProdList';
import {FiShoppingCart} from 'react-icons/fi'
import {BiSearchAlt2} from 'react-icons/bi'


const tg = window.Telegram.WebApp;

function App() {

  const [input1, setInput1] = useState('')
  const [mood, setMood] = useState(false)
  const inputRef = useRef()
  

  const [arr, setArr] = useState([
    {name: 'Big Mac', price: '10.0', type: 'burger', img: '', id: 'asdkuehrjka', amount: 0},
    {name: 'Double Mac', price: '12.0', type: 'burger', img: '', id: 'iojnasjkdyer', amount: 0},
    {name: 'Papperoni-Big', price: '16.0', type: 'pizza', img: '', id: 'mklasdnbhfaer', amount: 0},
    {name: 'Lavash', price: '14.0', type: 'fastfood', img: '', id: 'olaowekajyxawe', amount: 0},
    {name: 'Donar', price: '14.0', type: 'fastfood', img: '', id: 'opiqwemzxkcqe', amount: 0},
    {name: 'Cheezz-Cake', price: '14.0', type: 'dessert', img: '', id: 'aweaxcmnaseqwec', amount: 0},
    {name: 'KFC', price: '14.0', type: 'fastfood', img: '', id: 'xcvkjsuierxcqqwti', amount: 0}
  ])
  const [basket, setBasket] = useState([])

  useEffect(() => {
    tg.ready()
  }, [])

  function CloseBot(){
    console.log(tg.sendData('hii'))
  }
  function Focus(){
    inputRef.current.focus()
  }

  return (
    <div className='mainCss'>
      <div className='order'>
        <button onClick={() => CloseBot()}>Order</button>
      </div>
      <div className='header'>
        <div className='input1' onClick={() => Focus()}>
          <span className='icon3'><BiSearchAlt2/></span>
          <input ref={inputRef} type="search" value={input1} onChange={(ev) => setInput1(ev.target.value)}/>
        </div>
        <span className={mood?'icon1':"icon2"} onClick={() => {setMood(!mood)}}><FiShoppingCart/></span>
      </div>
      {!mood?<ProdList setBasket={setBasket} basket={basket} setArr={setArr} arr={arr}/>:mood?<Cart basket={basket} setBasket={setBasket} setArr={setArr} arr={arr}/>:null}
    </div>
  )
}

export default App
