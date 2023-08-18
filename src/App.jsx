import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'

const tg = window.Telegram.WebApp;

function App() {

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

  function Order(item){
    setBasket(item)
  }

  return (
    <div>
      <span>Cart</span>
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
      <button onClick={() => CloseBot()}>Close</button>
    </div>
  )
}

export default App
