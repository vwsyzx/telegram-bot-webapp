import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart';
import ProdList from './Components/ProdList';

const tg = window.Telegram.WebApp;

function App() {

  const [mood, setMood] = useState(false)

  const [arr, setArr] = useState([
    {name: 'Big Mac', price: '10.0', type: 'burger', img: ''},
    {name: 'Double Mac', price: '12.0', type: 'burger', img: ''},
    {name: 'Papperoni-Big', price: '16.0', type: 'pizza', img: ''},
    {name: 'Cheezes-Big', price: '14.0', type: 'pizza', img: ''}
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
      <span onClick={() => setMood(!mood)}>Cart</span>
      <>
        {!mood?<ProdList arr={arr} setBasket={setBasket}/>:mood?<Cart basket={basket} setBasket={setBasket}/>:null}
      </>
      <button onClick={() => CloseBot()}>Close</button>
    </div>
  )
}

export default App
