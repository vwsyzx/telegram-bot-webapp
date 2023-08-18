import { useEffect } from 'react';
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

  const [arr, setArr] = useState([
    {name: 'Big Mac', price: '10.0', type: 'burger', img: ''},
    {name: 'Double Mac', price: '12.0', type: 'burger', img: ''},
    {name: 'Papperoni-Big', price: '16.0', type: 'pizza', img: ''},
    {name: 'Lavash', price: '14.0', type: 'fastfood', img: ''},
    {name: 'Donar', price: '14.0', type: 'fastfood', img: ''},
    {name: 'Cheezz-Cake', price: '14.0', type: 'dessert', img: ''},
    {name: 'KFC', price: '14.0', type: 'fastfood', img: ''}
  ])
  const [basket, setBasket] = useState([])
  useEffect(() => {
    tg.ready()
  }, [])

  function CloseBot(){
    tg.close()
  }

  return (
    <div className='mainCss'>
      <div className='header'>
        <div className='input1'>
          <span className='icon1'><BiSearchAlt2/></span>
          <input type="search" value={input1} onChange={(ev) => setInput1(ev.target.value)}/>
        </div>
        <span className='icon1' onClick={() => setMood(!mood)}><FiShoppingCart/></span>
      </div>
      {!mood?<ProdList arr={arr} setBasket={setBasket}/>:mood?<Cart basket={basket} setBasket={setBasket}/>:null}
      <button onClick={() => CloseBot()}>Close</button>
    </div>
  )
}

export default App
