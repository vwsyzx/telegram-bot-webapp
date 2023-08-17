import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready()
  }, [])

  function CloseBot(){
    tg.close()
  }

  return (
    <div>
      Works!
      <button onClick={() => CloseBot()}>Close</button>
    </div>
  )
}

export default App
