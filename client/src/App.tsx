import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './page/Home.jsx'
import Collection from './page/Collection.jsx'
import Marketplace from './page/Marketplace.jsx'

import './App.css'
import { useConnectContext } from './context/ConnectContext.js'
// import React = require("react")

const App = () => {

  const {signer} = useConnectContext();

  console.log(signer);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/marketplace' element={<Marketplace />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
